import { cn } from '../utils';

describe('Utils', () => {
  describe('cn (classname utility)', () => {
    it('combines class names correctly', () => {
      const result = cn('btn', 'btn-primary', 'text-white');
      expect(result).toBe('btn btn-primary text-white');
    });

    it('handles conditional classes', () => {
      const isActive = true;
      const result = cn('btn', isActive && 'active');
      expect(result).toBe('btn active');
    });

    it('handles false conditions', () => {
      const isActive = false;
      const result = cn('btn', isActive && 'active');
      expect(result).toBe('btn');
    });

    it('handles undefined and null values', () => {
      const result = cn('btn', undefined, null, 'text-white');
      expect(result).toBe('btn text-white');
    });
  });
});