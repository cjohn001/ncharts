import { describe, it, expect } from 'vitest';
import type {
  // Common types
  ChartAnimation,
  EasingFunction,
  LegendConfig,
  LegendHorizontalAlignment,
  LegendVerticalAlignment,
  LegendOrientation,
  LegendDirection,
  LegendForm,
  ChartDescription,
  MarkerConfig,
  Highlight,
  XAxisConfig,
  YAxisConfig,
  YAxisConfigDual,
  LimitLine,
  AxisDependency,
  XAxisPosition,
  YAxisPosition,
  LimitLineLabelPosition,
  ViewPortOffset,
  VisibleRange,
  ZoomConfig,
  // Line chart types
  LineChartData,
  LineDataSet,
  LineDataEntry,
  LineDataSetConfig,
  LineChartMode,
  DataSetConfigCommon,
  DataSetConfigBarLineScatterCandleBubble,
  DataSetConfigLineScatterCandleRadar,
  DataSetConfigLineRadar,
  // Bar chart types
  BarChartData,
  BarDataSet,
  BarDataEntry,
  BarDataSetConfig,
  BarChartDataConfig,
  // Pie chart types
  PieChartData,
  PieDataSet,
  PieDataEntry,
  PieDataSetConfig,
  ValuePosition,
  // Scatter chart types
  ScatterChartData,
  ScatterDataSet,
  ScatterDataEntry,
  ScatterDataSetConfig,
  ScatterShape,
  // Bubble chart types
  BubbleChartData,
  BubbleDataSet,
  BubbleDataEntry,
  BubbleDataSetConfig,
  // Candle chart types
  CandleChartData,
  CandleDataSet,
  CandleDataEntry,
  CandleDataSetConfig,
  PaintStyle,
  // Radar chart types
  RadarChartData,
  RadarDataSet,
  RadarDataEntry,
  RadarDataSetConfig,
  // Combined chart types
  CombinedChartData,
  // Event types
  ChartSelectData,
  ChartSelectEvent,
  ChartGestureEvent,
  YAxisMinMaxChangeEvent,
  // Config types
  ChartBaseConfig,
  BarLineChartBaseConfig,
  PieRadarChartBaseConfig,
  PieChartConfig,
  RadarChartConfig,
  // Props types
  LineChartProps,
  BarChartProps,
  HorizontalBarChartProps,
  PieChartProps,
  ScatterChartProps,
  BubbleChartProps,
  CandleStickChartProps,
  RadarChartProps,
  CombinedChartProps,
} from './types';

/**
 * Common Types
 */

describe('ChartAnimation type', () => {
  it('should accept valid animation config', () => {
    const animation: ChartAnimation = {
      durationX: 1000,
      durationY: 1500,
      easingX: 'EaseInOutQuad',
      easingY: 'EaseOutBounce',
    };
    expect(animation.durationX).toBe(1000);
    expect(animation.durationY).toBe(1500);
    expect(animation.easingX).toBe('EaseInOutQuad');
    expect(animation.easingY).toBe('EaseOutBounce');
  });

  it('should accept partial animation config', () => {
    const animation: ChartAnimation = {
      durationX: 500,
    };
    expect(animation.durationX).toBe(500);
    expect(animation.durationY).toBeUndefined();
  });

  it('should accept empty animation config', () => {
    const animation: ChartAnimation = {};
    expect(animation).toEqual({});
  });
});

describe('EasingFunction type', () => {
  it('should include all valid easing functions', () => {
    const easingFunctions: EasingFunction[] = ['Linear', 'EaseInQuad', 'EaseOutQuad', 'EaseInOutQuad', 'EaseInCubic', 'EaseOutCubic', 'EaseInOutCubic', 'EaseInQuart', 'EaseOutQuart', 'EaseInOutQuart', 'EaseInSine', 'EaseOutSine', 'EaseInOutSine', 'EaseInExpo', 'EaseOutExpo', 'EaseInOutExpo', 'EaseInCirc', 'EaseOutCirc', 'EaseInOutCirc', 'EaseInElastic', 'EaseOutElastic', 'EaseInOutElastic', 'EaseInBack', 'EaseOutBack', 'EaseInOutBack', 'EaseInBounce', 'EaseOutBounce', 'EaseInOutBounce'];
    expect(easingFunctions.length).toBe(28);
    easingFunctions.forEach((easing) => {
      expect(typeof easing).toBe('string');
    });
  });

  it('should categorize easing functions by type', () => {
    const quadEasings: EasingFunction[] = ['EaseInQuad', 'EaseOutQuad', 'EaseInOutQuad'];
    const cubicEasings: EasingFunction[] = ['EaseInCubic', 'EaseOutCubic', 'EaseInOutCubic'];
    const quartEasings: EasingFunction[] = ['EaseInQuart', 'EaseOutQuart', 'EaseInOutQuart'];
    const sineEasings: EasingFunction[] = ['EaseInSine', 'EaseOutSine', 'EaseInOutSine'];
    const expoEasings: EasingFunction[] = ['EaseInExpo', 'EaseOutExpo', 'EaseInOutExpo'];
    const circEasings: EasingFunction[] = ['EaseInCirc', 'EaseOutCirc', 'EaseInOutCirc'];
    const elasticEasings: EasingFunction[] = ['EaseInElastic', 'EaseOutElastic', 'EaseInOutElastic'];
    const backEasings: EasingFunction[] = ['EaseInBack', 'EaseOutBack', 'EaseInOutBack'];
    const bounceEasings: EasingFunction[] = ['EaseInBounce', 'EaseOutBounce', 'EaseInOutBounce'];

    expect(quadEasings.length).toBe(3);
    expect(cubicEasings.length).toBe(3);
    expect(quartEasings.length).toBe(3);
    expect(sineEasings.length).toBe(3);
    expect(expoEasings.length).toBe(3);
    expect(circEasings.length).toBe(3);
    expect(elasticEasings.length).toBe(3);
    expect(backEasings.length).toBe(3);
    expect(bounceEasings.length).toBe(3);
  });

  it('should support Linear for uniform motion', () => {
    const easing: EasingFunction = 'Linear';
    expect(easing).toBe('Linear');
  });
});

describe('LegendConfig type', () => {
  it('should accept full legend configuration', () => {
    const legend: LegendConfig = {
      enabled: true,
      textColor: '#000000',
      textSize: 12,
      fontFamily: 'Arial',
      fontStyle: 1,
      fontWeight: 700,
      wordWrapEnabled: true,
      maxSizePercent: 0.5,
      horizontalAlignment: 'CENTER',
      verticalAlignment: 'BOTTOM',
      orientation: 'HORIZONTAL',
      drawInside: false,
      direction: 'LEFT_TO_RIGHT',
      form: 'CIRCLE',
      formSize: 10,
      xEntrySpace: 5,
      yEntrySpace: 5,
      formToTextSpace: 3,
    };
    expect(legend.enabled).toBe(true);
    expect(legend.textColor).toBe('#000000');
    expect(legend.horizontalAlignment).toBe('CENTER');
  });

  it('should accept custom legend entries', () => {
    const legend: LegendConfig = {
      enabled: true,
      custom: {
        colors: ['#FF0000', '#00FF00', '#0000FF'],
        labels: ['Red', 'Green', 'Blue'],
      },
    };
    expect(legend.custom?.colors.length).toBe(3);
    expect(legend.custom?.labels.length).toBe(3);
  });

  it('should accept all horizontal alignment values', () => {
    const alignments: LegendHorizontalAlignment[] = ['LEFT', 'CENTER', 'RIGHT'];
    expect(alignments.length).toBe(3);
  });

  it('should accept all vertical alignment values', () => {
    const alignments: LegendVerticalAlignment[] = ['TOP', 'CENTER', 'BOTTOM'];
    expect(alignments.length).toBe(3);
  });

  it('should accept all orientation values', () => {
    const orientations: LegendOrientation[] = ['HORIZONTAL', 'VERTICAL'];
    expect(orientations.length).toBe(2);
  });

  it('should accept all direction values', () => {
    const directions: LegendDirection[] = ['LEFT_TO_RIGHT', 'RIGHT_TO_LEFT'];
    expect(directions.length).toBe(2);
  });

  it('should accept all form values', () => {
    const forms: LegendForm[] = ['NONE', 'EMPTY', 'DEFAULT', 'SQUARE', 'CIRCLE', 'LINE'];
    expect(forms.length).toBe(6);
  });
});

describe('ChartDescription type', () => {
  it('should accept full description configuration', () => {
    const description: ChartDescription = {
      text: 'My Chart Title',
      textColor: '#333333',
      textSize: 14,
      positionX: 100,
      positionY: 50,
    };
    expect(description.text).toBe('My Chart Title');
    expect(description.textColor).toBe('#333333');
    expect(description.textSize).toBe(14);
  });

  it('should accept partial description', () => {
    const description: ChartDescription = {
      text: 'Simple Title',
    };
    expect(description.text).toBe('Simple Title');
  });
});

describe('MarkerConfig type', () => {
  it('should accept full marker configuration', () => {
    const marker: MarkerConfig = {
      enabled: true,
      digits: 2,
      markerColor: '#FFFFFF',
      textColor: '#000000',
      textSize: 10,
    };
    expect(marker.enabled).toBe(true);
    expect(marker.digits).toBe(2);
  });

  it('should configure marker for currency display', () => {
    const marker: MarkerConfig = {
      enabled: true,
      digits: 2,
      markerColor: '#1976D2',
      textColor: '#FFFFFF',
      textSize: 12,
    };
    expect(marker.digits).toBe(2);
    expect(marker.textColor).toBe('#FFFFFF');
  });

  it('should configure marker for percentage display', () => {
    const marker: MarkerConfig = {
      enabled: true,
      digits: 1,
      markerColor: '#388E3C',
      textColor: '#FFFFFF',
      textSize: 11,
    };
    expect(marker.digits).toBe(1);
    expect(marker.markerColor).toBe('#388E3C');
  });

  it('should disable marker', () => {
    const marker: MarkerConfig = {
      enabled: false,
    };
    expect(marker.enabled).toBe(false);
    expect(marker.digits).toBeUndefined();
  });
});

describe('Highlight type', () => {
  it('should accept minimal highlight', () => {
    const highlight: Highlight = {
      x: 5,
    };
    expect(highlight.x).toBe(5);
  });

  it('should accept full highlight configuration', () => {
    const highlight: Highlight = {
      x: 5,
      y: 100,
      dataSetIndex: 0,
      dataIndex: 2,
      stackIndex: 1,
    };
    expect(highlight.x).toBe(5);
    expect(highlight.y).toBe(100);
    expect(highlight.dataSetIndex).toBe(0);
    expect(highlight.dataIndex).toBe(2);
    expect(highlight.stackIndex).toBe(1);
  });

  it('should support highlighting a specific data point in line chart', () => {
    const highlight: Highlight = {
      x: 3,
      y: 45.5,
      dataSetIndex: 1,
      dataIndex: 3,
    };
    expect(highlight.x).toBe(3);
    expect(highlight.y).toBe(45.5);
    expect(highlight.dataSetIndex).toBe(1);
  });

  it('should support highlighting stacked bar segment', () => {
    const highlight: Highlight = {
      x: 2,
      y: 75,
      dataSetIndex: 0,
      dataIndex: 2,
      stackIndex: 2,
    };
    expect(highlight.stackIndex).toBe(2);
    expect(highlight.dataIndex).toBe(2);
  });

  it('should support highlighting without y value for x-based charts', () => {
    const highlight: Highlight = {
      x: 10,
      dataSetIndex: 0,
    };
    expect(highlight.x).toBe(10);
    expect(highlight.y).toBeUndefined();
  });
});

describe('Axis types', () => {
  describe('AxisDependency', () => {
    it('should accept LEFT and RIGHT', () => {
      const dependencies: AxisDependency[] = ['LEFT', 'RIGHT'];
      expect(dependencies.length).toBe(2);
    });
  });

  describe('XAxisPosition', () => {
    it('should accept all valid positions', () => {
      const positions: XAxisPosition[] = ['TOP', 'BOTTOM', 'BOTH_SIDED', 'TOP_INSIDE', 'BOTTOM_INSIDE'];
      expect(positions.length).toBe(5);
    });
  });

  describe('YAxisPosition', () => {
    it('should accept all valid positions', () => {
      const positions: YAxisPosition[] = ['OUTSIDE_CHART', 'INSIDE_CHART'];
      expect(positions.length).toBe(2);
    });
  });

  describe('LimitLineLabelPosition', () => {
    it('should accept all valid positions', () => {
      const positions: LimitLineLabelPosition[] = ['LEFT_TOP', 'LEFT_BOTTOM', 'RIGHT_TOP', 'RIGHT_BOTTOM'];
      expect(positions.length).toBe(4);
    });
  });

  describe('LimitLine', () => {
    it('should accept full limit line configuration', () => {
      const limitLine: LimitLine = {
        limit: 100,
        label: 'Max Value',
        lineColor: '#FF0000',
        lineWidth: 2,
        valueTextColor: '#000000',
        valueTextSize: 10,
        fontFamily: 'Arial',
        labelPosition: 'RIGHT_TOP',
        lineDashLengths: [10, 5],
        lineDashPhase: 0,
      };
      expect(limitLine.limit).toBe(100);
      expect(limitLine.label).toBe('Max Value');
    });

    it('should accept minimal limit line', () => {
      const limitLine: LimitLine = {
        limit: 50,
      };
      expect(limitLine.limit).toBe(50);
    });

    it('should configure dashed limit line', () => {
      const limitLine: LimitLine = {
        limit: 75,
        label: 'Target',
        lineDashLengths: [8, 4, 2, 4],
        lineDashPhase: 2,
        lineColor: '#9C27B0',
      };
      expect(limitLine.lineDashLengths).toEqual([8, 4, 2, 4]);
      expect(limitLine.lineDashPhase).toBe(2);
    });

    it('should configure threshold warning limit line', () => {
      const limitLine: LimitLine = {
        limit: 80,
        label: 'Warning',
        lineColor: '#FFC107',
        lineWidth: 3,
        labelPosition: 'LEFT_TOP',
        valueTextColor: '#795548',
        valueTextSize: 12,
      };
      expect(limitLine.lineColor).toBe('#FFC107');
      expect(limitLine.labelPosition).toBe('LEFT_TOP');
    });

    it('should configure zero baseline limit line', () => {
      const limitLine: LimitLine = {
        limit: 0,
        lineColor: '#000000',
        lineWidth: 1,
      };
      expect(limitLine.limit).toBe(0);
      expect(limitLine.label).toBeUndefined();
    });
  });

  describe('XAxisConfig', () => {
    it('should accept full X-axis configuration', () => {
      const xAxis: XAxisConfig = {
        enabled: true,
        drawGridLines: true,
        drawAxisLine: true,
        drawLabels: true,
        textColor: '#000000',
        textSize: 12,
        fontFamily: 'Arial',
        fontStyle: 0,
        fontWeight: 400,
        gridColor: '#CCCCCC',
        gridLineWidth: 1,
        axisLineColor: '#000000',
        axisLineWidth: 1,
        position: 'BOTTOM',
        yOffset: 5,
        axisMinimum: 0,
        axisMaximum: 100,
        labelCount: 10,
        labelCountForce: false,
        granularity: 1,
        granularityEnabled: true,
        centerAxisLabels: false,
        valueFormatter: 'date',
        valueFormatterPattern: 'MM/dd',
        labelRotationAngle: 45,
        avoidFirstLastClipping: true,
        limitLines: [{ limit: 50, label: 'Mid' }],
        drawLimitLinesBehindData: true,
      };
      expect(xAxis.enabled).toBe(true);
      expect(xAxis.position).toBe('BOTTOM');
    });

    it('should support date-based X-axis with custom formatting', () => {
      const xAxis: XAxisConfig = {
        enabled: true,
        valueFormatter: 'date',
        valueFormatterPattern: 'yyyy-MM-dd HH:mm',
        labelRotationAngle: -45,
        granularityEnabled: true,
        granularity: 3600000,
        textSize: 10,
        textColor: '#666666',
      };
      expect(xAxis.valueFormatter).toBe('date');
      expect(xAxis.granularity).toBe(3600000);
    });

    it('should support category labels', () => {
      const xAxis: XAxisConfig = {
        enabled: true,
        valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        position: 'BOTTOM',
        centerAxisLabels: true,
        avoidFirstLastClipping: true,
      };
      expect(Array.isArray(xAxis.valueFormatter)).toBe(true);
      expect((xAxis.valueFormatter as string[]).length).toBe(12);
    });

    it('should support limit lines with styling', () => {
      const xAxis: XAxisConfig = {
        enabled: true,
        limitLines: [
          {
            limit: 0,
            label: 'Start',
            lineColor: '#4CAF50',
            lineWidth: 2,
            lineDashLengths: [10, 5],
          },
          {
            limit: 100,
            label: 'End',
            lineColor: '#F44336',
            lineWidth: 2,
            labelPosition: 'RIGHT_TOP',
          },
        ],
        drawLimitLinesBehindData: false,
      };
      expect(xAxis.limitLines?.length).toBe(2);
      expect(xAxis.limitLines?.[0].lineDashLengths).toEqual([10, 5]);
    });
  });

  describe('YAxisConfig', () => {
    it('should accept full Y-axis configuration', () => {
      const yAxis: YAxisConfig = {
        enabled: true,
        position: 'OUTSIDE_CHART',
        zeroLine: {
          enabled: true,
          lineWidth: 1,
          lineColor: '#000000',
        },
        axisMinimum: 0,
        axisMaximum: 1000,
        inverted: false,
        spaceTop: 10,
        spaceBottom: 10,
      };
      expect(yAxis.enabled).toBe(true);
      expect(yAxis.position).toBe('OUTSIDE_CHART');
      expect(yAxis.zeroLine?.enabled).toBe(true);
    });

    it('should support percentage formatting', () => {
      const yAxis: YAxisConfig = {
        enabled: true,
        axisMinimum: 0,
        axisMaximum: 100,
        labelCount: 5,
        valueFormatter: 'percent',
        textSize: 11,
      };
      expect(yAxis.valueFormatter).toBe('percent');
      expect(yAxis.labelCount).toBe(5);
    });

    it('should support inverted axis for depth charts', () => {
      const yAxis: YAxisConfig = {
        enabled: true,
        inverted: true,
        axisMinimum: 0,
        axisMaximum: 1000,
        labelCount: 10,
      };
      expect(yAxis.inverted).toBe(true);
    });
  });

  describe('YAxisConfigDual', () => {
    it('should accept left and right Y-axis configs', () => {
      const yAxis: YAxisConfigDual = {
        left: {
          enabled: true,
          axisMinimum: 0,
          axisMaximum: 100,
        },
        right: {
          enabled: false,
        },
      };
      expect(yAxis.left?.enabled).toBe(true);
      expect(yAxis.right?.enabled).toBe(false);
    });

    it('should support different scales on each axis', () => {
      const yAxis: YAxisConfigDual = {
        left: {
          enabled: true,
          axisMinimum: 0,
          axisMaximum: 500,
          textColor: '#2196F3',
          labelCount: 6,
        },
        right: {
          enabled: true,
          axisMinimum: 0,
          axisMaximum: 100,
          textColor: '#FF9800',
          labelCount: 5,
          valueFormatter: 'percent',
        },
      };
      expect(yAxis.left?.axisMaximum).toBe(500);
      expect(yAxis.right?.axisMaximum).toBe(100);
      expect(yAxis.right?.valueFormatter).toBe('percent');
    });
  });
});

describe('ViewPortOffset type', () => {
  it('should accept all offset values', () => {
    const offset: ViewPortOffset = {
      left: 10,
      top: 20,
      right: 10,
      bottom: 30,
    };
    expect(offset.left).toBe(10);
    expect(offset.top).toBe(20);
    expect(offset.right).toBe(10);
    expect(offset.bottom).toBe(30);
  });

  it('should accept partial offset values', () => {
    const offset: ViewPortOffset = {
      left: 10,
      right: 10,
    };
    expect(offset.left).toBe(10);
    expect(offset.top).toBeUndefined();
  });
});

describe('VisibleRange type', () => {
  it('should accept full visible range configuration', () => {
    const range: VisibleRange = {
      x: { min: 0, max: 100 },
      y: {
        left: { min: 0, max: 1000 },
        right: { min: 0, max: 500 },
      },
    };
    expect(range.x?.min).toBe(0);
    expect(range.x?.max).toBe(100);
    expect(range.y?.left?.max).toBe(1000);
    expect(range.y?.right?.max).toBe(500);
  });
});

describe('ZoomConfig type', () => {
  it('should accept full zoom configuration', () => {
    const zoom: ZoomConfig = {
      scaleX: 2,
      scaleY: 2,
      xValue: 50,
      yValue: 500,
      axisDependency: 'LEFT',
    };
    expect(zoom.scaleX).toBe(2);
    expect(zoom.scaleY).toBe(2);
    expect(zoom.xValue).toBe(50);
    expect(zoom.yValue).toBe(500);
    expect(zoom.axisDependency).toBe('LEFT');
  });

  it('should accept zoom without axis dependency', () => {
    const zoom: ZoomConfig = {
      scaleX: 1.5,
      scaleY: 1.5,
      xValue: 25,
      yValue: 250,
    };
    expect(zoom.axisDependency).toBeUndefined();
  });
});

/**
 * DataSet Config Types
 */

describe('DataSetConfigCommon type', () => {
  it('should accept single color', () => {
    const config: DataSetConfigCommon = {
      color: '#FF0000',
    };
    expect(config.color).toBe('#FF0000');
  });

  it('should accept multiple colors', () => {
    const config: DataSetConfigCommon = {
      colors: ['#FF0000', '#00FF00', '#0000FF'],
    };
    expect(config.colors?.length).toBe(3);
  });

  it('should accept number color (ARGB)', () => {
    const config: DataSetConfigCommon = {
      color: 0xffff0000,
    };
    expect(config.color).toBe(0xffff0000);
  });

  it('should accept highlighting options', () => {
    const config: DataSetConfigCommon = {
      highlightEnabled: true,
    };
    expect(config.highlightEnabled).toBe(true);
  });

  it('should accept value drawing options', () => {
    const config: DataSetConfigCommon = {
      drawValues: true,
      valueTextSize: 10,
      valueTextColor: '#000000',
    };
    expect(config.drawValues).toBe(true);
    expect(config.valueTextSize).toBe(10);
  });

  it('should accept visibility option', () => {
    const config: DataSetConfigCommon = {
      visible: false,
    };
    expect(config.visible).toBe(false);
  });

  it('should accept value formatter options', () => {
    const config: DataSetConfigCommon = {
      valueFormatter: 'percent',
      valueFormatterPattern: '0.00%',
    };
    expect(config.valueFormatter).toBe('percent');
  });

  it('should accept string array value formatter', () => {
    const config: DataSetConfigCommon = {
      valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr'],
    };
    expect((config.valueFormatter as string[]).length).toBe(4);
  });

  it('should accept axis dependency', () => {
    const config: DataSetConfigCommon = {
      axisDependency: 'RIGHT',
    };
    expect(config.axisDependency).toBe('RIGHT');
  });
});

describe('DataSetConfigBarLineScatterCandleBubble type', () => {
  it('should extend common config with highlight color', () => {
    const config: DataSetConfigBarLineScatterCandleBubble = {
      color: '#0000FF',
      highlightColor: '#FF0000',
    };
    expect(config.highlightColor).toBe('#FF0000');
  });
});

describe('DataSetConfigLineScatterCandleRadar type', () => {
  it('should accept highlight indicator options', () => {
    const config: DataSetConfigLineScatterCandleRadar = {
      drawVerticalHighlightIndicator: true,
      drawHorizontalHighlightIndicator: false,
      highlightLineWidth: 2,
    };
    expect(config.drawVerticalHighlightIndicator).toBe(true);
    expect(config.drawHorizontalHighlightIndicator).toBe(false);
    expect(config.highlightLineWidth).toBe(2);
  });
});

describe('DataSetConfigLineRadar type', () => {
  it('should accept fill gradient configuration', () => {
    const config: DataSetConfigLineRadar = {
      fillGradient: {
        colors: ['#FF0000', '#0000FF'],
        positions: [0, 1],
        angle: 90,
      },
    };
    expect(config.fillGradient?.colors.length).toBe(2);
    expect(config.fillGradient?.angle).toBe(90);
  });

  it('should accept Android gradient orientation', () => {
    const config: DataSetConfigLineRadar = {
      fillGradient: {
        colors: ['#FF0000', '#0000FF'],
        orientation: 'TOP_BOTTOM',
      },
    };
    expect(config.fillGradient?.orientation).toBe('TOP_BOTTOM');
  });

  it('should accept solid fill color', () => {
    const config: DataSetConfigLineRadar = {
      fillColor: '#FF0000',
      fillAlpha: 128,
      drawFilled: true,
    };
    expect(config.fillColor).toBe('#FF0000');
    expect(config.fillAlpha).toBe(128);
    expect(config.drawFilled).toBe(true);
  });

  it('should accept line width', () => {
    const config: DataSetConfigLineRadar = {
      lineWidth: 2.5,
    };
    expect(config.lineWidth).toBe(2.5);
  });
});

/**
 * Line Chart Types
 */

describe('LineDataSetConfig type', () => {
  it('should accept circle configuration', () => {
    const config: LineDataSetConfig = {
      circleRadius: 4,
      drawCircles: true,
      circleColor: '#FF0000',
      circleHoleColor: '#FFFFFF',
      drawCircleHole: true,
    };
    expect(config.circleRadius).toBe(4);
    expect(config.drawCircles).toBe(true);
    expect(config.circleColor).toBe('#FF0000');
  });

  it('should accept multiple circle colors', () => {
    const config: LineDataSetConfig = {
      circleColors: ['#FF0000', '#00FF00', '#0000FF'],
    };
    expect(config.circleColors?.length).toBe(3);
  });

  it('should accept line mode options', () => {
    const modes: LineChartMode[] = ['LINEAR', 'STEPPED', 'CUBIC_BEZIER', 'HORIZONTAL_BEZIER'];
    modes.forEach((mode) => {
      const config: LineDataSetConfig = { mode };
      expect(config.mode).toBe(mode);
    });
  });

  it('should accept cubic intensity', () => {
    const config: LineDataSetConfig = {
      mode: 'CUBIC_BEZIER',
      drawCubicIntensity: 0.2,
    };
    expect(config.drawCubicIntensity).toBe(0.2);
  });

  it('should accept dashed line configuration', () => {
    const config: LineDataSetConfig = {
      dashedLine: {
        lineLength: 10,
        spaceLength: 5,
        phase: 0,
      },
    };
    expect(config.dashedLine?.lineLength).toBe(10);
    expect(config.dashedLine?.spaceLength).toBe(5);
  });

  it('should accept fill formatter', () => {
    const config: LineDataSetConfig = {
      fillFormatter: {
        min: 0,
      },
    };
    expect(config.fillFormatter?.min).toBe(0);
  });
});

describe('LineDataEntry type', () => {
  it('should accept y value only', () => {
    const entry: LineDataEntry = { y: 100 };
    expect(entry.y).toBe(100);
    expect(entry.x).toBeUndefined();
  });

  it('should accept x and y values', () => {
    const entry: LineDataEntry = { x: 5, y: 100 };
    expect(entry.x).toBe(5);
    expect(entry.y).toBe(100);
  });

  it('should accept marker text', () => {
    const entry: LineDataEntry = { y: 100, marker: 'Peak value' };
    expect(entry.marker).toBe('Peak value');
  });

  it('should accept icon configuration', () => {
    const entry: LineDataEntry = {
      y: 100,
      icon: {
        bundle: { name: 'star' },
        width: 24,
        height: 24,
      },
    };
    expect(entry.icon?.width).toBe(24);
    expect(entry.icon?.height).toBe(24);
  });

  it('should accept floating point coordinates', () => {
    const entry: LineDataEntry = { x: 1.5, y: 99.999 };
    expect(entry.x).toBe(1.5);
    expect(entry.y).toBe(99.999);
  });

  it('should accept negative values', () => {
    const entry: LineDataEntry = { x: -10, y: -50 };
    expect(entry.x).toBe(-10);
    expect(entry.y).toBe(-50);
  });

  it('should accept timestamp as x value', () => {
    const entry: LineDataEntry = { x: 1672531200000, y: 42 };
    expect(entry.x).toBe(1672531200000);
  });

  it('should accept zero values', () => {
    const entry: LineDataEntry = { x: 0, y: 0 };
    expect(entry.x).toBe(0);
    expect(entry.y).toBe(0);
  });
});

describe('LineDataSet type', () => {
  it('should accept values as numbers', () => {
    const dataSet: LineDataSet = {
      values: [10, 20, 30, 40, 50],
      label: 'Simple Line',
    };
    expect(dataSet.values.length).toBe(5);
    expect(dataSet.label).toBe('Simple Line');
  });

  it('should accept values as LineDataEntry array', () => {
    const dataSet: LineDataSet = {
      values: [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
      ],
      label: 'Data Points',
    };
    expect(dataSet.values.length).toBe(3);
  });

  it('should accept mixed values', () => {
    const dataSet: LineDataSet = {
      values: [10, { y: 20 }, { x: 2, y: 30 }, 40],
      label: 'Mixed Data',
    };
    expect(dataSet.values.length).toBe(4);
  });

  it('should accept configuration', () => {
    const dataSet: LineDataSet = {
      values: [10, 20, 30],
      label: 'Styled Line',
      config: {
        color: '#FF0000',
        lineWidth: 2,
        drawCircles: true,
        circleRadius: 4,
      },
    };
    expect(dataSet.config?.color).toBe('#FF0000');
    expect(dataSet.config?.lineWidth).toBe(2);
  });
});

describe('LineChartData type', () => {
  it('should accept single dataset', () => {
    const data: LineChartData = {
      dataSets: [
        {
          values: [10, 20, 30],
          label: 'Dataset 1',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept multiple datasets', () => {
    const data: LineChartData = {
      dataSets: [
        {
          values: [10, 20, 30],
          label: 'Dataset 1',
          config: { color: '#FF0000' },
        },
        {
          values: [15, 25, 35],
          label: 'Dataset 2',
          config: { color: '#0000FF' },
        },
      ],
    };
    expect(data.dataSets.length).toBe(2);
    expect(data.dataSets[0].label).toBe('Dataset 1');
    expect(data.dataSets[1].label).toBe('Dataset 2');
  });

  it('should accept empty dataSets array', () => {
    const data: LineChartData = {
      dataSets: [],
    };
    expect(data.dataSets.length).toBe(0);
  });

  it('should accept complex multi-series data', () => {
    const data: LineChartData = {
      dataSets: [
        {
          values: [
            { x: 0, y: 100, marker: 'Jan' },
            { x: 1, y: 150, marker: 'Feb' },
            { x: 2, y: 120, marker: 'Mar' },
          ],
          label: 'Revenue',
          config: {
            color: '#4CAF50',
            lineWidth: 2,
            mode: 'CUBIC_BEZIER',
            drawCubicIntensity: 0.2,
            drawFilled: true,
            fillColor: '#4CAF50',
            fillAlpha: 50,
            drawCircles: true,
            circleRadius: 5,
            circleColor: '#4CAF50',
            drawCircleHole: true,
            circleHoleColor: '#FFFFFF',
          },
        },
        {
          values: [
            { x: 0, y: 80 },
            { x: 1, y: 100 },
            { x: 2, y: 90 },
          ],
          label: 'Expenses',
          config: {
            color: '#F44336',
            lineWidth: 2,
            dashedLine: {
              lineLength: 10,
              spaceLength: 5,
            },
          },
        },
      ],
    };
    expect(data.dataSets.length).toBe(2);
    expect(data.dataSets[0].config?.mode).toBe('CUBIC_BEZIER');
    expect(data.dataSets[1].config?.dashedLine?.lineLength).toBe(10);
  });
});

/**
 * Bar Chart Types
 */

describe('BarDataSetConfig type', () => {
  it('should accept bar shadow color', () => {
    const config: BarDataSetConfig = {
      barShadowColor: '#CCCCCC',
    };
    expect(config.barShadowColor).toBe('#CCCCCC');
  });

  it('should accept highlight alpha', () => {
    const config: BarDataSetConfig = {
      highlightAlpha: 128,
    };
    expect(config.highlightAlpha).toBe(128);
  });

  it('should accept stack labels', () => {
    const config: BarDataSetConfig = {
      stackLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    };
    expect(config.stackLabels?.length).toBe(4);
  });
});

describe('BarDataEntry type', () => {
  it('should accept single y value', () => {
    const entry: BarDataEntry = { y: 100 };
    expect(entry.y).toBe(100);
  });

  it('should accept x and y values', () => {
    const entry: BarDataEntry = { x: 1, y: 100 };
    expect(entry.x).toBe(1);
    expect(entry.y).toBe(100);
  });

  it('should accept stacked y values', () => {
    const entry: BarDataEntry = { y: [10, 20, 30] };
    expect((entry.y as number[]).length).toBe(3);
  });

  it('should accept marker text', () => {
    const entry: BarDataEntry = { y: 100, marker: 'Peak' };
    expect(entry.marker).toBe('Peak');
  });

  it('should accept stacked markers', () => {
    const entry: BarDataEntry = {
      y: [10, 20, 30],
      marker: ['Low', 'Mid', 'High'],
    };
    expect((entry.marker as string[]).length).toBe(3);
  });

  it('should accept negative y value', () => {
    const entry: BarDataEntry = { x: 2, y: -50 };
    expect(entry.y).toBe(-50);
  });

  it('should accept zero y value', () => {
    const entry: BarDataEntry = { x: 0, y: 0 };
    expect(entry.y).toBe(0);
  });

  it('should accept floating point y value', () => {
    const entry: BarDataEntry = { y: 99.99 };
    expect(entry.y).toBe(99.99);
  });
});

describe('BarChartDataConfig type', () => {
  it('should accept bar width', () => {
    const config: BarChartDataConfig = {
      barWidth: 0.85,
    };
    expect(config.barWidth).toBe(0.85);
  });

  it('should accept group configuration', () => {
    const config: BarChartDataConfig = {
      group: {
        fromX: 0,
        groupSpace: 0.1,
        barSpace: 0.05,
      },
    };
    expect(config.group?.fromX).toBe(0);
    expect(config.group?.groupSpace).toBe(0.1);
    expect(config.group?.barSpace).toBe(0.05);
  });
});

describe('BarChartData type', () => {
  it('should accept single dataset', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [10, 20, 30],
          label: 'Dataset 1',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept multiple datasets', () => {
    const data: BarChartData = {
      dataSets: [
        { values: [10, 20, 30], label: 'Dataset 1' },
        { values: [15, 25, 35], label: 'Dataset 2' },
      ],
    };
    expect(data.dataSets.length).toBe(2);
  });

  it('should accept stacked bar chart data', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [{ y: [10, 20, 30] }, { y: [15, 25, 35] }],
          label: 'Stacked',
          config: {
            colors: ['#F44336', '#4CAF50', '#2196F3'],
            stackLabels: ['Low', 'Medium', 'High'],
          },
        },
      ],
    };
    expect(data.dataSets[0].config?.stackLabels?.length).toBe(3);
  });

  it('should support grouped bar chart with multiple categories', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [
            { x: 0, y: 100 },
            { x: 1, y: 120 },
            { x: 2, y: 140 },
            { x: 3, y: 160 },
          ],
          label: 'Q1',
          config: { color: '#2196F3' },
        },
        {
          values: [
            { x: 0, y: 110 },
            { x: 1, y: 130 },
            { x: 2, y: 150 },
            { x: 3, y: 170 },
          ],
          label: 'Q2',
          config: { color: '#4CAF50' },
        },
        {
          values: [
            { x: 0, y: 120 },
            { x: 1, y: 140 },
            { x: 2, y: 160 },
            { x: 3, y: 180 },
          ],
          label: 'Q3',
          config: { color: '#FF9800' },
        },
        {
          values: [
            { x: 0, y: 130 },
            { x: 1, y: 150 },
            { x: 2, y: 170 },
            { x: 3, y: 190 },
          ],
          label: 'Q4',
          config: { color: '#9C27B0' },
        },
      ],
      config: {
        barWidth: 0.2,
        group: {
          fromX: 0,
          groupSpace: 0.1,
          barSpace: 0.05,
        },
      },
    };
    expect(data.dataSets.length).toBe(4);
    expect(data.config?.barWidth).toBe(0.2);
    expect(data.config?.group?.groupSpace).toBe(0.1);
  });

  it('should support horizontal bar chart data', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [
            { x: 0, y: 85 },
            { x: 1, y: 72 },
            { x: 2, y: 91 },
            { x: 3, y: 68 },
            { x: 4, y: 77 },
          ],
          label: 'Completion Rate',
          config: {
            color: '#00BCD4',
            valueTextColor: '#FFFFFF',
            valueTextSize: 10,
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(5);
    expect(data.dataSets[0].config?.valueTextColor).toBe('#FFFFFF');
  });

  it('should support negative values in bar chart', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [
            { x: 0, y: 50 },
            { x: 1, y: -30 },
            { x: 2, y: 80 },
            { x: 3, y: -20 },
            { x: 4, y: 60 },
          ],
          label: 'Profit/Loss',
          config: {
            colors: ['#4CAF50', '#F44336', '#4CAF50', '#F44336', '#4CAF50'],
          },
        },
      ],
    };
    const values = data.dataSets[0].values as Array<{ x: number; y: number }>;
    expect(values.some((v) => v.y < 0)).toBe(true);
  });

  it('should support waterfall-style stacked data', () => {
    const data: BarChartData = {
      dataSets: [
        {
          values: [{ y: [0, 100] }, { y: [100, 130] }, { y: [130, 110] }, { y: [110, 150] }, { y: [0, 150] }],
          label: 'Waterfall',
          config: {
            colors: ['#4CAF50', '#4CAF50', '#F44336', '#4CAF50', '#2196F3'],
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(5);
  });
});

/**
 * Pie Chart Types
 */

describe('ValuePosition type', () => {
  it('should accept INSIDE_SLICE', () => {
    const position: ValuePosition = 'INSIDE_SLICE';
    expect(position).toBe('INSIDE_SLICE');
  });

  it('should accept OUTSIDE_SLICE', () => {
    const position: ValuePosition = 'OUTSIDE_SLICE';
    expect(position).toBe('OUTSIDE_SLICE');
  });
});

describe('PieDataSetConfig type', () => {
  it('should accept slice space', () => {
    const config: PieDataSetConfig = {
      sliceSpace: 3,
    };
    expect(config.sliceSpace).toBe(3);
  });

  it('should accept selection shift', () => {
    const config: PieDataSetConfig = {
      selectionShift: 10,
    };
    expect(config.selectionShift).toBe(10);
  });

  it('should accept value position settings', () => {
    const config: PieDataSetConfig = {
      xValuePosition: 'OUTSIDE_SLICE',
      yValuePosition: 'INSIDE_SLICE',
    };
    expect(config.xValuePosition).toBe('OUTSIDE_SLICE');
    expect(config.yValuePosition).toBe('INSIDE_SLICE');
  });

  it('should accept value line configuration', () => {
    const config: PieDataSetConfig = {
      valueLinePart1Length: 0.4,
      valueLinePart2Length: 0.8,
      valueLineColor: '#000000',
      valueLineWidth: 1,
      valueLinePart1OffsetPercentage: 75,
      valueLineVariableLength: true,
    };
    expect(config.valueLinePart1Length).toBe(0.4);
    expect(config.valueLinePart2Length).toBe(0.8);
    expect(config.valueLineVariableLength).toBe(true);
  });
});

describe('PieDataEntry type', () => {
  it('should accept value only', () => {
    const entry: PieDataEntry = { value: 25 };
    expect(entry.value).toBe(25);
  });

  it('should accept value and label', () => {
    const entry: PieDataEntry = { value: 25, label: 'Quarter 1' };
    expect(entry.value).toBe(25);
    expect(entry.label).toBe('Quarter 1');
  });
});

describe('PieChartData type', () => {
  it('should accept single dataset', () => {
    const data: PieChartData = {
      dataSets: [
        {
          values: [30, 30, 40],
          label: 'Distribution',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept labeled entries', () => {
    const data: PieChartData = {
      dataSets: [
        {
          values: [
            { value: 35.2, label: 'iOS' },
            { value: 44.8, label: 'Android' },
            { value: 10.5, label: 'Windows' },
            { value: 9.5, label: 'Other' },
          ],
          label: 'Mobile OS Market Share',
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(4);
  });

  it('should support budget breakdown with colors', () => {
    const data: PieChartData = {
      dataSets: [
        {
          values: [
            { value: 2500, label: 'Housing' },
            { value: 800, label: 'Food' },
            { value: 400, label: 'Transportation' },
            { value: 300, label: 'Utilities' },
            { value: 200, label: 'Entertainment' },
            { value: 500, label: 'Savings' },
            { value: 300, label: 'Other' },
          ],
          label: 'Monthly Budget',
          config: {
            colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#4CAF50', '#FF9F40'],
            sliceSpace: 2,
            selectionShift: 8,
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(7);
    expect(data.dataSets[0].config?.colors?.length).toBe(7);
    expect(data.dataSets[0].config?.sliceSpace).toBe(2);
  });

  it('should support donut chart configuration', () => {
    const data: PieChartData = {
      dataSets: [
        {
          values: [
            { value: 40, label: 'Complete' },
            { value: 60, label: 'Remaining' },
          ],
          label: 'Progress',
          config: {
            colors: ['#4CAF50', '#E0E0E0'],
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(2);
  });

  it('should support value positioning', () => {
    const data: PieChartData = {
      dataSets: [
        {
          values: [25, 25, 25, 25],
          label: 'Equal Distribution',
          config: {
            xValuePosition: 'OUTSIDE_SLICE',
            yValuePosition: 'INSIDE_SLICE',
            valueLinePart1OffsetPercentage: 80,
            valueLinePart1Length: 0.4,
            valueLinePart2Length: 0.6,
            valueLineColor: '#333333',
          },
        },
      ],
    };
    expect(data.dataSets[0].config?.xValuePosition).toBe('OUTSIDE_SLICE');
    expect(data.dataSets[0].config?.valueLinePart1OffsetPercentage).toBe(80);
  });
});

/**
 * Scatter Chart Types
 */

describe('ScatterShape type', () => {
  it('should include all valid shapes', () => {
    const shapes: ScatterShape[] = ['SQUARE', 'CIRCLE', 'TRIANGLE', 'CROSS', 'X'];
    expect(shapes.length).toBe(5);
  });
});

describe('ScatterDataSetConfig type', () => {
  it('should accept scatter shape size', () => {
    const config: ScatterDataSetConfig = {
      scatterShapeSize: 10,
    };
    expect(config.scatterShapeSize).toBe(10);
  });

  it('should accept scatter shape type', () => {
    const config: ScatterDataSetConfig = {
      scatterShape: 'CIRCLE',
    };
    expect(config.scatterShape).toBe('CIRCLE');
  });

  it('should accept shape hole configuration', () => {
    const config: ScatterDataSetConfig = {
      scatterShapeHoleColor: '#FFFFFF',
      scatterShapeHoleRadius: 3,
    };
    expect(config.scatterShapeHoleColor).toBe('#FFFFFF');
    expect(config.scatterShapeHoleRadius).toBe(3);
  });
});

describe('ScatterDataEntry type', () => {
  it('should accept y value only', () => {
    const entry: ScatterDataEntry = { y: 100 };
    expect(entry.y).toBe(100);
  });

  it('should accept x and y values', () => {
    const entry: ScatterDataEntry = { x: 5, y: 100 };
    expect(entry.x).toBe(5);
    expect(entry.y).toBe(100);
  });

  it('should accept marker text', () => {
    const entry: ScatterDataEntry = { x: 5, y: 100, marker: 'Point A' };
    expect(entry.marker).toBe('Point A');
  });
});

describe('ScatterChartData type', () => {
  it('should accept single dataset', () => {
    const data: ScatterChartData = {
      dataSets: [
        {
          values: [10, 20, 30],
          label: 'Dataset 1',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept multiple datasets with different shapes', () => {
    const data: ScatterChartData = {
      dataSets: [
        {
          values: [{ x: 1, y: 10 }],
          label: 'Circles',
          config: { scatterShape: 'CIRCLE' },
        },
        {
          values: [{ x: 1, y: 15 }],
          label: 'Squares',
          config: { scatterShape: 'SQUARE' },
        },
      ],
    };
    expect(data.dataSets.length).toBe(2);
    expect(data.dataSets[0].config?.scatterShape).toBe('CIRCLE');
    expect(data.dataSets[1].config?.scatterShape).toBe('SQUARE');
  });

  it('should support correlation data with trend', () => {
    const data: ScatterChartData = {
      dataSets: [
        {
          values: [
            { x: 1.2, y: 2.3 },
            { x: 2.5, y: 4.1 },
            { x: 3.1, y: 5.8 },
            { x: 4.7, y: 7.2 },
            { x: 5.3, y: 9.1 },
            { x: 6.8, y: 11.5 },
            { x: 7.2, y: 12.8 },
            { x: 8.9, y: 15.3 },
          ],
          label: 'Height vs Weight',
          config: {
            color: '#3F51B5',
            scatterShape: 'CIRCLE',
            scatterShapeSize: 12,
            highlightLineWidth: 1.5,
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(8);
    expect(data.dataSets[0].config?.scatterShapeSize).toBe(12);
  });

  it('should support clustered scatter with multiple groups', () => {
    const data: ScatterChartData = {
      dataSets: [
        {
          values: [
            { x: 1, y: 1 },
            { x: 1.5, y: 1.2 },
            { x: 1.8, y: 0.9 },
          ],
          label: 'Cluster A',
          config: { color: '#E91E63', scatterShape: 'CIRCLE' },
        },
        {
          values: [
            { x: 5, y: 5 },
            { x: 5.3, y: 4.8 },
            { x: 4.7, y: 5.2 },
          ],
          label: 'Cluster B',
          config: { color: '#2196F3', scatterShape: 'SQUARE' },
        },
        {
          values: [
            { x: 8, y: 2 },
            { x: 8.2, y: 2.3 },
            { x: 7.8, y: 1.7 },
          ],
          label: 'Cluster C',
          config: { color: '#4CAF50', scatterShape: 'TRIANGLE' },
        },
      ],
    };
    expect(data.dataSets.length).toBe(3);
    expect(data.dataSets[0].config?.scatterShape).toBe('CIRCLE');
    expect(data.dataSets[1].config?.scatterShape).toBe('SQUARE');
    expect(data.dataSets[2].config?.scatterShape).toBe('TRIANGLE');
  });

  it('should support all scatter shape types', () => {
    const shapes = ['CIRCLE', 'SQUARE', 'TRIANGLE', 'CROSS', 'X'] as const;
    shapes.forEach((shape, i) => {
      const data: ScatterChartData = {
        dataSets: [
          {
            values: [{ x: i, y: i }],
            label: `Shape ${shape}`,
            config: { scatterShape: shape },
          },
        ],
      };
      expect(data.dataSets[0].config?.scatterShape).toBe(shape);
    });
  });
});

/**
 * Bubble Chart Types
 */

describe('BubbleDataSetConfig type', () => {
  it('should extend DataSetConfigBarLineScatterCandleBubble', () => {
    const config: BubbleDataSetConfig = {
      color: '#FF0000',
      highlightColor: '#FFEB3B',
      highlightEnabled: true,
    };
    expect(config.color).toBe('#FF0000');
    expect(config.highlightColor).toBe('#FFEB3B');
  });
});

describe('BubbleDataEntry type', () => {
  it('should require size property', () => {
    const entry: BubbleDataEntry = {
      y: 100,
      size: 20,
    };
    expect(entry.y).toBe(100);
    expect(entry.size).toBe(20);
  });

  it('should accept x, y, and size', () => {
    const entry: BubbleDataEntry = {
      x: 5,
      y: 100,
      size: 30,
    };
    expect(entry.x).toBe(5);
    expect(entry.y).toBe(100);
    expect(entry.size).toBe(30);
  });

  it('should accept marker text', () => {
    const entry: BubbleDataEntry = {
      x: 5,
      y: 100,
      size: 25,
      marker: 'Company A',
    };
    expect(entry.marker).toBe('Company A');
  });

  it('should accept zero size for hidden bubbles', () => {
    const entry: BubbleDataEntry = {
      x: 0,
      y: 0,
      size: 0,
    };
    expect(entry.size).toBe(0);
  });

  it('should accept floating point size', () => {
    const entry: BubbleDataEntry = {
      x: 3.5,
      y: 45.7,
      size: 12.5,
    };
    expect(entry.size).toBe(12.5);
  });
});

describe('BubbleChartData type', () => {
  it('should accept single dataset', () => {
    const data: BubbleChartData = {
      dataSets: [
        {
          values: [
            { y: 10, size: 15 },
            { y: 20, size: 25 },
          ],
          label: 'Dataset 1',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept multiple datasets', () => {
    const data: BubbleChartData = {
      dataSets: [
        {
          values: [{ x: 0, y: 10, size: 10 }],
          label: 'Group A',
          config: { color: '#FF5722' },
        },
        {
          values: [{ x: 0, y: 20, size: 20 }],
          label: 'Group B',
          config: { color: '#03A9F4' },
        },
      ],
    };
    expect(data.dataSets.length).toBe(2);
  });

  it('should accept market cap style bubble chart', () => {
    const data: BubbleChartData = {
      dataSets: [
        {
          values: [
            { x: 1, y: 150, size: 2500, marker: 'Apple' },
            { x: 2, y: 125, size: 2000, marker: 'Microsoft' },
            { x: 3, y: 90, size: 1500, marker: 'Amazon' },
            { x: 4, y: 280, size: 800, marker: 'Google' },
            { x: 5, y: 60, size: 600, marker: 'Meta' },
          ],
          label: 'Tech Companies',
          config: {
            colors: ['#000000', '#00A4EF', '#FF9900', '#4285F4', '#1877F2'],
            drawValues: true,
            valueTextSize: 8,
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(5);
    expect(data.dataSets[0].config?.colors?.length).toBe(5);
  });

  it('should accept scientific data with three dimensions', () => {
    const data: BubbleChartData = {
      dataSets: [
        {
          values: [
            { x: 0.5, y: 0.8, size: 12 },
            { x: 1.2, y: 2.1, size: 18 },
            { x: 2.3, y: 1.5, size: 25 },
            { x: 3.1, y: 3.2, size: 30 },
            { x: 4.0, y: 2.8, size: 22 },
          ],
          label: 'Experiment Results',
          config: {
            color: '#9C27B0',
            highlightEnabled: true,
            highlightColor: '#7B1FA2',
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(5);
  });
});

/**
 * Candle Chart Types
 */

describe('PaintStyle type', () => {
  it('should include all valid paint styles', () => {
    const styles: PaintStyle[] = ['FILL', 'STROKE', 'FILL_AND_STROKE'];
    expect(styles.length).toBe(3);
  });
});

describe('CandleDataSetConfig type', () => {
  it('should accept bar space', () => {
    const config: CandleDataSetConfig = {
      barSpace: 0.1,
    };
    expect(config.barSpace).toBe(0.1);
  });

  it('should accept shadow configuration', () => {
    const config: CandleDataSetConfig = {
      shadowWidth: 1,
      shadowColor: '#000000',
      shadowColorSameAsCandle: true,
    };
    expect(config.shadowWidth).toBe(1);
    expect(config.shadowColorSameAsCandle).toBe(true);
  });

  it('should accept neutral color', () => {
    const config: CandleDataSetConfig = {
      neutralColor: '#999999',
    };
    expect(config.neutralColor).toBe('#999999');
  });

  it('should accept decreasing candle configuration', () => {
    const config: CandleDataSetConfig = {
      decreasingColor: '#F44336',
      decreasingPaintStyle: 'FILL',
    };
    expect(config.decreasingColor).toBe('#F44336');
    expect(config.decreasingPaintStyle).toBe('FILL');
  });

  it('should accept increasing candle configuration', () => {
    const config: CandleDataSetConfig = {
      increasingColor: '#4CAF50',
      increasingPaintStyle: 'STROKE',
    };
    expect(config.increasingColor).toBe('#4CAF50');
    expect(config.increasingPaintStyle).toBe('STROKE');
  });
});

describe('CandleDataEntry type', () => {
  it('should require OHLC values', () => {
    const entry: CandleDataEntry = {
      shadowH: 110,
      shadowL: 90,
      open: 95,
      close: 105,
    };
    expect(entry.shadowH).toBe(110);
    expect(entry.shadowL).toBe(90);
    expect(entry.open).toBe(95);
    expect(entry.close).toBe(105);
  });

  it('should accept x value', () => {
    const entry: CandleDataEntry = {
      x: 0,
      shadowH: 110,
      shadowL: 90,
      open: 95,
      close: 105,
    };
    expect(entry.x).toBe(0);
  });

  it('should accept marker text', () => {
    const entry: CandleDataEntry = {
      shadowH: 110,
      shadowL: 90,
      open: 95,
      close: 105,
      marker: 'Jan 1',
    };
    expect(entry.marker).toBe('Jan 1');
  });

  it('should handle bullish candle (close > open)', () => {
    const entry: CandleDataEntry = {
      shadowH: 120,
      shadowL: 95,
      open: 100,
      close: 115,
    };
    expect(entry.close).toBeGreaterThan(entry.open);
  });

  it('should handle bearish candle (close < open)', () => {
    const entry: CandleDataEntry = {
      shadowH: 115,
      shadowL: 90,
      open: 110,
      close: 95,
    };
    expect(entry.close).toBeLessThan(entry.open);
  });

  it('should handle doji candle (close == open)', () => {
    const entry: CandleDataEntry = {
      shadowH: 110,
      shadowL: 90,
      open: 100,
      close: 100,
    };
    expect(entry.close).toBe(entry.open);
  });

  it('should handle hammer candle pattern', () => {
    const entry: CandleDataEntry = {
      shadowH: 105,
      shadowL: 85,
      open: 100,
      close: 103,
    };
    expect(entry.shadowL).toBeLessThan(entry.open);
    expect(entry.shadowH - entry.close).toBeLessThan(entry.open - entry.shadowL);
  });

  it('should handle inverted hammer pattern', () => {
    const entry: CandleDataEntry = {
      shadowH: 115,
      shadowL: 95,
      open: 97,
      close: 100,
    };
    expect(entry.shadowH - entry.close).toBeGreaterThan(entry.open - entry.shadowL);
  });
});

describe('CandleChartData type', () => {
  it('should accept single dataset', () => {
    const data: CandleChartData = {
      dataSets: [
        {
          values: [{ shadowH: 100, shadowL: 90, open: 92, close: 98 }],
          label: 'AAPL',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept realistic stock data', () => {
    const data: CandleChartData = {
      dataSets: [
        {
          values: [
            { x: 0, shadowH: 175.25, shadowL: 172.1, open: 173.0, close: 174.5, marker: 'Mon' },
            { x: 1, shadowH: 176.8, shadowL: 173.5, open: 174.5, close: 175.2, marker: 'Tue' },
            { x: 2, shadowH: 177.5, shadowL: 174.0, open: 175.2, close: 174.8, marker: 'Wed' },
            { x: 3, shadowH: 176.0, shadowL: 171.5, open: 174.8, close: 172.0, marker: 'Thu' },
            { x: 4, shadowH: 173.5, shadowL: 170.0, open: 172.0, close: 171.25, marker: 'Fri' },
          ],
          label: 'AAPL Weekly',
          config: {
            increasingColor: '#26A69A',
            increasingPaintStyle: 'FILL',
            decreasingColor: '#EF5350',
            decreasingPaintStyle: 'FILL',
            shadowWidth: 1.5,
            shadowColorSameAsCandle: true,
            barSpace: 0.05,
            highlightColor: '#FFC107',
            drawVerticalHighlightIndicator: true,
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(5);
    expect(data.dataSets[0].config?.shadowColorSameAsCandle).toBe(true);
  });

  it('should accept crypto-style 24h data', () => {
    const data: CandleChartData = {
      dataSets: [
        {
          values: Array.from({ length: 24 }, (_, i) => ({
            x: i,
            shadowH: 45000 + Math.random() * 2000,
            shadowL: 43000 + Math.random() * 1000,
            open: 44000 + Math.random() * 1000,
            close: 44000 + Math.random() * 1000,
          })),
          label: 'BTC/USD 24H',
          config: {
            increasingColor: '#00E676',
            decreasingColor: '#FF1744',
            neutralColor: '#9E9E9E',
            shadowColor: '#424242',
          },
        },
      ],
    };
    expect(data.dataSets[0].values.length).toBe(24);
  });
});

/**
 * Radar Chart Types
 */

describe('RadarDataSetConfig type', () => {
  it('should extend DataSetConfigLineRadar', () => {
    const config: RadarDataSetConfig = {
      color: '#FF0000',
      lineWidth: 2,
      drawFilled: true,
      fillColor: '#FF0000',
      fillAlpha: 100,
    };
    expect(config.color).toBe('#FF0000');
    expect(config.lineWidth).toBe(2);
    expect(config.drawFilled).toBe(true);
  });

  it('should accept fill gradient', () => {
    const config: RadarDataSetConfig = {
      fillGradient: {
        colors: ['#FF0000', '#0000FF'],
        positions: [0, 1],
      },
    };
    expect(config.fillGradient?.colors.length).toBe(2);
  });
});

describe('RadarDataEntry type', () => {
  it('should accept value', () => {
    const entry: RadarDataEntry = { value: 75 };
    expect(entry.value).toBe(75);
  });

  it('should accept zero value', () => {
    const entry: RadarDataEntry = { value: 0 };
    expect(entry.value).toBe(0);
  });

  it('should accept max value', () => {
    const entry: RadarDataEntry = { value: 100 };
    expect(entry.value).toBe(100);
  });

  it('should accept decimal values', () => {
    const entry: RadarDataEntry = { value: 85.5 };
    expect(entry.value).toBe(85.5);
  });

  it('should accept negative value for inverted scales', () => {
    const entry: RadarDataEntry = { value: -25 };
    expect(entry.value).toBe(-25);
  });
});

describe('RadarChartData type', () => {
  it('should accept single dataset', () => {
    const data: RadarChartData = {
      dataSets: [
        {
          values: [80, 90, 70, 85, 95],
          label: 'Player 1',
        },
      ],
    };
    expect(data.dataSets.length).toBe(1);
  });

  it('should accept labels', () => {
    const data: RadarChartData = {
      dataSets: [
        {
          values: [80, 90, 70, 85, 95],
          label: 'Stats',
        },
      ],
      labels: ['Speed', 'Strength', 'Agility', 'Intelligence', 'Endurance'],
    };
    expect(data.labels?.length).toBe(5);
  });

  it('should accept multiple datasets for comparison', () => {
    const data: RadarChartData = {
      dataSets: [
        {
          values: [85, 90, 75, 80, 95],
          label: 'Player A',
          config: { color: '#F44336' },
        },
        {
          values: [75, 85, 90, 95, 70],
          label: 'Player B',
          config: { color: '#2196F3' },
        },
      ],
      labels: ['Attack', 'Defense', 'Speed', 'Technique', 'Stamina'],
    };
    expect(data.dataSets.length).toBe(2);
    expect(data.labels?.length).toBe(5);
  });

  it('should accept product comparison data', () => {
    const data: RadarChartData = {
      dataSets: [
        {
          values: [90, 85, 70, 95, 80, 88],
          label: 'Product A',
          config: {
            color: '#4CAF50',
            lineWidth: 2.5,
            drawFilled: true,
            fillAlpha: 40,
          },
        },
        {
          values: [75, 90, 85, 80, 95, 70],
          label: 'Product B',
          config: {
            color: '#FF9800',
            lineWidth: 2.5,
            drawFilled: true,
            fillAlpha: 40,
          },
        },
        {
          values: [80, 75, 95, 85, 70, 90],
          label: 'Product C',
          config: {
            color: '#9C27B0',
            lineWidth: 2.5,
            drawFilled: true,
            fillAlpha: 40,
          },
        },
      ],
      labels: ['Price', 'Quality', 'Features', 'Support', 'Reliability', 'Performance'],
    };
    expect(data.dataSets.length).toBe(3);
    expect(data.labels?.length).toBe(6);
  });

  it('should accept skill assessment data', () => {
    const data: RadarChartData = {
      dataSets: [
        {
          values: [{ value: 95 }, { value: 88 }, { value: 72 }, { value: 85 }, { value: 90 }, { value: 78 }, { value: 82 }],
          label: 'Developer Skills',
          config: {
            color: '#3F51B5',
            lineWidth: 2,
            drawFilled: true,
            fillColor: '#3F51B5',
            fillAlpha: 30,
          },
        },
      ],
      labels: ['TypeScript', 'React', 'Node.js', 'Testing', 'Architecture', 'DevOps', 'Communication'],
    };
    expect(data.dataSets[0].values.length).toBe(7);
    expect(data.labels?.length).toBe(7);
  });
});

/**
 * Combined Chart Types
 */

describe('CombinedChartData type', () => {
  it('should accept line data only', () => {
    const data: CombinedChartData = {
      lineData: {
        dataSets: [
          {
            values: [10, 20, 30, 40, 50],
            label: 'Line Only',
          },
        ],
      },
    };
    expect(data.lineData?.dataSets.length).toBe(1);
    expect(data.barData).toBeUndefined();
  });

  it('should accept bar data only', () => {
    const data: CombinedChartData = {
      barData: {
        dataSets: [
          {
            values: [15, 25, 35, 45, 55],
            label: 'Bar Only',
          },
        ],
      },
    };
    expect(data.barData?.dataSets.length).toBe(1);
    expect(data.lineData).toBeUndefined();
  });

  it('should combine line and bar data', () => {
    const data: CombinedChartData = {
      lineData: {
        dataSets: [
          {
            values: [50, 60, 55, 70, 65],
            label: 'Trend Line',
            config: { color: '#F44336' },
          },
        ],
      },
      barData: {
        dataSets: [
          {
            values: [40, 55, 45, 60, 50],
            label: 'Values',
            config: { color: '#2196F3' },
          },
        ],
      },
    };
    expect(data.lineData?.dataSets.length).toBe(1);
    expect(data.barData?.dataSets.length).toBe(1);
  });

  it('should combine all chart types', () => {
    const data: CombinedChartData = {
      lineData: {
        dataSets: [{ values: [10, 20, 30], label: 'Line' }],
      },
      barData: {
        dataSets: [{ values: [8, 18, 28], label: 'Bar' }],
      },
      scatterData: {
        dataSets: [{ values: [{ x: 0, y: 12 }], label: 'Scatter' }],
      },
      candleData: {
        dataSets: [{ values: [{ shadowH: 50, shadowL: 40, open: 42, close: 48 }], label: 'Candle' }],
      },
      bubbleData: {
        dataSets: [{ values: [{ x: 2, y: 35, size: 15 }], label: 'Bubble' }],
      },
    };
    expect(data.lineData).toBeDefined();
    expect(data.barData).toBeDefined();
    expect(data.scatterData).toBeDefined();
    expect(data.candleData).toBeDefined();
    expect(data.bubbleData).toBeDefined();
  });

  it('should accept empty combined data', () => {
    const data: CombinedChartData = {};
    expect(data.lineData).toBeUndefined();
    expect(data.barData).toBeUndefined();
  });

  it('should support stock chart with price and volume', () => {
    const data: CombinedChartData = {
      candleData: {
        dataSets: [
          {
            values: [
              { x: 0, shadowH: 175.5, shadowL: 172.0, open: 173.0, close: 174.8 },
              { x: 1, shadowH: 176.2, shadowL: 173.5, open: 174.8, close: 175.5 },
              { x: 2, shadowH: 177.0, shadowL: 174.0, open: 175.5, close: 174.2 },
              { x: 3, shadowH: 175.0, shadowL: 171.0, open: 174.2, close: 172.0 },
              { x: 4, shadowH: 173.5, shadowL: 170.5, open: 172.0, close: 171.5 },
            ],
            label: 'AAPL',
            config: {
              increasingColor: '#26A69A',
              decreasingColor: '#EF5350',
              shadowColorSameAsCandle: true,
            },
          },
        ],
      },
      barData: {
        dataSets: [
          {
            values: [
              { x: 0, y: 45000000 },
              { x: 1, y: 38000000 },
              { x: 2, y: 52000000 },
              { x: 3, y: 68000000 },
              { x: 4, y: 41000000 },
            ],
            label: 'Volume',
            config: {
              color: '#90CAF9',
              axisDependency: 'RIGHT',
              highlightAlpha: 100,
            },
          },
        ],
        config: {
          barWidth: 0.8,
        },
      },
    };
    expect(data.candleData?.dataSets[0].values.length).toBe(5);
    expect(data.barData?.dataSets[0].values.length).toBe(5);
    expect(data.barData?.config?.barWidth).toBe(0.8);
  });

  it('should combine line and scatter for regression', () => {
    const data: CombinedChartData = {
      lineData: {
        dataSets: [
          {
            values: [
              { x: 0, y: 10 },
              { x: 5, y: 50 },
            ],
            label: 'Trend Line',
            config: {
              color: '#4CAF50',
              lineWidth: 2,
              drawCircles: false,
            },
          },
        ],
      },
      scatterData: {
        dataSets: [
          {
            values: [
              { x: 1, y: 15 },
              { x: 2, y: 25 },
              { x: 3, y: 35 },
              { x: 4, y: 42 },
            ],
            label: 'Data Points',
            config: {
              color: '#9C27B0',
              scatterShape: 'CIRCLE',
              scatterShapeSize: 10,
            },
          },
        ],
      },
    };
    expect(data.lineData?.dataSets[0].config?.drawCircles).toBe(false);
    expect(data.scatterData?.dataSets[0].config?.scatterShape).toBe('CIRCLE');
  });
});

/**
 * Event Types
 */

describe('ChartSelectData type', () => {
  it('should contain selection coordinates', () => {
    const data: ChartSelectData = {
      x: 5,
      y: 100,
      dataSetIndex: 0,
      dataIndex: 5,
    };
    expect(data.x).toBe(5);
    expect(data.y).toBe(100);
    expect(data.dataSetIndex).toBe(0);
    expect(data.dataIndex).toBe(5);
  });

  it('should accept optional data payload', () => {
    const data: ChartSelectData = {
      x: 3,
      y: 75,
      dataSetIndex: 1,
      dataIndex: 3,
      data: { label: 'March', value: 75, category: 'Sales' },
    };
    expect(data.data?.label).toBe('March');
    expect(data.data?.value).toBe(75);
  });
});

describe('ChartSelectEvent type', () => {
  it('should extend EventData', () => {
    const event: ChartSelectEvent = {
      eventName: 'select',
      object: {} as any,
      data: {
        x: 5,
        y: 100,
        dataSetIndex: 0,
        dataIndex: 5,
      },
    };
    expect(event.eventName).toBe('select');
    expect(event.data.x).toBe(5);
  });

  it('should handle line chart point selection', () => {
    const event: ChartSelectEvent = {
      eventName: 'select',
      object: {} as any,
      data: {
        x: 3,
        y: 75.5,
        dataSetIndex: 0,
        dataIndex: 3,
      },
    };
    expect(event.data.y).toBe(75.5);
    expect(event.data.dataSetIndex).toBe(0);
  });

  it('should handle bar chart bar selection', () => {
    const event: ChartSelectEvent = {
      eventName: 'select',
      object: {} as any,
      data: {
        x: 2,
        y: 150,
        dataSetIndex: 1,
        dataIndex: 2,
      },
    };
    expect(event.data.dataIndex).toBe(2);
    expect(event.data.dataSetIndex).toBe(1);
  });

  it('should handle pie chart slice selection', () => {
    const event: ChartSelectEvent = {
      eventName: 'select',
      object: {} as any,
      data: {
        x: 0,
        y: 35.5,
        dataSetIndex: 0,
        dataIndex: 2,
      },
    };
    expect(event.data.y).toBe(35.5);
    expect(event.data.dataIndex).toBe(2);
  });

  it('should handle candle chart selection with OHLC data', () => {
    const event: ChartSelectEvent = {
      eventName: 'select',
      object: {} as any,
      data: {
        x: 5,
        y: 175.5,
        dataSetIndex: 0,
        dataIndex: 5,
      },
    };
    expect(event.data.x).toBe(5);
    expect(event.eventName).toBe('select');
  });

  it('should handle nothing selected event', () => {
    const event: ChartSelectEvent = {
      eventName: 'nothingSelected',
      object: {} as any,
      data: {
        x: 0,
        y: 0,
        dataSetIndex: -1,
        dataIndex: -1,
      },
    };
    expect(event.eventName).toBe('nothingSelected');
    expect(event.data.dataSetIndex).toBe(-1);
  });
});

describe('ChartGestureEvent type', () => {
  it('should accept pan gesture', () => {
    const event: ChartGestureEvent = {
      type: 'pan',
      state: 'changed',
    };
    expect(event.type).toBe('pan');
    expect(event.state).toBe('changed');
  });

  it('should accept scale gesture with values', () => {
    const event: ChartGestureEvent = {
      type: 'scale',
      state: 'began',
      scaleX: 1.5,
      scaleY: 1.5,
      centerX: 200,
      centerY: 300,
    };
    expect(event.type).toBe('scale');
    expect(event.scaleX).toBe(1.5);
    expect(event.scaleY).toBe(1.5);
  });

  it('should accept single-tap gesture', () => {
    const event: ChartGestureEvent = {
      type: 'single-tap',
      state: 'ended',
    };
    expect(event.type).toBe('single-tap');
    expect(event.state).toBe('ended');
  });

  it('should accept all gesture states', () => {
    const states: ChartGestureEvent['state'][] = ['began', 'changed', 'ended', 'cancelled'];
    states.forEach((state) => {
      const event: ChartGestureEvent = { type: 'pan', state };
      expect(event.state).toBe(state);
    });
  });

  it('should accept double-tap gesture', () => {
    const event: ChartGestureEvent = {
      type: 'double-tap',
      state: 'ended',
    };
    expect(event.type).toBe('double-tap');
    expect(event.state).toBe('ended');
  });

  it('should accept long-press gesture', () => {
    const event: ChartGestureEvent = {
      type: 'long-press',
      state: 'began',
    };
    expect(event.type).toBe('long-press');
    expect(event.state).toBe('began');
  });

  it('should accept rotate gesture', () => {
    const event: ChartGestureEvent = {
      type: 'rotate',
      state: 'changed',
    };
    expect(event.type).toBe('rotate');
    expect(event.state).toBe('changed');
  });

  it('should accept scale gesture with center position', () => {
    const event: ChartGestureEvent = {
      type: 'scale',
      state: 'ended',
      scaleX: 2.0,
      scaleY: 2.0,
      centerX: 150,
      centerY: 250,
    };
    expect(event.scaleX).toBe(2.0);
    expect(event.centerX).toBe(150);
    expect(event.centerY).toBe(250);
  });

  it('should track scale gesture values', () => {
    const event: ChartGestureEvent = {
      type: 'scale',
      state: 'changed',
      scaleX: 1.25,
      scaleY: 1.25,
    };
    expect(event.scaleX).toBe(1.25);
    expect(event.scaleY).toBe(1.25);
  });

  it('should support all gesture types', () => {
    const types: ChartGestureEvent['type'][] = ['pan', 'scale', 'single-tap', 'double-tap', 'long-press', 'rotate'];
    types.forEach((type) => {
      const event: ChartGestureEvent = { type, state: 'began' };
      expect(event.type).toBe(type);
    });
  });
});

describe('YAxisMinMaxChangeEvent type', () => {
  it('should accept left axis values', () => {
    const event: YAxisMinMaxChangeEvent = {
      left: { min: 0, max: 100 },
    };
    expect(event.left?.min).toBe(0);
    expect(event.left?.max).toBe(100);
  });

  it('should accept right axis values', () => {
    const event: YAxisMinMaxChangeEvent = {
      right: { min: 0, max: 500 },
    };
    expect(event.right?.min).toBe(0);
    expect(event.right?.max).toBe(500);
  });

  it('should accept both axes', () => {
    const event: YAxisMinMaxChangeEvent = {
      left: { min: 0, max: 100 },
      right: { min: 0, max: 1000 },
    };
    expect(event.left?.max).toBe(100);
    expect(event.right?.max).toBe(1000);
  });
});

/**
 * Config Types
 */

describe('ChartBaseConfig type', () => {
  it('should accept animation config', () => {
    const config: ChartBaseConfig = {
      animation: {
        durationX: 1000,
        durationY: 1000,
        easingX: 'EaseOutCubic',
      },
    };
    expect(config.animation?.durationX).toBe(1000);
  });

  it('should accept appearance config', () => {
    const config: ChartBaseConfig = {
      chartBackgroundColor: '#FFFFFF',
      noDataText: 'No data available',
      noDataTextColor: '#999999',
    };
    expect(config.chartBackgroundColor).toBe('#FFFFFF');
    expect(config.noDataText).toBe('No data available');
  });

  it('should accept interaction config', () => {
    const config: ChartBaseConfig = {
      touchEnabled: true,
      dragDecelerationEnabled: true,
      dragDecelerationFrictionCoef: 0.9,
      highlightPerTapEnabled: true,
    };
    expect(config.touchEnabled).toBe(true);
    expect(config.dragDecelerationFrictionCoef).toBe(0.9);
  });

  it('should accept highlights', () => {
    const config: ChartBaseConfig = {
      highlights: [{ x: 5 }, { x: 10, y: 100, dataSetIndex: 0 }],
    };
    expect(config.highlights?.length).toBe(2);
  });
});

describe('BarLineChartBaseConfig type', () => {
  it('should extend ChartBaseConfig', () => {
    const config: BarLineChartBaseConfig = {
      animation: { durationX: 500 },
      chartDescription: { text: 'Line Chart' },
      maxHighlightDistance: 300,
    };
    expect(config.animation?.durationX).toBe(500);
    expect(config.maxHighlightDistance).toBe(300);
  });

  it('should accept grid and border config', () => {
    const config: BarLineChartBaseConfig = {
      drawGridBackground: true,
      gridBackgroundColor: '#F5F5F5',
      drawBorders: true,
      borderColor: '#E0E0E0',
      borderWidth: 1,
    };
    expect(config.drawGridBackground).toBe(true);
    expect(config.borderWidth).toBe(1);
  });

  it('should accept scaling and dragging config', () => {
    const config: BarLineChartBaseConfig = {
      scaleEnabled: true,
      scaleXEnabled: true,
      scaleYEnabled: false,
      dragEnabled: true,
      pinchZoom: true,
      doubleTapToZoomEnabled: true,
      highlightPerDragEnabled: true,
    };
    expect(config.scaleXEnabled).toBe(true);
    expect(config.scaleYEnabled).toBe(false);
    expect(config.pinchZoom).toBe(true);
  });

  it('should accept Y-axis config', () => {
    const config: BarLineChartBaseConfig = {
      yAxis: {
        left: { enabled: true, axisMinimum: 0 },
        right: { enabled: false },
      },
    };
    expect(config.yAxis?.left?.enabled).toBe(true);
    expect(config.yAxis?.right?.enabled).toBe(false);
  });

  it('should accept zoom config', () => {
    const config: BarLineChartBaseConfig = {
      zoom: {
        scaleX: 2,
        scaleY: 2,
        xValue: 50,
        yValue: 500,
        axisDependency: 'LEFT',
      },
    };
    expect(config.zoom?.scaleX).toBe(2);
    expect(config.zoom?.axisDependency).toBe('LEFT');
  });
});

describe('PieRadarChartBaseConfig type', () => {
  it('should extend ChartBaseConfig', () => {
    const config: PieRadarChartBaseConfig = {
      animation: { durationY: 1000 },
      rotationAngle: 270,
      rotationEnabled: true,
      minOffset: 10,
    };
    expect(config.rotationAngle).toBe(270);
    expect(config.rotationEnabled).toBe(true);
  });
});

describe('PieChartConfig type', () => {
  it('should extend PieRadarChartBaseConfig', () => {
    const config: PieChartConfig = {
      rotationAngle: 0,
      rotationEnabled: false,
    };
    expect(config.rotationAngle).toBe(0);
  });

  it('should accept hole configuration', () => {
    const config: PieChartConfig = {
      drawHole: true,
      holeRadius: 50,
      transparentCircleRadius: 55,
      holeColor: '#FFFFFF',
      transparentCircleColor: 'rgba(255,255,255,0.5)',
    };
    expect(config.drawHole).toBe(true);
    expect(config.holeRadius).toBe(50);
  });

  it('should accept center text configuration', () => {
    const config: PieChartConfig = {
      drawCenterText: true,
      centerText: 'Total\n100%',
      centerTextColor: '#333333',
      centerTextSize: 16,
    };
    expect(config.drawCenterText).toBe(true);
    expect(config.centerText).toBe('Total\n100%');
  });

  it('should accept slice label configuration', () => {
    const config: PieChartConfig = {
      drawSliceText: true,
      usePercentValues: true,
      entryLabelColor: '#FFFFFF',
      entryLabelTextSize: 12,
    };
    expect(config.drawSliceText).toBe(true);
    expect(config.usePercentValues).toBe(true);
  });

  it('should accept max angle', () => {
    const config: PieChartConfig = {
      maxAngle: 180, // Half-pie chart
    };
    expect(config.maxAngle).toBe(180);
  });
});

describe('RadarChartConfig type', () => {
  it('should extend PieRadarChartBaseConfig', () => {
    const config: RadarChartConfig = {
      rotationAngle: 270,
      minOffset: 20,
    };
    expect(config.rotationAngle).toBe(270);
  });

  it('should accept Y-axis config', () => {
    const config: RadarChartConfig = {
      yAxis: {
        enabled: true,
        axisMinimum: 0,
        axisMaximum: 100,
        labelCount: 5,
      },
    };
    expect(config.yAxis?.axisMinimum).toBe(0);
    expect(config.yAxis?.axisMaximum).toBe(100);
  });

  it('should accept web configuration', () => {
    const config: RadarChartConfig = {
      drawWeb: true,
      webLineWidth: 1,
      webLineWidthInner: 0.5,
      webAlpha: 150,
      webColor: '#CCCCCC',
      webColorInner: '#DDDDDD',
      skipWebLineCount: 0,
    };
    expect(config.drawWeb).toBe(true);
    expect(config.webLineWidth).toBe(1);
    expect(config.webAlpha).toBe(150);
  });
});

/**
 * Props Types
 */

describe('LineChartProps type', () => {
  it('should require data property', () => {
    const props: LineChartProps = {
      data: {
        dataSets: [
          {
            values: [10, 20, 30],
            label: 'Line Data',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });

  it('should accept all BarLineChartBaseConfig options', () => {
    const props: LineChartProps = {
      data: {
        dataSets: [{ values: [10, 20, 30], label: 'Data' }],
      },
      animation: { durationX: 1000, durationY: 1000 },
      chartDescription: { text: 'Line Chart' },
      legend: { enabled: true },
      xAxis: { enabled: true, position: 'BOTTOM' },
      yAxis: {
        left: { enabled: true },
        right: { enabled: false },
      },
      scaleEnabled: true,
      dragEnabled: true,
      pinchZoom: true,
    };
    expect(props.animation?.durationX).toBe(1000);
    expect(props.scaleEnabled).toBe(true);
  });
});

describe('BarChartProps type', () => {
  it('should require data property', () => {
    const props: BarChartProps = {
      data: {
        dataSets: [
          {
            values: [10, 20, 30],
            label: 'Bar Data',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });

  it('should accept grouped bar chart configuration', () => {
    const props: BarChartProps = {
      data: {
        dataSets: [
          { values: [10, 20, 30, 40], label: '2023' },
          { values: [15, 25, 35, 45], label: '2024' },
        ],
        config: {
          barWidth: 0.35,
          group: {
            fromX: 0,
            groupSpace: 0.1,
            barSpace: 0.05,
          },
        },
      },
      xAxis: {
        centerAxisLabels: true,
        granularity: 1,
      },
    };
    expect(props.data.config?.group?.fromX).toBe(0);
    expect(props.xAxis?.centerAxisLabels).toBe(true);
  });
});

describe('HorizontalBarChartProps type', () => {
  it('should require data property', () => {
    const props: HorizontalBarChartProps = {
      data: {
        dataSets: [
          {
            values: [10, 20, 30],
            label: 'Horizontal Bars',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });
});

describe('PieChartProps type', () => {
  it('should require data property', () => {
    const props: PieChartProps = {
      data: {
        dataSets: [
          {
            values: [25, 25, 25, 25],
            label: 'Quarters',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });

  it('should accept full pie chart configuration', () => {
    const props: PieChartProps = {
      data: {
        dataSets: [
          {
            values: [
              { value: 35, label: 'iOS' },
              { value: 45, label: 'Android' },
              { value: 10, label: 'Windows' },
              { value: 10, label: 'Other' },
            ],
            label: 'Mobile OS',
          },
        ],
      },
      drawHole: true,
      holeRadius: 50,
      transparentCircleRadius: 55,
      holeColor: '#FFFFFF',
      drawCenterText: true,
      centerText: 'Mobile\nOS',
      centerTextSize: 14,
      usePercentValues: true,
      rotationEnabled: false,
    };
    expect(props.drawHole).toBe(true);
    expect(props.holeRadius).toBe(50);
    expect(props.usePercentValues).toBe(true);
  });
});

describe('ScatterChartProps type', () => {
  it('should require data property', () => {
    const props: ScatterChartProps = {
      data: {
        dataSets: [
          {
            values: [
              { x: 1, y: 10 },
              { x: 2, y: 20 },
            ],
            label: 'Points',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });
});

describe('BubbleChartProps type', () => {
  it('should require data property', () => {
    const props: BubbleChartProps = {
      data: {
        dataSets: [
          {
            values: [{ x: 1, y: 10, size: 20 }],
            label: 'Bubbles',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });
});

describe('CandleStickChartProps type', () => {
  it('should require data property', () => {
    const props: CandleStickChartProps = {
      data: {
        dataSets: [
          {
            values: [{ shadowH: 100, shadowL: 90, open: 92, close: 98 }],
            label: 'Stock',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });

  it('should accept full candlestick configuration', () => {
    const props: CandleStickChartProps = {
      data: {
        dataSets: [
          {
            values: [
              { x: 0, shadowH: 175, shadowL: 170, open: 172, close: 174 },
              { x: 1, shadowH: 176, shadowL: 173, open: 174, close: 175 },
            ],
            label: 'AAPL',
            config: {
              increasingColor: '#26A69A',
              increasingPaintStyle: 'FILL',
              decreasingColor: '#EF5350',
              decreasingPaintStyle: 'FILL',
              shadowColorSameAsCandle: true,
            },
          },
        ],
      },
      xAxis: {
        valueFormatter: 'date',
        valueFormatterPattern: 'MM/dd',
      },
    };
    expect(props.data.dataSets[0].config?.shadowColorSameAsCandle).toBe(true);
  });
});

describe('RadarChartProps type', () => {
  it('should require data property', () => {
    const props: RadarChartProps = {
      data: {
        dataSets: [
          {
            values: [80, 90, 70, 85, 95],
            label: 'Skills',
          },
        ],
      },
    };
    expect(props.data.dataSets.length).toBe(1);
  });

  it('should accept full radar chart configuration', () => {
    const props: RadarChartProps = {
      data: {
        dataSets: [
          {
            values: [85, 90, 75, 80, 95],
            label: 'Player A',
            config: { color: '#F44336', drawFilled: true, fillAlpha: 50 },
          },
          {
            values: [75, 85, 90, 95, 70],
            label: 'Player B',
            config: { color: '#2196F3', drawFilled: true, fillAlpha: 50 },
          },
        ],
        labels: ['Attack', 'Defense', 'Speed', 'Technique', 'Stamina'],
      },
      drawWeb: true,
      webLineWidth: 1,
      webColor: '#CCCCCC',
      yAxis: {
        axisMinimum: 0,
        axisMaximum: 100,
      },
    };
    expect(props.data.labels?.length).toBe(5);
    expect(props.drawWeb).toBe(true);
  });
});

describe('CombinedChartProps type', () => {
  it('should require data property', () => {
    const props: CombinedChartProps = {
      data: {
        lineData: {
          dataSets: [{ values: [10, 20, 30], label: 'Line' }],
        },
      },
    };
    expect(props.data.lineData?.dataSets.length).toBe(1);
  });

  it('should accept combined line and bar chart', () => {
    const props: CombinedChartProps = {
      data: {
        barData: {
          dataSets: [
            {
              values: [40, 55, 45, 60, 50],
              label: 'Volume',
              config: { color: '#90CAF9' },
            },
          ],
        },
        lineData: {
          dataSets: [
            {
              values: [50, 60, 55, 70, 65],
              label: 'Trend',
              config: { color: '#F44336', lineWidth: 2, drawCircles: false },
            },
          ],
        },
      },
      xAxis: {
        position: 'BOTTOM',
      },
      yAxis: {
        left: { axisMinimum: 0 },
      },
    };
    expect(props.data.barData?.dataSets.length).toBe(1);
    expect(props.data.lineData?.dataSets.length).toBe(1);
  });
});

/**
 * Data Validation Helpers
 * Helper functions for validating chart data structures.
 */

function isValidLineData(data: unknown): data is LineChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as LineChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'number' || (typeof v === 'object' && 'y' in v)));
}

function isValidBarData(data: unknown): data is BarChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as BarChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'number' || Array.isArray(v) || (typeof v === 'object' && 'y' in v)));
}

function isValidPieData(data: unknown): data is PieChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as PieChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'number' || (typeof v === 'object' && 'value' in v)));
}

function isValidScatterData(data: unknown): data is ScatterChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as ScatterChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'number' || (typeof v === 'object' && 'y' in v)));
}

function isValidBubbleData(data: unknown): data is BubbleChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as BubbleChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'object' && 'y' in v && 'size' in v));
}

function isValidCandleData(data: unknown): data is CandleChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as CandleChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'object' && 'shadowH' in v && 'shadowL' in v && 'open' in v && 'close' in v));
}

function isValidRadarData(data: unknown): data is RadarChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as RadarChartData;
  if (!Array.isArray(d.dataSets)) return false;
  return d.dataSets.every((ds) => Array.isArray(ds.values) && typeof ds.label === 'string' && ds.values.every((v) => typeof v === 'number' || (typeof v === 'object' && 'value' in v)));
}

function isValidCombinedData(data: unknown): data is CombinedChartData {
  if (!data || typeof data !== 'object') return false;
  const d = data as CombinedChartData;
  if (d.lineData && !isValidLineData(d.lineData)) return false;
  if (d.barData && !isValidBarData(d.barData)) return false;
  if (d.scatterData && !isValidScatterData(d.scatterData)) return false;
  if (d.candleData && !isValidCandleData(d.candleData)) return false;
  if (d.bubbleData && !isValidBubbleData(d.bubbleData)) return false;
  return true;
}

describe('Data Validation - LineChartData', () => {
  it('should validate correct line data', () => {
    const validData: LineChartData = {
      dataSets: [{ values: [10, 20, 30], label: 'Test' }],
    };
    expect(isValidLineData(validData)).toBe(true);
  });

  it('should validate line data with entry objects', () => {
    const validData: LineChartData = {
      dataSets: [{ values: [{ y: 10 }, { x: 1, y: 20 }], label: 'Test' }],
    };
    expect(isValidLineData(validData)).toBe(true);
  });

  it('should reject invalid line data - missing dataSets', () => {
    expect(isValidLineData({})).toBe(false);
  });

  it('should reject invalid line data - null', () => {
    expect(isValidLineData(null)).toBe(false);
  });

  it('should reject invalid line data - wrong value type', () => {
    const invalidData = {
      dataSets: [{ values: ['a', 'b', 'c'], label: 'Test' }],
    };
    expect(isValidLineData(invalidData)).toBe(false);
  });

  it('should reject invalid line data - missing label', () => {
    const invalidData = {
      dataSets: [{ values: [10, 20, 30] }],
    };
    expect(isValidLineData(invalidData)).toBe(false);
  });
});

describe('Data Validation - BarChartData', () => {
  it('should validate correct bar data', () => {
    const validData: BarChartData = {
      dataSets: [{ values: [10, 20, 30], label: 'Test' }],
    };
    expect(isValidBarData(validData)).toBe(true);
  });

  it('should validate stacked bar data', () => {
    const validData: BarChartData = {
      dataSets: [
        {
          values: [
            [10, 20],
            [15, 25],
          ],
          label: 'Stacked',
        },
      ],
    };
    expect(isValidBarData(validData)).toBe(true);
  });

  it('should reject invalid bar data', () => {
    expect(isValidBarData(null)).toBe(false);
    expect(isValidBarData({})).toBe(false);
  });
});

describe('Data Validation - PieChartData', () => {
  it('should validate correct pie data', () => {
    const validData: PieChartData = {
      dataSets: [{ values: [25, 25, 25, 25], label: 'Test' }],
    };
    expect(isValidPieData(validData)).toBe(true);
  });

  it('should validate pie data with entry objects', () => {
    const validData: PieChartData = {
      dataSets: [
        {
          values: [
            { value: 30, label: 'A' },
            { value: 70, label: 'B' },
          ],
          label: 'Test',
        },
      ],
    };
    expect(isValidPieData(validData)).toBe(true);
  });

  it('should reject invalid pie data', () => {
    expect(isValidPieData(null)).toBe(false);
    const invalidData = {
      dataSets: [{ values: [{ y: 10 }], label: 'Test' }], // should have 'value', not 'y'
    };
    expect(isValidPieData(invalidData)).toBe(false);
  });
});

describe('Data Validation - ScatterChartData', () => {
  it('should validate correct scatter data', () => {
    const validData: ScatterChartData = {
      dataSets: [
        {
          values: [
            { x: 1, y: 10 },
            { x: 2, y: 20 },
          ],
          label: 'Test',
        },
      ],
    };
    expect(isValidScatterData(validData)).toBe(true);
  });

  it('should validate scatter data with numbers', () => {
    const validData: ScatterChartData = {
      dataSets: [{ values: [10, 20, 30], label: 'Test' }],
    };
    expect(isValidScatterData(validData)).toBe(true);
  });

  it('should reject invalid scatter data', () => {
    expect(isValidScatterData(null)).toBe(false);
  });
});

describe('Data Validation - BubbleChartData', () => {
  it('should validate correct bubble data', () => {
    const validData: BubbleChartData = {
      dataSets: [
        {
          values: [
            { x: 1, y: 10, size: 20 },
            { x: 2, y: 20, size: 30 },
          ],
          label: 'Test',
        },
      ],
    };
    expect(isValidBubbleData(validData)).toBe(true);
  });

  it('should reject bubble data without size', () => {
    const invalidData = {
      dataSets: [
        {
          values: [
            { x: 1, y: 10 },
            { x: 2, y: 20 },
          ],
          label: 'Test',
        },
      ],
    };
    expect(isValidBubbleData(invalidData)).toBe(false);
  });

  it('should reject invalid bubble data', () => {
    expect(isValidBubbleData(null)).toBe(false);
  });
});

describe('Data Validation - CandleChartData', () => {
  it('should validate correct candle data', () => {
    const validData: CandleChartData = {
      dataSets: [
        {
          values: [{ shadowH: 100, shadowL: 90, open: 92, close: 98 }],
          label: 'Test',
        },
      ],
    };
    expect(isValidCandleData(validData)).toBe(true);
  });

  it('should reject candle data with missing OHLC', () => {
    const invalidData = {
      dataSets: [
        {
          values: [{ high: 100, low: 90, open: 92, close: 98 }], // wrong property names
          label: 'Test',
        },
      ],
    };
    expect(isValidCandleData(invalidData)).toBe(false);
  });

  it('should reject invalid candle data', () => {
    expect(isValidCandleData(null)).toBe(false);
  });
});

describe('Data Validation - RadarChartData', () => {
  it('should validate correct radar data', () => {
    const validData: RadarChartData = {
      dataSets: [{ values: [80, 90, 70, 85, 95], label: 'Test' }],
    };
    expect(isValidRadarData(validData)).toBe(true);
  });

  it('should validate radar data with entry objects', () => {
    const validData: RadarChartData = {
      dataSets: [
        {
          values: [{ value: 80 }, { value: 90 }],
          label: 'Test',
        },
      ],
    };
    expect(isValidRadarData(validData)).toBe(true);
  });

  it('should reject invalid radar data', () => {
    expect(isValidRadarData(null)).toBe(false);
  });
});

describe('Data Validation - CombinedChartData', () => {
  it('should validate empty combined data', () => {
    const validData: CombinedChartData = {};
    expect(isValidCombinedData(validData)).toBe(true);
  });

  it('should validate combined data with line data', () => {
    const validData: CombinedChartData = {
      lineData: {
        dataSets: [{ values: [10, 20], label: 'Line' }],
      },
    };
    expect(isValidCombinedData(validData)).toBe(true);
  });

  it('should validate combined data with multiple types', () => {
    const validData: CombinedChartData = {
      lineData: {
        dataSets: [{ values: [10, 20], label: 'Line' }],
      },
      barData: {
        dataSets: [{ values: [15, 25], label: 'Bar' }],
      },
    };
    expect(isValidCombinedData(validData)).toBe(true);
  });

  it('should reject combined data with invalid line data', () => {
    const invalidData = {
      lineData: {
        dataSets: [{ values: ['a', 'b'], label: 'Line' }],
      },
    };
    expect(isValidCombinedData(invalidData)).toBe(false);
  });

  it('should reject invalid combined data', () => {
    expect(isValidCombinedData(null)).toBe(false);
  });
});
