[TOC]

# 什么是 G6

G6 是一个图可视化引擎。它提供了图的绘制、布局、分析、交互、动画等基础的图可视化能力。旨在让关系变得透明，简单。让用户获得关系数据的 Insight。

# 使用

### 创建容器

需要在 HTML 中创建一个用于容纳 G6 绘制的图的容器，通常为 `div`  标签。G6 在绘制时会在该容器下追加 `canvas` 标签，然后将图绘制在其中。

### 数据准备

引入 G6 的数据源为 JSON 格式的对象。该对象中需要有节点（`nodes`）和边（`edges`）字段，分别用数组表示

- `nodes` 数组中包含节点对象，唯一的 `id` 是每个节点对象中必要的属性，`x`、 `y` 用于定位；
- `edges` 数组中包含边对象，`source` 和 `target` 是每条边的必要属性，分别代表了该边的起始点 `id` 与 目标点 `id`

### 图实例化

图实例化时，至少需要为图设置容器、宽、高：

```html
<script>
  // const initData = { ... }
  const graph = new G6.Graph({
    container: 'mountNode', // 指定挂载容器
    width: 800, // 图的宽度
    height: 500, // 图的高度
  });
</script>
```

### 图的渲染

数据的加载和图的渲染是两个步骤，可以分开进行。

```html
<script>
  // const initData = { ... }
  //  const graph = ...
  graph.data(initData); // 加载数据
  graph.render(); // 渲染
</script>
```

为优化超出屏幕到问题，G6 提供了图的两个相关配置项：

- `fitView`：设置是否将图适配到画布中；
- `fitViewPadding`：画布上四周的留白宽度。

我们将实例化图的代码更改为如下形式：

```javascript
const graph = new G6.Graph({
  // ...
  fitView: true,
  fitViewPadding: [20, 40, 50, 20],
});
```

## 常用配置

| 配置项          | 类型           | 选项 / 示例                                                  | 默认  | 说明                                                         |
| :-------------- | :------------- | :----------------------------------------------------------- | :---- | :----------------------------------------------------------- |
| fitView         | Boolean        | true / false                                                 | false | 是否将图适配到画布大小，可以防止超出画布或留白太多。         |
| fitViewPadding  | Number / Array | 20 / [ 20, 40, 50, 20 ]                                      | 0     | 画布上的四周留白宽度。                                       |
| animate         | Boolean        | true / false                                                 | false | 是否启用图的动画。                                           |
| modes           | Object         | {   default: [ 'drag-node', 'drag-canvas' ] }                | null  | 图上行为模式的集合。由于比较复杂，按需参见：[G6 中的 Mode](https://g6.antv.vision/zh/docs/manual/middle/states/mode) 教程。 |
| defaultNode     | Object         | {   type: 'circle',   color: '#000',   style: {     ......   } } | null  | 节点默认的属性，包括节点的一般属性和样式属性（style）。      |
| defaultEdge     | Object         | {   type: 'polyline',   color: '#000',   style: {     ......   } } | null  | 边默认的属性，包括边的一般属性和样式属性（style）。          |
| nodeStateStyles | Object         | {   hover: {     ......   },   select: {     ......   } }    | null  | 节点在除默认状态外，其他状态下的样式属性（style）。例如鼠标放置（hover）、选中（select）等状态。 |
| edgeStateStyles | Object         | {   hover: {     ......   },   select: {     ......   } }    | null  | 边在除默认状态外，其他状态下的样式属性（style）。例如鼠标放置（hover）、选中（select）等状态。 |

# 元素及其配置

## 基本概念

### 图的元素

图的元素特指图上的**节点** `Node` 和**边** `Edge` 。G6 内置了一系列 [内置的节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode) 和 [内置的边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，供用户自由选择。G6 不同的内置节点或不同的内置边主要区别在于元素的 [图形 Shape](https://g6.antv.vision/zh/docs/manual/middle/elements/shape/shape-keyshape)，例如，节点可以是圆形、矩形、图片等。

## 元素的属性

不论是节点还是边，它们的属性分为两种：

- **样式属性 style**：对应 Canvas 中的各种样式，在元素[状态 State](https://g6.antv.vision/zh/docs/manual/middle/states/state) 发生变化时，可以被改变；
- **其他属性**：例如图形类型（ `type`）、id（`id` ）一类在元素[状态 State](https://g6.antv.vision/zh/docs/manual/middle/states/state) 发生变化时不能被改变的属性。

例如，G6 设定 hover 或 click 节点，造成节点状态的改变，只能自动改变节点的**样式属性**（如 `fill`、`stroke` 等**）**，**其他属性**（如 `type`  等）不能被改变。如果需要改变其他属性，要通过  [graph.updateItem](https://g6.antv.vision/zh/docs/api/graphFunc/item#graphupdateitemitem-model-stack) 手动配置。**样式属性**是一个名为  `style`  的对象， `style` 字段与其他属性并行。

### 数据结构

```javascript
{
	id: 'node0',          // 元素的 id
  type: 'circle',       // 元素的图形
  size: 40,             // 元素的大小
  label: 'node0'        // 标签文字
  visible: true,        // 控制初次渲染显示与隐藏，若为 false，代表隐藏。默认不隐藏
  labelCfg: {           // 标签配置属性
    positions: 'center',// 标签的属性，标签在元素中的位置
    style: {            // 包裹标签样式属性的字段 style 与标签其他属性在数据结构上并行
      fontSize: 12      // 标签的样式属性，文字字体大小
      // ...            // 标签的其他样式属性
    }
  }
  // ...,               // 其他属性
  style: {              // 包裹样式属性的字段 style 与其他属性在数据结构上并行
    fill: '#000',       // 样式属性，元素的填充色
    stroke: '#888',     // 样式属性，元素的描边色
    // ...              // 其他样式属性
  }
}
```

边元素的属性数据结构与节点元素相似，只是其他属性中多了 `source` 和 `target` 字段，代表起始和终止节点的 `id`。

在 G6 中，根据不同的场景需求，有 7 种配置元素属性的方式。这里，我们简单介绍其中的两种：

1. 实例化图时配置元素的全局属性；

   **适用场景：**所有节点统一的属性配置，所有边统一的属性配置。
   **使用方式：**使用图的两个配置项：

   - `defaultNode`：节点在默认状态下的**样式属性**（`style`）和**其他属性**；
   - `defaultEdge`：边在默认状态下的**样式属性**（`style`）和**其他属性**。

2. 在数据中配置。

   **适用场景：**不同节点/边可以有不同的个性化配置。

   **使用方式：**可以直接将配置写入数据文件；也可以在读入数据后，通过遍历的方式写入配置。这里展示读入数据后，通过遍历的方式写入配置。

# 使用图布局 Layout

G6 提供了 9 种一般图的布局和 4 种树图的布局：
**一般图：**

- Random Layout：随机布局；

- **Force Layout：经典力导向布局：**

  > 力导向布局：一个布局网络中，粒子与粒子之间具有引力和斥力，从初始的随机无序的布局不断演变，逐渐趋于平衡稳定的布局方式称之为力导向布局。适用于描述事物间关系，比如人物关系、计算机网络关系等。

- Circular Layout：环形布局；

- Radial Layout：辐射状布局；

- MDS Layout：高维数据降维算法布局；

- Fruchterman Layout：Fruchterman 布局，一种力导布局；

- Dagre Layout：层次布局；

- Concentric Layout：同心圆布局，将重要（默认以度数为度量）的节点放置在布局中心；

- Grid Layout：格子布局，将节点有序（默认是数据顺序）排列在格子上。

**树图布局：**

- Dendrogram Layout：树状布局（叶子节点布局对齐到同一层）；
- CompactBox Layout：紧凑树布局；
- Mindmap Layout：脑图布局；
- Indented Layout：缩进布局。

## 默认布局

当实例化图时没有配置布局时：

- 若数据中节点有位置信息（`x` 和 `y`），则按照数据的位置信息进行绘制；
- 若数据中节点没有位置信息，则默认使用 Random Layout 进行布局。

## 配置布局

在图实例化的时候，加上 layout 配置即可。

```
const graph = new G6.Graph({
  // ...                      // 其他配置项
  layout: {
    // Object，可选，布局的方法及其配置项，默认为 random 布局。
    type: 'force', // 指定为力导向布局
    preventOverlap: true, // 防止节点重叠
    linkDistance: 100, // 指定边距离为100
    // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
  },
});
```

节点按照力导向布局自动平衡。但是图中的节点过于拥挤，边上的文字信息被挤占，无法看清。我们希望布局计算边的距离可以更长一些。G6 的力导向布局提供了  `linkDistance` 属性用来指定布局的时候边的距离长度.

# 图的交互 Behavior

G6 **内置**了一系列交互行为，用户可以直接使用。简单地理解，就是可以一键开启这些交互行为：

- `drag-canvas`：拖拽画布；
- `zoom-canvas`：缩放画布。

```
const graph = new G6.Graph({
  // ...                                          // 其他配置项
  modes: {
    default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
    edit: [] // 编辑模式不允许
  },
});
```

### Hover、Click 改变样式——状态式交互

是否 `hover` 、`click` 、任何操作（可以是自己起的状态名），都可以称为一种状态（state）。用户可以自由设置不同状态下的元素样式。要达到交互更改元素样式，需要两步：

- Step 1: 设置各状态下的元素样式；

  通过 `nodeStateStyles` 和 `edgeStateStyles` 两个配置项可以配置元素在不同状态下的样式。

  ```
  const graph = new G6.Graph({
    // ...                           // 其他配置项
    // 节点不同状态下的样式集合
    nodeStateStyles: {
      // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
      hover: {
        fill: 'lightsteelblue',
      },
      // 鼠标点击节点，即 click 状态为 true 时的样式
      click: {
        stroke: '#000',
        lineWidth: 3,
      },
    },
    // 边不同状态下的样式集合
    edgeStateStyles: {
      // 鼠标点击边，即 click 状态为 true 时的样式
      click: {
        stroke: 'steelblue',
      },
    },
  });
  ```

  

- Step 2: 监听事件并切换元素状态。

  `graph.on()`  函数监听了某元素类型（`node` / `edge`）的某种事件

  ```
  // 在图实例 graph 上监听
  graph.on('元素类型:事件名', (e) => {
    // do something
  });
  ```

  在监听函数里使用 `graph.setItemState()` 改变元素的状态:

  ```
  // 鼠标进入节点
  graph.on('node:mouseenter', (e) => {
    const nodeItem = e.item; // 获取鼠标进入的节点元素对象
    graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
  });
  
  // 鼠标离开节点
  graph.on('node:mouseleave', (e) => {
    const nodeItem = e.item; // 获取鼠标离开的节点元素对象
    graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
  });
  
  // 点击节点
  graph.on('node:click', (e) => {
    // 先将所有当前是 click 状态的节点置为非 click 状态
    const clickNodes = graph.findAllByState('node', 'click');
    clickNodes.forEach((cn) => {
      graph.setItemState(cn, 'click', false);
    });
    const nodeItem = e.item; // 获取被点击的节点元素对象
    graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
  });
  
  // 点击边
  graph.on('edge:click', (e) => {
    // 先将所有当前是 click 状态的边置为非 click 状态
    const clickEdges = graph.findAllByState('edge', 'click');
    clickEdges.forEach((ce) => {
      graph.setItemState(ce, 'click', false);
    });
    const edgeItem = e.item; // 获取被点击的边元素对象
    graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
  });
  ```

# 插件与工具

为辅助用户在图上探索，G6 提供了一些辅助工具，其中一部分是插件工具，另一部分是交互工具。

## 插件

使用插件时，有三个步骤：
  Step 1: 引入插件；
  Step 2: 实例化插件；
  Step 3: 在实例化图时将插件的实例配置到图上。

### Minimap

缩略图 (Minimap) 是一种常见的用于快速预览和探索图的工具，可作为导航辅助用户探索大规模图。

```
// 实例化 minimap 插件
const minimap = new G6.Minimap({
  size: [100, 100],
  className: 'minimap',
  type: 'delegate',
});

// 实例化图
const graph = new G6.Graph({
  // ...                           // 其他配置项
  plugins: [minimap], // 将 minimap 实例配置到图上
});
```

### Image Minimap

由于 [Minimap](https://g6.antv.vision/zh/docs/manual/tutorial/plugins#minimap) 的原理是将主画布内容复制到 minimap 的画布上，在大数据量下可能会造成双倍的绘制效率成本。为缓解该问题，Image Minimap 采用另一种机制，根据提供的图片地址或 base64 字符串 `graphImg` 绘制 `<img />` 代替 minimap 上的 canvas。该方法可以大大减轻两倍 canvas 绘制的压力。但 `graphImg` 完全交由 G6 的用户控制，需要注意主画布更新时需要使用 `updateGraphImg` 方法替换 `graphImg`。

### Grid 网格

网格可用于辅助用户在拖拽节点时对齐到网格。

## 交互工具

交互工具是指配置到图上交互模式中的工具。使用交互工具时，有两个步骤：
  Step 1: 在实例化图时配置 `modes`；
  Step 2: 为交互工具定义样式。

### tooltip 节点提示框

节点提示框可以用在边的详细信息的展示。当鼠标滑过节点时，显示一个浮层告知节点的详细信息。

```
const graph = new G6.Graph({
  modes: {
    default: [
      // ...
      {
        type: 'tooltip', // 提示框
        formatText(model) {
          // 提示框文本内容
          const text = 'label: ' + model.label + '<br/> class: ' + model.class;
          return text;
        },
      },
    ],
  },
});
```

### edge-tooltip 边提示框

边提示框可以用在边的详细信息的展示。当鼠标滑过边时，显示一个浮层告知边的详细信息。