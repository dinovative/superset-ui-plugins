## @dinovative/legacy-plugin-chart-world-map

[![Version](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-world-map.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-world-map.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-legacy-plugin-chart-world-map&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-legacy-plugin-chart-world-map)

This plugin provides World Map for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import WorldmapChartPlugin from '@dinovative/legacy-plugin-chart-world-map';

new WorldmapChartPlugin()
  .configure({ key: 'world-map' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-world-map) for more details.

```js
<SuperChart
  chartType="world-map"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
