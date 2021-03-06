## @dinovative/legacy-plugin-chart-word-cloud

[![Version](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-word-cloud.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-word-cloud.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-legacy-plugin-chart-word-cloud&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-legacy-plugin-chart-word-cloud)

This plugin provides Word Cloud for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import WordCloudChartPlugin from '@dinovative/legacy-plugin-chart-word-cloud';

new WordCloudChartPlugin()
  .configure({ key: 'word-cloud' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-word-cloud) for more details.

```js
<SuperChart
  chartType="word-cloud"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
