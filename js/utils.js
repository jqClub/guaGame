var e = sel => document.querySelector(sel)
var log = console.log.bind(console)
//var log = function(s) {
//  e('#id-text-log').value += '\n' + s
//}

//创建一个图片地址
var imageFrompath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

//矩形相交的判断函数
var rectIntersects = function(o, b) {
    if(b.y > o.y && b.y < o.y + o.image.height) {
        if(b.x > o.x && b.x < o.x + o.image.width) {
            log('相撞')
            return true
        }
    }
    return false
}
