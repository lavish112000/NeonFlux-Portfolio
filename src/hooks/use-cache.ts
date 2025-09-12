import { useCallback, useEffect, useRef, useState } from 'react';
import { componentCache } from '@/lib/cache';

// Hook for caching expensive computations
export function useMemoCache<T>(
  factory: () => T,
  deps: React.DependencyList,
  ttl: number = 5 * 60 * 1000
): T {
  const key = `memo_${JSON.stringify(deps)}`;

  return useCallback(() => {
    const cached = componentCache.get<T>('memo', key);
    if (cached !== null) {
      return cached;
    }

    const result = factory();
    componentCache.set('memo', key, result, ttl);
    return result;
  }, deps)();
}

// Hook for caching async operations
export function useAsyncCache<T>(
  asyncFn: () => Promise<T>,
  deps: React.DependencyList,
  ttl: number = 10 * 60 * 1000
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const key = `async_${JSON.stringify(deps)}`;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const cached = componentCache.get<T>('async', key);
      if (cached !== null) {
        setData(cached);
        setLoading(false);
        return;
      }

      const result = await asyncFn();
      componentCache.set('async', key, result, ttl);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

// Hook for debounced search with caching
export function useDebouncedSearch<T>(
  searchFn: (query: string) => Promise<T[]>,
  debounceMs: number = 300
): {
  results: T[];
  loading: boolean;
  search: (query: string) => void;
  clear: () => void;
} {
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const search = useCallback(
    (query: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (!query.trim()) {
        setResults([]);
        return;
      }

      timeoutRef.current = setTimeout(async () => {
        const cacheKey = `search_${query.toLowerCase().trim()}`;
        const cached = componentCache.get<T[]>('search', cacheKey);

        if (cached) {
          setResults(cached);
          return;
        }

        setLoading(true);
        try {
          const searchResults = await searchFn(query);
          componentCache.set('search', cacheKey, searchResults, 15 * 60 * 1000); // 15 minutes
          setResults(searchResults);
        } catch (error) {
          console.error('Search failed:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      }, debounceMs);
    },
    [searchFn, debounceMs]
  );

  const clear = useCallback(() => {
    setResults([]);
    setLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { results, loading, search, clear };
}

// Cache statistics hook
export function useCacheStats() {
  return useCallback(() => {
    return componentCache.getStats();
  }, []);
}

// Cache management functions
export const componentCacheManager = {
  clear: () => componentCache.clear(),
  getStats: () => componentCache.getStats(),
};
