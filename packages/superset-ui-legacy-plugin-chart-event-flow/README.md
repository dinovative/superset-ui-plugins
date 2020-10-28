## @dinovative/legacy-plugin-chart-event-flow

[![Version](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-event-flow.svg?style=flat-square)](https://img.shields.io/npm/v/@dinovative/legacy-plugin-chart-event-flow.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/dinovative/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-legacy-plugin-chart-event-flow&style=flat-square)](https://david-dm.org/dinovative/superset-ui-plugins?path=packages/superset-ui-legacy-plugin-chart-event-flow)

This plugin provides Event Flow for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import EventFlowChartPlugin from '@dinovative/legacy-plugin-chart-event-flow';

new EventFlowChartPlugin()
  .configure({ key: 'event-flow' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://dinovative.github.io/superset-ui-plugins/?selectedKind=plugin-chart-event-flow) for more details.

```js
<SuperChart
  chartType="event-flow"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
