---
sidebarDepth: 2
---

# 锥形柱图

锥形柱图是特殊的柱状图，他将根据数值大小，降序排列锥形柱，适合排名类数据展示。<vue-page-btn />

```html
<ConicalColumnChart config={config} style={{width: '400px', height: '200px'}} />
```

<click-to-copy :info="conicalColumnChartTag" />

## 基本示例

<div class="chart-container" id="conical-column-chart1"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/conicalColumnChart/demo1.js
</fold-box>

## 数值显示

<div class="chart-container" id="conical-column-chart2"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/conicalColumnChart/demo2.js
</fold-box>

## config 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
data|柱数据|`Array<Object>`|[data属性](/guide/conicalColumnChart.html#data属性)|`[]`
img|柱顶图片url|`Array<String>`|---|`[]`
fontSize|文字大小|`Number`|---|`12`
imgSideLength|图片边长|`Number`|---|`30`
columnColor|柱颜色|`String`|---|`'rgba(0, 194, 255, 0.4)'`
textColor|文字颜色|`String`|---|`'#fff'`
showValue|显示数值|`Boolean`|---|`false`
</full-width-table>

::: tip TIP
将根据自动排序后的排名顺序使用**img**中的图片。
:::

## data 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|柱名称|`String`|---|---
value|柱数值|`Number`|---|---
</full-width-table>

<script>
import { render } from './utils'

import conicalColumnChart from './codeData/conicalColumnChart/index.js'

export default {
  data () {
    return {
      conicalColumnChartTag: `<ConicalColumnChart config={config} style={{width: '400px', height: '200px'}} />`,

      ...conicalColumnChart
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      Array(2).fill({width: '400px', height: '200px'}).forEach((style, i) => render({
        r: [datav.ConicalColumnChart, { config: this[`conicalColumnChart${i + 1}`], style }],
        $: `#conical-column-chart${i + 1}`
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7ec699;
  font-weight: bold;
}
</style>
