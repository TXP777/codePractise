function throttle(fn,delay){
    //记录上一次函数触发的时间
    var lastTime = 0;
    return function(){
        var nowTime = Date.now();
        if(nowTime-latsTime>delay){
            fn.call(this);
            lastTime=nowTime;
        }
    }

}