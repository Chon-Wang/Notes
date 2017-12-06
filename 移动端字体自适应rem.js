    var des=640;//设计稿的宽度
    var winW=document.documentElement.clientWidth;//当前屏幕的宽度
    if(winW>640){//如果当前屏幕超级设计稿的宽度，则设置根元素的字体为14px
        document.documentElement.style.fontSize='14px'
    }
    document.documentElement.style.fontSize=winW/des*100+'px'//设置HTML根元素的字体大小