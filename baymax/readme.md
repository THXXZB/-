- 伪元素
    不用标签，在css中使用:before :after
    来声明，可以像真正的标签一样用
    在做分割线是， eg: >箭头 可不用标签，贼方便(#^.^#)
- :before
    位于元素内容开始之前，即在当前标签之内
- :after
    位于元素内容开始之后
- 两者皆需要设置content属性来设置伪元素的内容

- css3  带来炫酷
    radial(环形)/linear(线性)-gradient(渐变)(渐变的初始位置 circle at center(圆心),color stops... #fff 50%,)

- 相对单位
    em 相对于自身的字体大小

- 伪元素 天生的行内元素 display:inline，无法设置width*height,w和h由内容来设置
    可以改变为display:block; 或 position:absolute;

- 水平垂直居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); -->移动自身宽高的50%
