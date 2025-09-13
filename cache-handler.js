/* eslint-disable no-console */
import { CacheHandler } from '@neshca/cache-handler';
import createLruHandler from '@neshca/cache-handler/local-lru';
import createRedisHandler from '@neshca/cache-handler/redis-strings';
import { createClient } from 'redis';

CacheHandler.onCreation(async () => {
  let client;

  // Try to connect to Redis if available, fallback to LRU
  try {
    client = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

    await client.connect();
    console.log('[Cache] Connected to Redis');
  } catch (error) {
    console.error('[Cache] Redis connection failed:', error);
    client = undefined;
  }

  const handlers = [];

  if (client) {
    handlers.push(
      createRedisHandler({
        client,
        keyPrefix: 'neonflux-cache:',
        timeoutMs: 1000,
      })
    );
  }

  // Always include LRU as fallback
  handlers.push(
    createLruHandler({
      maxItemsNumber: 10000,
      maxItemsSizeBytes: 1024 * 1024 * 500, // 500MB
    })
  );

  return {
    handlers,
  };
});

export default CacheHandler;
