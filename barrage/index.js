// time:弹幕出现等待时间，speed：弹幕显示速度，color:弹幕字体颜色
let data = [
    {value:'周杰伦！！！，w(ﾟДﾟ)w',time: 5,color:'#f40',speed:2,fontSize:22},
    {value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 2, fontSize: 30},
    {value: '，晚点再恋爱吧！爱呢？', time: 6},
    {value: '听妈妈的话吧，晚点再恋爱吧！啦啦啦(～￣▽￣)～', time: 8},
    {value: '\(^o^)/~，晚点再恋爱吧！爱呢？', time: 15},
    {value: '听妈妈的话吧，晚点再恋爱吧！(#^.^#)', time: 35},
    {value: '(*^▽^*)，晚点再恋爱吧！爱呢？', time: 20},
    {value: '听妈妈的话吧，晚点再恋爱吧！O(∩_∩)O哈哈~', time: 18},
    {value: '_(¦3」∠)_，晚点再恋爱吧！爱呢？', time: 10} 
]

// 获取所需用到的所有dom结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建CanvasBarrage类
class CanvasBarrage {
// constructor是一种用于创建和初始化class创建的对象的特殊方法
    constructor(canvas, video, opts = {}){ //opts={} 如果未传第三个参数也不会保错，提高容错性

        // 若canvas和video都没有传，则直接return
        if(!canvas || !video){
            return;
        }

        // 已传参，直接挂载到this上
        this.video = video;
        this.canvas = canvas;
        // 设置canvas的宽高和video一致
        this.canvas.width = video.width;
        this.canvas.height = video.height;
        // 获取画布，操作画布
        this.ctx = canvas.getContext('2d');

        // 设置默认参数,如果没有传相关参数（颜色，字体，速度等），就使用默认参数
        let defOpts = {
            color:'#e91e63',
            speed:0.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }

        // 合并对象,opts:用户自行设置的相关弹幕参数
        //opts位于最后，会覆盖之前相同的属性
        Object.assign(this, defOpts, opts);

        // 添加一个属性来判断当前是否在播放
        this.isPaused = true; //默认处于暂停状态
        // 得到所有的弹幕消息,遍历
        this.barrages = this.data.map(item => new Barrage(item, this));
        // 渲染
        this.render();
    }

    // 渲染canvas绘制的弹幕
    render(){
        // 清除画布
        this.clear();
        // 渲染弹幕
        this.renderBarrage();
        // 如果未暂停则继续渲染，反之则不再渲染
        if(this.isPaused === false){
            // 通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this));
        }
    }
    // 清除整个画布
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderBarrage(){
        // 首先拿到当前视频播放的时间
        // 根据该时间来和弹幕要展示的时间作比较，以此判断是否展示弹幕
        let time = this.video.currentTime;

        // 遍历所有的弹幕，每个brrage都是一个实例
        this.barrages.forEach(barrage => {
            // 用一个flag来处理是否渲染，默认为false
            barrage.flag = false;
            if(!barrage.flag && time >= barrage.time){
                // 判断当前弹幕是否有过初始化
                // 如果isInit为false，那就对当前弹幕进行初始化操作
                if(!barrage.isInit){
                    barrage.init();
                    barrage.isInit = true;
                }
                // 弹幕要从右往左渲染，所有x的坐标减去当前弹幕的速度即可(持续往左移动)
                barrage.x -= barrage.speed;
                barrage.render(); //渲染当前弹幕

                // 如果当前弹幕x的坐标比自身的宽度的负值还小（即弹幕刚好完全走出屏幕时），就表示结束渲染
                if(barrage.x < -barrage.width){
                    barrage.flag = true;
                }

            }

        })
    }
    add(obj){
        // 实际上就是往barrages数组里面添加一项Barrage的实例
        this.barrages.push(new Barrage(obj, this));
    }
}

// 创建Barrage类，用来实例化每一个弹幕元素
class Barrage{
    constructor(obj, ctx){
        // 弹幕内容
        this.value = obj.value;
        // 弹幕时间
        this.time = obj.time;
        // 把obj和ctx挂载到this上，方便获取
        this.obj = obj;
        this.context = ctx;
    }
    //初始化弹幕
    init(){
        // 如果数据里没有涉及到下面四种参数，就直接取默认参数
        this.color = this.obj.color || this.context.color;
        this.speed = this.obj.speed || this.context.speed;
        this.opacity = this.obj.opacity || this.context.opacity;
        this.fontSize = this.obj.fontSize || this.context.fontSize;

        // 为了计算每一个弹幕的宽高，必须创建一个P标签，将当前弹幕内容装入p标签，然后计算文字的宽度
        let p = document.createElement('p');
        p.style.fontSize = this.fontSize + 'px';
        p.innerHTML = this.value;
        // 为拿到宽度调用clientWidth方法需把标签放入body中
        document.body.appendChild(p);

        // 获取弹幕的宽度
        this.width = p.clientWidth;
        // 把p标签从body中删除
        document.body.removeChild(p);

        // 设置弹幕出现的位置（弹幕应随机从屏幕右边的某个位置出现）
        this.x = this.context.canvas.width;
        this.y = this.context.canvas.height * Math.random();
        // 超出范围处理
        if (this.y < this.fontSize){    //出现的位置太低，挡住内容，
            //将出现位置调高
            this.y = this.fontSize;   
        }else if(this.y > this.context.canvas.height - this.fontSize){ //出现的位置太高了，挡住内容
            // 将出现位置调低
            this.y = this.context.canvas.height - this.fontSize;
        }


    } 

    // 渲染每一个弹幕
    render(){
        // 设置画布文字的字体和字号
        this.context.ctx.font = `${this.fontSize}px Arial`;
        // 设置画布的颜色
        this.context.ctx.fillStyle = this.color;
        // 绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y);
    }
}

// 创建CanvasBarrage实例
let canvasBarrage = new CanvasBarrage(canvas, video, {data});
// 设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => { // 点击播放
    canvasBarrage.isPaused = false;
    canvasBarrage.render() //触发弹幕
})

// 发送弹幕的方法
function send(){
    let value = $txt.value;
    // 获取当前视频时间
    let time = video.currentTime;
    // 获取颜色
    let color = $color.value;
    let fontSize = $range.value;
    let obj = {value, time, color, fontSize};

    // 添加弹幕数据
    canvasBarrage.add(obj);
    $txt.value = '';
}

$btn.addEventListener('click',send);
