const fs = require('fs');
// I/O 查找文件 --> 读入内存 --> 读操作（向控制台输出）
// callback(当前面两个步骤完成后才能输出-->异步) 匿名函数
fs.readFile('./inde.html', 'utf8', (err,data) => {
    // err不为空，出错
    // if(err){
    //     console.log(err);
    // }else{ //未出错
    //     console.log(data);
    // }

    // 出错不输出
    if(!err){
        console.log(data);
    }
})