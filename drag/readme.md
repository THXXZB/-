- 命名空间 name space
    Phaser {}
    1. 申明领地
    取名字 var MIUI = {}
    MIUI.version = '10.2'
    MIUI.openSystem = function(){ }
    游戏框架 最小化入侵window，减少对全局命名空间的污染
    2. var Phaser = {} 挂载到window下 作用域 scope
    window =>
    3. es5 类构造 function(){}
    函数名首字母大写 类 构造函数
    方法 Phaser.Game.prototype.getName()