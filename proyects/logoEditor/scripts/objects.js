// Objects...

let circleBox = {type: 'circle', origin: [0, 0], width: 512, height: 512}
		let squareBox = {type: 'square', origin: [0, 0], width: 512, height: 512}
		let rectBox = {type: 'rectangle', origin: [0, 0], width: 1024, height: 256}
		
		let wall = {
			context: ctx,
			colors: ['#FF55C1', '#f56fff', '#f23700'], // Original array: ['#FFB6C1', '#ffffff', '#ffd700']
			draw: function(x, y, width, height) {
				this.context.save()
				this.context.beginPath()
				this.drawDottedWall(x, y, width, height)
				this.drawLinedWall(x+5, y+5+(height-(height*40/100)), width, (height*40/100))
				this.context.closePath()
				this.context.restore()
			},
			drawDottedWall: function(x, y, width, height) {
				this.context.save()
				this.fillWall(x, y, width, height, this.colors[0])
				// Draw a dots line set
				x = 0
				y = 5
				altura = 15
				longitud = 30
				for (let i = 0; y < height; y += altura) {
					// Draw a dots line
					x = (i++ % 2 === 0) ? longitud : longitud / 2
					longitud = 30
					this.drawDottedLine(x, y, width, longitud)
				}
				this.context.restore()
			},
			drawLinedWall: function(x, y, width, height) {
				this.context.save()
				// Set context values
				this.context.fillStyle = this.colors[1]// Originally: '#ffffff'
				this.context.strokeStyle = this.colors[2]// Originally: '#ffd700'
				this.context.lineWidth = 10
				
				// Fill the background
				this.context.fillRect(x, y, width, height)
				  
				// Draw band horizontal
				this.context.beginPath()
				this.context.moveTo(x, y)
				this.context.lineTo(x+width, y)
				this.context.stroke()
				  
				// Draw vertical lines
				var lx = x + 5
				this.context.lineWidth = 3
				var longitud = 18
				for (; lx < width; lx += longitud) {
					this.context.moveTo(lx, y)
					this.context.lineTo(lx, y+height)
				}
				this.context.stroke()
				this.context.restore()
			},
			drawDottedLine: function(x, y, width, lineLength) {
				for (; x < width; x += lineLength) {
					this.drawDot(x, y, this.colors[1])
				}
			},
			fillWall: function(x, y, width, height, color) {
				this.context.save()
				// Fill wall on pink
				this.context.rect(x, y, x+width, y+height)
				this.context.fillStyle = color
				this.context.fill()
				this.context.restore()
			},
			drawDot: function(x, y, color) {
				this.context.save()
				// Draw a dot
				this.context.beginPath()
				this.context.arc(x, y, 2, 0, 2 * Math.PI)
				this.context.fillStyle = color
				this.context.fill()
				this.context.restore()
			}
		}
		
		let dimRef = {
			lineWidth: 15,
			fillStyle: whiteColor,
			strokeStyle: goldColor}
