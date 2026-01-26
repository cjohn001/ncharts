import { describe, it, expect, vi } from 'vitest';
import { parseEasingIOS, parseLineChartModeIOS, parseScatterShapeIOS, toUIColor, toAndroidColor } from './utils';

// Mock @nativescript/core
vi.mock('@nativescript/core', () => {
  class MockColor {
    public ios: any;
    public android: number;
    constructor(value: string | number) {
      this.ios = { mockUIColor: true };
      this.android = typeof value === 'number' ? value : 0xff000000;
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

describe('parseEasingIOS', () => {
  describe('valid easing functions', () => {
    it('should return 0 for Linear', () => {
      expect(parseEasingIOS('Linear')).toBe(0);
    });

    it('should return 1 for EaseInQuad', () => {
      expect(parseEasingIOS('EaseInQuad')).toBe(1);
    });

    it('should return 2 for EaseOutQuad', () => {
      expect(parseEasingIOS('EaseOutQuad')).toBe(2);
    });

    it('should return 3 for EaseInOutQuad', () => {
      expect(parseEasingIOS('EaseInOutQuad')).toBe(3);
    });

    it('should return 4 for EaseInCubic', () => {
      expect(parseEasingIOS('EaseInCubic')).toBe(4);
    });

    it('should return 5 for EaseOutCubic', () => {
      expect(parseEasingIOS('EaseOutCubic')).toBe(5);
    });

    it('should return 6 for EaseInOutCubic', () => {
      expect(parseEasingIOS('EaseInOutCubic')).toBe(6);
    });

    it('should return 7 for EaseInQuart', () => {
      expect(parseEasingIOS('EaseInQuart')).toBe(7);
    });

    it('should return 8 for EaseOutQuart', () => {
      expect(parseEasingIOS('EaseOutQuart')).toBe(8);
    });

    it('should return 9 for EaseInOutQuart', () => {
      expect(parseEasingIOS('EaseInOutQuart')).toBe(9);
    });

    it('should return 10 for EaseInQuint', () => {
      expect(parseEasingIOS('EaseInQuint')).toBe(10);
    });

    it('should return 11 for EaseOutQuint', () => {
      expect(parseEasingIOS('EaseOutQuint')).toBe(11);
    });

    it('should return 12 for EaseInOutQuint', () => {
      expect(parseEasingIOS('EaseInOutQuint')).toBe(12);
    });

    it('should return 13 for EaseInSine', () => {
      expect(parseEasingIOS('EaseInSine')).toBe(13);
    });

    it('should return 14 for EaseOutSine', () => {
      expect(parseEasingIOS('EaseOutSine')).toBe(14);
    });

    it('should return 15 for EaseInOutSine', () => {
      expect(parseEasingIOS('EaseInOutSine')).toBe(15);
    });

    it('should return 16 for EaseInExpo', () => {
      expect(parseEasingIOS('EaseInExpo')).toBe(16);
    });

    it('should return 17 for EaseOutExpo', () => {
      expect(parseEasingIOS('EaseOutExpo')).toBe(17);
    });

    it('should return 18 for EaseInOutExpo', () => {
      expect(parseEasingIOS('EaseInOutExpo')).toBe(18);
    });

    it('should return 19 for EaseInCirc', () => {
      expect(parseEasingIOS('EaseInCirc')).toBe(19);
    });

    it('should return 20 for EaseOutCirc', () => {
      expect(parseEasingIOS('EaseOutCirc')).toBe(20);
    });

    it('should return 21 for EaseInOutCirc', () => {
      expect(parseEasingIOS('EaseInOutCirc')).toBe(21);
    });

    it('should return 22 for EaseInElastic', () => {
      expect(parseEasingIOS('EaseInElastic')).toBe(22);
    });

    it('should return 23 for EaseOutElastic', () => {
      expect(parseEasingIOS('EaseOutElastic')).toBe(23);
    });

    it('should return 24 for EaseInOutElastic', () => {
      expect(parseEasingIOS('EaseInOutElastic')).toBe(24);
    });

    it('should return 25 for EaseInBack', () => {
      expect(parseEasingIOS('EaseInBack')).toBe(25);
    });

    it('should return 26 for EaseOutBack', () => {
      expect(parseEasingIOS('EaseOutBack')).toBe(26);
    });

    it('should return 27 for EaseInOutBack', () => {
      expect(parseEasingIOS('EaseInOutBack')).toBe(27);
    });

    it('should return 28 for EaseInBounce', () => {
      expect(parseEasingIOS('EaseInBounce')).toBe(28);
    });

    it('should return 29 for EaseOutBounce', () => {
      expect(parseEasingIOS('EaseOutBounce')).toBe(29);
    });

    it('should return 30 for EaseInOutBounce', () => {
      expect(parseEasingIOS('EaseInOutBounce')).toBe(30);
    });
  });

  describe('invalid easing functions', () => {
    it('should return 0 (Linear) for unknown easing', () => {
      expect(parseEasingIOS('Unknown')).toBe(0);
    });

    it('should return 0 for empty string', () => {
      expect(parseEasingIOS('')).toBe(0);
    });

    it('should return 0 for lowercase easing', () => {
      expect(parseEasingIOS('linear')).toBe(0);
    });
  });
});

describe('parseLineChartModeIOS', () => {
  describe('valid modes', () => {
    it('should return 0 for LINEAR', () => {
      expect(parseLineChartModeIOS('LINEAR')).toBe(0);
    });

    it('should return 1 for STEPPED', () => {
      expect(parseLineChartModeIOS('STEPPED')).toBe(1);
    });

    it('should return 2 for CUBIC_BEZIER', () => {
      expect(parseLineChartModeIOS('CUBIC_BEZIER')).toBe(2);
    });

    it('should return 3 for HORIZONTAL_BEZIER', () => {
      expect(parseLineChartModeIOS('HORIZONTAL_BEZIER')).toBe(3);
    });
  });

  describe('invalid modes', () => {
    it('should return 0 (LINEAR) for unknown mode', () => {
      expect(parseLineChartModeIOS('UNKNOWN')).toBe(0);
    });

    it('should return 0 for empty string', () => {
      expect(parseLineChartModeIOS('')).toBe(0);
    });

    it('should return 0 for lowercase mode', () => {
      expect(parseLineChartModeIOS('linear')).toBe(0);
    });
  });
});

describe('parseScatterShapeIOS', () => {
  describe('valid shapes', () => {
    it('should return 0 for SQUARE', () => {
      expect(parseScatterShapeIOS('SQUARE')).toBe(0);
    });

    it('should return 1 for CIRCLE', () => {
      expect(parseScatterShapeIOS('CIRCLE')).toBe(1);
    });

    it('should return 2 for TRIANGLE', () => {
      expect(parseScatterShapeIOS('TRIANGLE')).toBe(2);
    });

    it('should return 3 for CROSS', () => {
      expect(parseScatterShapeIOS('CROSS')).toBe(3);
    });

    it('should return 4 for X', () => {
      expect(parseScatterShapeIOS('X')).toBe(4);
    });
  });

  describe('invalid shapes', () => {
    it('should return 0 (SQUARE) for unknown shape', () => {
      expect(parseScatterShapeIOS('UNKNOWN')).toBe(0);
    });

    it('should return 0 for empty string', () => {
      expect(parseScatterShapeIOS('')).toBe(0);
    });

    it('should return 0 for lowercase shape', () => {
      expect(parseScatterShapeIOS('circle')).toBe(0);
    });

    it('should return 0 for mixed case shape', () => {
      expect(parseScatterShapeIOS('Circle')).toBe(0);
    });

    it('should return 0 for null-like values', () => {
      expect(parseScatterShapeIOS(null as any)).toBe(0);
      expect(parseScatterShapeIOS(undefined as any)).toBe(0);
    });
  });
});

/**
 * Color Conversion Utilities
 */

describe('toUIColor', () => {
  describe('valid colors', () => {
    it('should convert hex color string to UIColor', () => {
      const result = toUIColor('#FF0000');
      expect(result).toBeDefined();
      expect(result?.mockUIColor).toBe(true);
    });

    it('should convert short hex color', () => {
      const result = toUIColor('#F00');
      expect(result).toBeDefined();
    });

    it('should convert hex with alpha', () => {
      const result = toUIColor('#80FF0000');
      expect(result).toBeDefined();
    });

    it('should convert named color', () => {
      const result = toUIColor('red');
      expect(result).toBeDefined();
    });

    it('should convert rgb format', () => {
      const result = toUIColor('rgb(255, 0, 0)');
      expect(result).toBeDefined();
    });

    it('should convert rgba format', () => {
      const result = toUIColor('rgba(255, 0, 0, 0.5)');
      expect(result).toBeDefined();
    });

    it('should convert number color', () => {
      const result = toUIColor(0xff0000);
      expect(result).toBeDefined();
    });
  });

  describe('undefined/null handling', () => {
    it('should return undefined for undefined input', () => {
      expect(toUIColor(undefined)).toBeUndefined();
    });

    it('should return undefined for null input', () => {
      expect(toUIColor(null as any)).toBeUndefined();
    });
  });
});

describe('toAndroidColor', () => {
  describe('valid colors', () => {
    it('should convert hex color string to Android color int', () => {
      const result = toAndroidColor('#FF0000');
      expect(result).toBeDefined();
      expect(typeof result).toBe('number');
    });

    it('should convert short hex color', () => {
      const result = toAndroidColor('#F00');
      expect(result).toBeDefined();
      expect(typeof result).toBe('number');
    });

    it('should convert hex with alpha', () => {
      const result = toAndroidColor('#80FF0000');
      expect(result).toBeDefined();
    });

    it('should convert named color', () => {
      const result = toAndroidColor('blue');
      expect(result).toBeDefined();
    });

    it('should convert rgb format', () => {
      const result = toAndroidColor('rgb(0, 255, 0)');
      expect(result).toBeDefined();
    });

    it('should convert rgba format', () => {
      const result = toAndroidColor('rgba(0, 255, 0, 0.8)');
      expect(result).toBeDefined();
    });

    it('should return number directly for number input', () => {
      const result = toAndroidColor(0xff00ff00);
      expect(result).toBeDefined();
      expect(typeof result).toBe('number');
    });
  });

  describe('undefined/null handling', () => {
    it('should return undefined for undefined input', () => {
      expect(toAndroidColor(undefined)).toBeUndefined();
    });

    it('should return undefined for null input', () => {
      expect(toAndroidColor(null as any)).toBeUndefined();
    });
  });
});

/**
 * Additional Edge Case Tests
 */

describe('parseEasingIOS edge cases', () => {
  it('should handle numeric string input', () => {
    expect(parseEasingIOS('123')).toBe(0);
  });

  it('should handle special characters', () => {
    expect(parseEasingIOS('Ease-In-Quad')).toBe(0);
  });

  it('should handle whitespace', () => {
    expect(parseEasingIOS(' Linear ')).toBe(0);
    expect(parseEasingIOS('Linear ')).toBe(0);
  });

  it('should be case sensitive', () => {
    expect(parseEasingIOS('LINEAR')).toBe(0);
    expect(parseEasingIOS('linear')).toBe(0);
    expect(parseEasingIOS('easeInQuad')).toBe(0);
  });
});

describe('parseLineChartModeIOS edge cases', () => {
  it('should handle mixed case input', () => {
    expect(parseLineChartModeIOS('Linear')).toBe(0);
    expect(parseLineChartModeIOS('Stepped')).toBe(0);
  });

  it('should handle partial matches', () => {
    expect(parseLineChartModeIOS('LINE')).toBe(0);
    expect(parseLineChartModeIOS('CUBIC')).toBe(0);
  });

  it('should handle whitespace', () => {
    expect(parseLineChartModeIOS(' LINEAR')).toBe(0);
    expect(parseLineChartModeIOS('LINEAR ')).toBe(0);
  });
});

describe('parseScatterShapeIOS edge cases', () => {
  it('should handle partial matches', () => {
    expect(parseScatterShapeIOS('SQ')).toBe(0);
    expect(parseScatterShapeIOS('CIRC')).toBe(0);
  });

  it('should handle similar but wrong values', () => {
    expect(parseScatterShapeIOS('SQUARES')).toBe(0);
    expect(parseScatterShapeIOS('CIRCLES')).toBe(0);
    expect(parseScatterShapeIOS('TRIANGLES')).toBe(0);
  });

  it('should handle lowercase x', () => {
    expect(parseScatterShapeIOS('x')).toBe(0);
  });
});
