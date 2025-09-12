import { useEffect, useState } from 'react';

/**
 * Hook to prevent hydration mismatches by ensuring components only render
 * interactive content after the component has mounted on the client.
 *
 * This is particularly useful for components that use libraries like Radix UI
 * that generate unique IDs, which can differ between server and client rendering.
 *
 * @returns {boolean} - True if the component has mounted on the client
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}

/**
 * Hook to safely access window object and other browser-only APIs
 * without causing hydration mismatches.
 *
 * @returns {boolean} - True if running on the client (browser)
 */
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
