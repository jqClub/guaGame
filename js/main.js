//這里写的是一个paddle的类
var Paddle = function() {
	//這里是画图的地址信息
	var image = imageFrompath('paddle.png')
	var o = {
		image: image,
		x: 100,
		y: 200,
		speed: 10,
	}
	//新增2个paddle的方法
	o.moveLeft = function() {
		this.x += this.speed
	}
	o.moveRight = function() {
		this.x -= this.speed
	}
	return o
}

//入口函数
var __main = function() {
	var paddle = Paddle()
	
	var canvas = e('#id-canvas')
	var context = canvas.getContext('2d')
	log('canvas画布', canvas)
	
//	var x = 100
//	var y = 150
	
	var x = paddle.x
	var y = paddle.y
	
	//先画上一张图片
//	var img = new Image()
//	img.src = 'img/paddle.png'
//	img.onload = function() {
//		context.drawImage(paddle.image, paddle.x, paddle.y)
//	}
	
	
//监听按键的改变
	var leftDown = false
	var rightDown = false
//	按钮按下
	document.addEventListener('keydown', function(event) {
		log('按钮按下')
		log('event', event)
		var key = event.key
		//再去重新画图
		if(key == 'a') {
			leftDown = true
//			x -= 10
//			drawImg(false)
		} else if(key == 'd'){
			rightDown = true
//			x += 10
//			drawImg(true)
		}
		
	})
	
	//定时器去更新数据
	setInterval(function() {
		//更新x,y的值
		if(leftDown) {
			paddle.moveLeft()
//			paddle.x += paddle.speed
		} else if(rightDown) {
			paddle.moveRight()
//			paddle.x -= paddle.speed
		}
//		log(x)
		//先清空
		context.clearRect(0, 0, canvas.width, canvas.height) 
		//再重新画挡板
		context.drawImage(paddle.image, paddle.x, paddle.y)
	}, 1000/30)
	
//	按钮按下
	document.addEventListener('keyup', function(event) {
		log('按钮按下')
		log('event', event)
		var key = event.key
		//再去重新画图
		if(key == 'a') {
			leftDown = false
		} else if(key == 'd'){
			rightDown = false
		}
		
	})
}
__main()

