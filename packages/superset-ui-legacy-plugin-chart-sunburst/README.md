## @dinovative/legacy-plugin-chart-sunburst

[![Version](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-sunburst.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-sunburst.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-legacy-plugin-chart-sunburst&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-legacy-plugin-chart-sunburst)

This plugin provides Sunburst for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import SunburstChartPlugin from '@dinovative/legacy-plugin-chart-sunburst';

new SunburstChartPlugin()
  .configure({ key: 'sunburst' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-sunburst) for more details.

```js
<SuperChart
  chartType="sunburst"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
