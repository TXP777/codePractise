function debounce(fn,delay){
    var timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this);
        },delay)
    }
}