## emmet 快捷输入
vscode 来自微软，内置了emmet插件
- 使用css选择器来快速的语法
    1. 类名选择器 .className
    2. > 父子选择器
    3. + 兄弟选择器
    4. [] 属性选择器
    .starwars-demo>img*2[src="./images/"]

- 定位
    css 布局的一种
    position:absolute;
    position:relative;
    body是最顶层的相对定位
    父级或一直往外查找，若有定位的元素，相对最近的长辈元素定位，反之则为body

    m0:margin:0;
    p0:padding:0;
    bgc#000:background-color: #000000;
    w100p:width: 100%;
    t53p:top: 53%;
    l50p:left: 50%;
    t-0.5em:top: -0.75em;

    transform: translate(-50%,-50%);
    transform：变形
    translate(-50%,-50%)：移动(左移自身的一半，上移自身的一半)