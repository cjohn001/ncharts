import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { NCharts, nchartsLog, nchartsError, parseColor, toPlatformColor } from './common';

// Mock Color from @nativescript/core
vi.mock('@nativescript/core', () => {
  class MockColor {
    private _value: string | number;
    public ios: any;
    public android: number;

    constructor(value: string | number) {
      this._value = value;
      // Simulate platform-specific color values
      this.ios = { description: `UIColor(${value})` };
      // For strings like '#FF0000', parse as hex; for numbers, use directly
      if (typeof value === 'number') {
        this.android = value;
      } else if (typeof value === 'string' && value.startsWith('#')) {
        // Simple hex parsing
        const hex = value.replace('#', '');
        if (hex.length === 6) {
          this.android = parseInt('FF' + hex, 16);
        } else if (hex.length === 8) {
          this.android = parseInt(hex, 16);
        } else {
          this.android = 0xffffffff;
        }
      } else {
        this.android = 0xffffffff;
      }
    }
  }

  class MockView {}

  // Property must be a constructor function
  class MockProperty {
    constructor(options: any) {
      // Store options if needed
    }
    register(_target: any) {
      // No-op in tests
    }
  }

  return {
    Color: MockColor,
    View: MockView,
    Property: MockProperty,
    CSSType: () => (target: any) => target,
  };
});

describe('NCharts', () => {
  describe('debug mode', () => {
    it('should have debug disabled by default', () => {
      expect(NCharts.debug).toBe(false);
    });

    it('should allow enabling debug mode', () => {
      NCharts.debug = true;
      expect(NCharts.debug).toBe(true);
      NCharts.debug = false; // Reset
    });

    it('should allow disabling debug mode', () => {
      NCharts.debug = true;
      NCharts.debug = false;
      expect(NCharts.debug).toBe(false);
    });
  });
});

describe('nchartsLog', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    NCharts.debug = false;
  });

  it('should not log when debug is disabled', () => {
    NCharts.debug = false;
    nchartsLog('test message');
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('should log when debug is enabled', () => {
    NCharts.debug = true;
    nchartsLog('test message');
    expect(consoleSpy).toHaveBeenCalledWith('test message');
  });

  it('should pass multiple arguments to console.log', () => {
    NCharts.debug = true;
    nchartsLog('message', 123, { key: 'value' });
    expect(consoleSpy).toHaveBeenCalledWith('message', 123, { key: 'value' });
  });

  it('should handle no arguments', () => {
    NCharts.debug = true;
    nchartsLog();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('nchartsError', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    NCharts.debug = false;
  });

  it('should not log errors when debug is disabled', () => {
    NCharts.debug = false;
    nchartsError('error message');
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('should log errors when debug is enabled', () => {
    NCharts.debug = true;
    nchartsError('error message');
    expect(consoleSpy).toHaveBeenCalledWith('error message');
  });

  it('should pass multiple arguments to console.error', () => {
    NCharts.debug = true;
    nchartsError('error', new Error('test'), { details: 'info' });
    expect(consoleSpy).toHaveBeenCalledWith('error', expect.any(Error), { details: 'info' });
  });
});

describe('parseColor', () => {
  describe('with string colors', () => {
    it('should parse hex color string', () => {
      const result = parseColor('#FF0000');
      expect(result).toBeDefined();
      expect(result?.android).toBeDefined();
      expect(result?.ios).toBeDefined();
    });

    it('should parse 8-character hex color with alpha', () => {
      const result = parseColor('#80FF0000');
      expect(result).toBeDefined();
      expect(result?.android).toBeDefined();
    });

    it('should handle named colors', () => {
      const result = parseColor('red');
      expect(result).toBeDefined();
    });

    it('should handle rgba string', () => {
      const result = parseColor('rgba(255, 0, 0, 0.5)');
      expect(result).toBeDefined();
    });
  });

  describe('with number colors', () => {
    it('should parse ARGB number', () => {
      const result = parseColor(0xffff0000);
      expect(result).toBeDefined();
      expect(result?.android).toBe(0xffff0000);
    });

    it('should parse zero color', () => {
      const result = parseColor(0x00000000);
      expect(result).toBeDefined();
      expect(result?.android).toBe(0x00000000);
    });

    it('should parse white color', () => {
      const result = parseColor(0xffffffff);
      expect(result).toBeDefined();
      expect(result?.android).toBe(0xffffffff);
    });
  });

  describe('with undefined/null', () => {
    it('should return undefined for undefined input', () => {
      const result = parseColor(undefined);
      expect(result).toBeUndefined();
    });

    it('should return undefined for null input', () => {
      const result = parseColor(null as any);
      expect(result).toBeUndefined();
    });
  });
});

describe('toPlatformColor', () => {
  describe('with valid colors', () => {
    it('should return platform-specific value for string color', () => {
      const result = toPlatformColor('#FF0000');
      expect(result).toBeDefined();
    });

    it('should return platform-specific value for number color', () => {
      const result = toPlatformColor(0xffff0000);
      expect(result).toBeDefined();
    });
  });

  describe('with undefined/null', () => {
    it('should return undefined for undefined input', () => {
      const result = toPlatformColor(undefined);
      expect(result).toBeUndefined();
    });

    it('should return undefined for null input', () => {
      const result = toPlatformColor(null as any);
      expect(result).toBeUndefined();
    });
  });
});
