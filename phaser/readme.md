- callback 回调
    addEventListner(event_type, callvack);
    事件监听定义时，回调函数不执行
    事件触发时将定义的回调函数拿回来执行 --> 异步

- fs 文件模块
    异步是需要花时间的，注册行为，callback

- 操作系统
    I/O操作：input/output
    CPU(运算和指令集)内存
    异步回调 典型的慢操作需要花时间
    fs.readFile(Path, 'utf8', callback)
    