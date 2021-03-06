## @dinovative/plugin-chart-table

[![Version](https://img.shields.io/npm/v/@dinovative/plugin-chart-table.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/plugin-chart-table.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-plugin-chart-table&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-plugin-chart-table)

This plugin provides Table for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import TableChartPlugin from '@dinovative/plugin-chart-table';

new TableChartPlugin()
  .configure({ key: 'table' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-table) for more details.

```js
<SuperChart
  chartType="table"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
