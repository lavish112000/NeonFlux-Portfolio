# Code Citations

## License: MIT

<https://github.com/RedMustard/RedMustard.io/blob/02eca35e66730726469b099fed32960a271185b3/next.config.js>

```
{
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
```

## License: GPL-3.0

<https://github.com/imranhsayed/nextjs-headless-wordpress/blob/d38f3081d3cc3b487f263b557ba4a1c0cda7749f/frontend/next.config.js>

```
{
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
```

## License: unknown

<https://github.com/winzeland/winzeland-landing/blob/985162c923d9f41a14c3663ca4429d0d1826532b/next.config.js>

```
{
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
```

## License: MIT

<https://github.com/navikt/pam-stillingsok/blob/b6e1a0ba01bec8a489ba7de4e6d7156d0449861d/cache-handler.mjs>

```
{ CacheHandler } from '@neshca/cache-handler';
import createLruHandler from '@neshca/cache-handler/local-lru';
import createRedisHandler from '@neshca/cache-handler/redis-strings';
import { createClient } from 'redis';

CacheHandler
```

## License: GPL-3.0

<https://github.com/Vrooli/Vrooli/blob/106abc103a18ac75b7a37d10ea4a598967499c79/packages/ui/src/hooks/useDebounce.ts>

```
.current) {
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

  return
```
