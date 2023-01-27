/* At this file are functions to be deprecated soon. */

// Draw circle logo * Lately, add parameters to custom logo: diametro, marcoWidth, imgSize, img
		function drawCircle(diametro, marcoWidth) {
			ctx.save()
			// Dibuja logo circular
			var x = 0
			var y = 0
			var radio = diametro/2
			ctx.beginPath()
			ctx.strokeStyle = goldColor
			ctx.lineWidth = marcoWidth
			ctx.arc(radio + x, radio + y, radio - ctx.lineWidth / 2, 0, 2 * Math.PI)
			ctx.stroke()
			ctx.clip()

			drawDottedWall()
			drawLinedWall(5, 5+(512-(512*40/100)), 512, (512*40/100))
			ctx.restore()
			ctx.beginPath()

			var rel = 2
			x = (512 / 2 - (imagen.width / rel) / 2)
			y = (512 / 2 - (imagen.height / rel) / 2)
			ctx.drawImage(imagen, x, y, imagen.width / rel, imagen.height / rel)

			ctx.beginPath()
			ctx.textAlign = 'center'
			ctx.font = '35px serif'
			ctx.fillText(textoC,256, 100)
			ctx.fillText(textoA, 256, 450)
		}
		
		function drawSquare() {
			clearCanvas()
			ctx.save()
			ctx.strokeStyle = goldColor
			ctx.lineWidth = 15
			let size = 512
			ctx.beginPath()
			ctx.rect(0, 0, size, size)
			ctx.stroke()
			ctx.clip()
			drawDottedWall()
			drawLinedWall(0, size - (size/100*40), size, size)
			
			ctx.rect(0, 0, size, size)
			ctx.stroke()
		}
		
		function drawRectangle() {alert('drawRectangle')}
