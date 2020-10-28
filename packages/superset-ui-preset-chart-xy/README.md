## @dinovative/preset-chart-xy

[![Version](https://img.shields.io/npm/v/@dinovative/preset-chart-xy.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/preset-chart-xy.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-preset-chart-xy&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-preset-chart-xy)

This plugin provides basic charts on cartesian coordinates (Line, Box Plot) for Superset.

> DISCLAIMER: It is still under heavy development and the APIs are subject to changes.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import { BoxPlotChartPlugin } from '@dinovative/preset-chart-xy';

new BoxPlotChartPlugin()
  .configure({ key: 'box-plot' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-box-plot) for more details.

```js
<SuperChart
  chartType="box-plot"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
