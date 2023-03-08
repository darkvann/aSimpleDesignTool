//使settimeout可以暂停
function MysetTimeout(callback, delay) {
    var setTimeoutId, start, remaining = delay;

    this.pause = function () {
        window.clearTimeout(setTimeoutId);
        remaining -= new Date() - start;
        // console.log("timer stop")
    };

    this.play = function () {
        start = new Date();
        window.clearTimeout(setTimeoutId);
        setTimeoutId = window.setTimeout(callback, remaining);
        // console.log("timer on")
    };

    this.play();
}

/*
        * 此函数用于获取devicePixelRatio（windows中决定图片中一个像素用几个物理像素来描述）
        * 以及context中的backingStroePixelRatio(context中决定用几个物理像素描述一个像素的变量)
        * 
        * param: context canvas.getContext("2d")返回的对象
        */
var getPixelRatio = function (context) {
    var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};

//将节点添加到指定兄弟节点的前方
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
