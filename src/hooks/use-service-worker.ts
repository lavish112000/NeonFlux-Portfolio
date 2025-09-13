'use client';

import { useEffect, useState } from 'react';

import { logger } from '@/lib/logger';

interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  isActive: boolean;
  updateAvailable: boolean;
  error: string | null;
}

export function useServiceWorker(): ServiceWorkerState & {
  update: () => void;
  clearCache: () => void;
  getCacheStats: () => Promise<Record<string, unknown>>;
} {
  const [state, setState] = useState<ServiceWorkerState>({
    isSupported: false,
    isRegistered: false,
    isActive: false,
    updateAvailable: false,
    error: null,
  });

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      setState(prev => ({ ...prev, isSupported: false }));
      return;
    }

    setState(prev => ({ ...prev, isSupported: true }));

    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });

        logger.info('Service Worker registered:', registration);

        setState(prev => ({ ...prev, isRegistered: true }));

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setState(prev => ({ ...prev, updateAvailable: true }));
              }
            });
          }
        });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          setState(prev => ({ ...prev, isActive: true }));
        });

        // Check if already active
        if (navigator.serviceWorker.controller) {
          setState(prev => ({ ...prev, isActive: true }));
        }

      } catch (error) {
        logger.error('Service Worker registration failed:', error);
        setState(prev => ({
          ...prev,
          error: error instanceof Error ? error.message : 'Registration failed'
        }));
      }
    };

    registerSW();
  }, []);

  const update = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
        setState(prev => ({ ...prev, updateAvailable: false }));
        window.location.reload();
      });
    }
  };

  const clearCache = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'CLEAR_CACHE' });
    }
  };

  const getCacheStats = async (): Promise<Record<string, unknown>> => {
    return new Promise((resolve) => {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        const channel = new MessageChannel();
        channel.port1.onmessage = (event) => {
          if (event.data.type === 'CACHE_STATS') {
            resolve(event.data.stats);
          }
        };
        navigator.serviceWorker.controller.postMessage({ type: 'GET_CACHE_STATS' }, [channel.port2]);
      } else {
        resolve({});
      }
    });
  };

  return {
    ...state,
    update,
    clearCache,
    getCacheStats,
  };
}
