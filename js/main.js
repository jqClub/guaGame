//這里写的是一个paddle的类
var Paddle = function() {
	//這里是画图的地址信息
	var image = imageFrompath('paddle.png')
	var o = {
		image: image,
		x: 100,
		y: 250,
		speed: 10,
	}
	
	var paddle = o
	
	//新增2个paddle的方法
	o.moveLeft = function() {
		paddle.x += paddle.speed
	}
	o.moveRight = function() {
		paddle.x -= paddle.speed
	}
//	o.draw = function(context) {
//		context.drawImage(this.image, this.x, this.y)
//	}


	
	o.collide = function(ball) {
		if(ball.y + ball.image.height > o.y) {
			if(ball.x > o.x && ball.x < o.image.width + o.x) {
				return true
			}
		}
		return false
		
//		if(ball.x > o.x && ball.x < o.x + image.width) {
//			ball.speedX *= -1
//		}
//		if(ball.y > o.y && ball.y < o.y + image.height) {
//			ball.speedY *= -1
//		}
//		if(ball.y > o.y) {
//			ball.speedY *= -1
//		}
	}
	return o
}

//写一个对象
var GuaGame = function() {
	var that = this
	//把canvas和context，以及更新画布的方法拿出去
	var canvas = e('#id-canvas')
	var context = canvas.getContext('2d')
	
	var g = {
		canvas: canvas,
		context: context,
		actions: {},
		keydowns: {},
	}
	document.addEventListener('keydown', function(event) {
		log('按钮按下')
		log('event', event)
		var key = event.key
		g.keydowns[key] = true
	})
	document.addEventListener('keyup', function(event) {
		log('按钮按起')
		log('event', event)
		var key = event.key
		g.keydowns[key] = false
	})
	
	g.registerEvent = function(key, callBack) {
		g.actions[key] = callBack
	}
	
	//定时器去更新数据
	setInterval(function() {
		for(var key in g.actions) {
			if(g.keydowns[key]) {
				g.actions[key]()
			}
		}
		
		g.update()
		g.clear()
		g.draw()
//		//更新x,y的值
//		if(leftDown) {
//			paddle.moveLeft()
////			paddle.x += paddle.speed
//		} else if(rightDown) {
//			paddle.moveRight()
////			paddle.x -= paddle.speed
//		}
//		log(x)
		//先清空
//		context.clearRect(0, 0, canvas.width, canvas.height) 
//		//再重新画挡板
////		paddle.draw(context)
//		context.drawImage(paddle.image, paddle.x, paddle.y)
	}, 1000/30)
	
	g.drawImage = function(paddle) {
		g.context.drawImage(paddle.image, paddle.x, paddle.y)
	}
	return g
}


var Ball = function() {
	//這里是画图的地址信息
	var image = imageFrompath('ball.png')
	var o = {
		image: image,
		x: 0,
		y: 0,
		speedX: 10,
		speedY: 10,
		startBall: false,
	}
	o.move = function() {
		if(!o.startBall) {
			return
		}
		log('move')
		if(o.x < 0 || o.x > 400) {
			o.speedX *= -1
		}
		if(o.y < 0 || o.y > 300) {
			o.speedY *= -1
		}
		o.x += o.speedX
		o.y += o.speedY
	}
	o.start = function() {
		o.startBall = true
	}
	return o
}
	
//入口函数
var __main = function() {
	var paddle = Paddle()
	var guaGame = GuaGame()
	var ball = Ball()  //球的状态

//	var canvas = e('#id-canvas')
//	var context = canvas.getContext('2d')
//	log('canvas画布', canvas)
	var canvas = guaGame.canvas
	var context = guaGame.context
	
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
	
	
////监听按键的改变
	var leftDown = false
	var rightDown = false
	
	guaGame.registerEvent('a', function() {
//		log(11111111111111, guaGame)
		paddle.moveLeft()
	})
	guaGame.registerEvent('d', function() {
//		log(11111111111111, guaGame)
		paddle.moveRight()
	})
	
	guaGame.registerEvent('f', function() {
//		log(11111111111111, guaGame)
		ball.start()
	})
	
//	按钮按下
//	document.addEventListener('keydown', function(event) {
//		log('按钮按下')
//		log('event', event)
//		var key = event.key
//		//再去重新画图
//		if(key == 'a') {
//			leftDown = true
////			x -= 10
////			drawImg(false)
//		} else if(key == 'd'){
//			rightDown = true
////			x += 10
////			drawImg(true)
//		}
//	})

	guaGame.update = function() {
		//更新x,y的值
//		if(leftDown) {
//			paddle.moveLeft()
////			paddle.x += paddle.speed
//		} else if(rightDown) {
//			paddle.moveRight()
////			paddle.x -= paddle.speed
//		}
		ball.move()
		
		//判断相撞
//		paddle.collide(ball)
		if(paddle.collide(ball)) {
			log('相撞了')
			//相撞了
			ball.speedY *= -1
		}
	}


	guaGame.clear = function() {
		///先清空
		context.clearRect(0, 0, canvas.width, canvas.height) 
	}

	guaGame.draw = function() {
		///画布
//		context.drawImage(paddle.image, paddle.x, paddle.y)
		
		guaGame.drawImage(paddle)
		
		guaGame.drawImage(ball)
	}
	
	//定时器去更新数据
//	setInterval(function() {
//		//更新x,y的值
//		if(leftDown) {
//			paddle.moveLeft()
////			paddle.x += paddle.speed
//		} else if(rightDown) {
//			paddle.moveRight()
////			paddle.x -= paddle.speed
//		}
////		log(x)
//		//先清空
//		context.clearRect(0, 0, canvas.width, canvas.height) 
//		//再重新画挡板
//		paddle.draw(context)
////		context.drawImage(paddle.image, paddle.x, paddle.y)
//	}, 1000/30)
	
//	按钮按下
//	document.addEventListener('keyup', function(event) {
//		log('按钮按下')
//		log('event', event)
//		var key = event.key
//		//再去重新画图
//		if(key == 'a') {
//			leftDown = false
//		} else if(key == 'd'){
//			rightDown = false
//		}
//		
//	})
}
__main()

