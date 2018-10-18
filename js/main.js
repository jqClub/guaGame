//入口函数
var __main = function() {
	var canvas = e('#id-canvas')
	var context = canvas.getContext('2d')
	log('canvas画布', canvas)
	
	//先画上一张图片
	var img = new Image()
	img.src = 'img/paddle.png'
	img.onload = function() {
		context.drawImage(img, 0, 0)
	}
	
	//监听按键的改变
//	按钮按下
	document.addEventListener('keydown', function(event) {
		log('event', event)
	})
	
//	按钮按起
	document.addEventListener('keyup', function(event) {
		log('event', event)
	})
}
__main()

