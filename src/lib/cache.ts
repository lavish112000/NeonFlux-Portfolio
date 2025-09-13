// Cache management utilities for the NeonFlux Portfolio

import { logger } from './logger';

export interface CacheConfig {
  ttl: number;
  maxSize: number;
  strategy: 'lru' | 'fifo' | 'lfu';
}

export class CacheManager {
  private static instance: CacheManager;
  private caches = new Map<string, Map<string, CacheEntry>>();
  private config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      ttl: 30 * 60 * 1000, // 30 minutes
      maxSize: 100,
      strategy: 'lru',
      ...config,
    };
  }

  static getInstance(config?: Partial<CacheConfig>): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager(config);
    }
    return CacheManager.instance;
  }

  private getCache(namespace: string): Map<string, CacheEntry> {
    if (!this.caches.has(namespace)) {
      this.caches.set(namespace, new Map());
    }
    const cache = this.caches.get(namespace);
    if (!cache) {
      throw new Error(`Failed to get or create cache for namespace: ${namespace}`);
    }
    return cache;
  }

  set(namespace: string, key: string, value: unknown, ttl?: number): void {
    const cache = this.getCache(namespace);
    const entry: CacheEntry = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl,
      hits: 0,
    };

    // Remove oldest entry if cache is full
    if (cache.size >= this.config.maxSize) {
      this.evict(namespace);
    }

    cache.set(key, entry);
  }

  get<T>(namespace: string, key: string): T | null {
    const cache = this.getCache(namespace);
    const entry = cache.get(key);

    if (!entry) {
      return null;
    }

    // Check if expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      cache.delete(key);
      return null;
    }

    entry.hits++;
    return entry.value as T;
  }

  has(namespace: string, key: string): boolean {
    const cache = this.getCache(namespace);
    const entry = cache.get(key);

    if (!entry) {
      return false;
    }

    if (Date.now() - entry.timestamp > entry.ttl) {
      cache.delete(key);
      return false;
    }

    return true;
  }

  delete(namespace: string, key: string): boolean {
    const cache = this.getCache(namespace);
    return cache.delete(key);
  }

  clear(namespace?: string): void {
    if (namespace) {
      this.caches.delete(namespace);
    } else {
      this.caches.clear();
    }
  }

  private evict(namespace: string): void {
    const cache = this.getCache(namespace);

    if (this.config.strategy === 'lru') {
      // Remove least recently used (oldest timestamp)
      let oldestKey: string | null = null;
      let oldestTime = Date.now();

      for (const [key, entry] of cache.entries()) {
        if (entry.timestamp < oldestTime) {
          oldestTime = entry.timestamp;
          oldestKey = key;
        }
      }

      if (oldestKey) {
        cache.delete(oldestKey);
      }
    } else if (this.config.strategy === 'lfu') {
      // Remove least frequently used
      let leastUsedKey: string | null = null;
      let leastHits = Infinity;

      for (const [key, entry] of cache.entries()) {
        if (entry.hits < leastHits) {
          leastHits = entry.hits;
          leastUsedKey = key;
        }
      }

      if (leastUsedKey) {
        cache.delete(leastUsedKey);
      }
    } else {
      // FIFO - remove first inserted
      const firstKey = cache.keys().next().value;
      if (firstKey) {
        cache.delete(firstKey);
      }
    }
  }

  getStats(namespace?: string): CacheStats {
    if (namespace) {
      const cache = this.getCache(namespace);
      return this.calculateStats(cache);
    }

    const allStats: CacheStats = {
      totalEntries: 0,
      totalSize: 0,
      hitRate: 0,
      namespaces: {},
    };

    for (const [ns, cache] of this.caches.entries()) {
      const stats = this.calculateStats(cache);
      if (allStats.namespaces) {
        allStats.namespaces[ns] = stats;
      }
      allStats.totalEntries += stats.totalEntries;
      allStats.totalSize += stats.totalSize;
    }

    return allStats;
  }

  private calculateStats(cache: Map<string, CacheEntry>): CacheStats {
    let totalHits = 0;
    let totalAccesses = 0;
    let expiredCount = 0;

    for (const entry of cache.values()) {
      totalHits += entry.hits;
      totalAccesses += entry.hits;
      if (Date.now() - entry.timestamp > entry.ttl) {
        expiredCount++;
      }
    }

    return {
      totalEntries: cache.size,
      totalSize: this.estimateSize(cache),
      hitRate: totalAccesses > 0 ? totalHits / totalAccesses : 0,
      expiredEntries: expiredCount,
    };
  }

  private estimateSize(cache: Map<string, CacheEntry>): number {
    // Rough estimation - can be improved with more sophisticated size calculation
    let size = 0;
    for (const [key, entry] of cache.entries()) {
      size += key.length * 2; // Assume 2 bytes per character
      size += JSON.stringify(entry.value).length * 2;
      size += 100; // Overhead for entry metadata
    }
    return size;
  }
}

interface CacheEntry {
  value: unknown;
  timestamp: number;
  ttl: number;
  hits: number;
}

interface CacheStats {
  totalEntries: number;
  totalSize: number;
  hitRate: number;
  expiredEntries?: number;
  namespaces?: Record<string, CacheStats>;
}

// Pre-configured cache instances
export const aiCache = CacheManager.getInstance({
  ttl: 30 * 60 * 1000, // 30 minutes for AI responses
  maxSize: 50,
  strategy: 'lru',
});

export const apiCache = CacheManager.getInstance({
  ttl: 10 * 60 * 1000, // 10 minutes for API responses
  maxSize: 100,
  strategy: 'lru',
});

export const componentCache = CacheManager.getInstance({
  ttl: 5 * 60 * 1000, // 5 minutes for component data
  maxSize: 200,
  strategy: 'lfu',
});

// Utility functions
export function generateCacheKey(...parts: (string | number | boolean)[]): string {
  return parts.map(part => String(part).toLowerCase().trim()).join('_');
}

export function isExpired(timestamp: number, ttl: number): boolean {
  return Date.now() - timestamp > ttl;
}

// Cache warming function for frequently accessed data
export async function warmCache<T>(
  cache: CacheManager,
  namespace: string,
  keys: string[],
  fetcher: (key: string) => Promise<T>
): Promise<void> {
  const promises = keys.map(async (key) => {
    if (!cache.has(namespace, key)) {
      try {
        const data = await fetcher(key);
        cache.set(namespace, key, data);
      } catch (error) {
        logger.warn(`Failed to warm cache for ${namespace}:${key}`, error);
      }
    }
  });

  await Promise.allSettled(promises);
}
