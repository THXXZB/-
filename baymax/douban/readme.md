- html5 语义化
- 良好的html结构
- 取名
- 复用

- 路径
    ../ 上一级目录
    ./ 相对路径
    / 绝对路径（web server（当前开启的端口）的绝对路径）
- 前端词汇量
    page 整个页面容器
    header 头部
    content 中间内容
    footer 尾部

- 经典结构 h5语义化标签
    header + content + footer

- 手机-->弹性布局纵轴+flex:1
    header 和 footer 固定 ，main 可滚动
    1. 给header和footer固定高度
    2. page采用弹性布局,方向flex-direction
    3. main设置flex:1;(除去其他子元素必备的空间，剩余空间给予该子元素)
- 代码优化-->不重复代码
- 多种设备到底以哪个为设计标准
    设计稿(PSD)
    750px(显示) 375px(物理) retina屏
    需求：400px  规定：200/375*414px  一般操作：200/375*100 % （保留小数点后5位）

- 用户体验 max-width + margin:auto 
    移动设备s到ipad，PC的扩展 --> 碎片化的终端
    max-width: 650px;
    margin: 0 auto;
    当屏幕宽度大于650时，左右居中
- 移动端水平禁用滚动条
    overflow-x: hidden;
    水平方向上超出部分隐藏，避免出现左右滚动条
- 移动端垂直方向
    -webkit-overflow-scrolling: touch; (-webkit:浏览器前缀)
    -webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.
    auto: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。
    touch: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。

    在移动端上，在你用overflow-y:scorll属性的时候，你会发现滚动的效果很木，很慢，这时候可以使用-webkit-overflow-scrolling:touch这个属性，让滚动条产生滚动回弹的效果，就像ios原生的滚动条一样流畅。
- 手机端都是webkit safari android chrome
- height: 35px;
    手机端搜索栏高度一般为35px;
- input
    手指交互 35+ px
    border 0px border太丑了
    输入不顶格 text-indent
    search 文本居中
    图标用背景做 url base64 no-repeat 15px #3f3f3f
    background-size
- -webkit-tap-highlight-color: transparent;
    这个属性只用于iOS (iPhone和iPad)。
    当你点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景
