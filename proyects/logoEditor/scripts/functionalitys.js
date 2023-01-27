/* Currently principal functions */

function downloadCanvas(name = 'canvasImage', extension = 'png') {
			var a = document.createElement('a');
			a.href = canvas.toDataURL('image/png');
			a.download = `${name}.${extension}`;
			document.body.appendChild(a);
			a.click();
		}
	
		function render(shape) {
			// Re-size canvas
			canvas.width = shape.width
			canvas.height = shape.height
			clearCanvas()
			drawLogo(ctx, shape, wall, imagen, dimRef)
		}
		
		//shape -> 1: circle.arc().background().insertLogo().writeText()
		function drawLogo(ctx, shape, background, image, dimRef) {
			clearCanvas()
			ctx.canvas.width = shape.width
			ctx.canvas.height = shape.height
			ctx.save() // Save the state of context render before to change it
			
			// Setting ctx values from dimRef
			//ctx.beginPath()
			ctx.lineWidth = dimRef.lineWidth
			ctx.fillStyle = dimRef.fillStyle
			ctx.strokeStyle = dimRef.strokeStyle
			
			ctx.font = "48px cursive";
			ctx.textAlign = 'center'
			
			if(shape.type === 'circle') {
				var radio = shape.width/2
				ctx.arc(shape.origin[0] + radio, shape.origin[1] + radio, radio, 0, Math.PI*2)
				ctx.clip()
				background.draw(shape.origin[0], shape.origin[1], shape.width, shape.width)
				ctx.beginPath()
				
				// Add image
				var rel = 2
				var x = shape.origin[0] + (shape.width / 2 - (image.width / rel) / 2)
				var y = shape.origin[0] + (shape.width / 2 - (image.height / rel) / 2)
				ctx.drawImage(image, x, y, image.width / rel, image.height / rel)
				
				// Add texto
				ctx.fillStyle = 'blue'
				x = shape.origin[0] + shape.width/2
				y = shape.origin[1] + shape.width/100* 15 // Proporcion
				ctx.fillText(textoA, x, y);
				ctx.fillText(textoB, x, shape.origin[1] + shape.width*0.9);
				
				ctx.beginPath()
				ctx.arc(shape.origin[0] + radio, shape.origin[1] + radio, radio-ctx.lineWidth/2, 0, Math.PI*2)
				ctx.stroke()
			} else if(shape.type === 'square') {
				ctx.rect(shape.origin[0], shape.origin[1], shape.width, shape.width)
				ctx.clip()
				
				background.draw(shape.origin[0], shape.origin[1], shape.width, shape.width)
				
				// Add image
				var rel = 2
				var x = shape.origin[0] + (shape.width / 2 - (image.width / rel) / 2)
				var y = shape.origin[0] + (shape.width / 2 - (image.height / rel) / 2)
				ctx.drawImage(image, x, y, image.width / rel, image.height / rel)
				
				// Add texto
				
				ctx.fillStyle = 'blue'
				x = shape.origin[0] + shape.width/2
				y = shape.origin[1] + shape.width/100* 15 // Proporcion
				ctx.fillText(textoA, x, y);
				ctx.fillText(textoB, x, shape.origin[1] + shape.width*0.9);
				
				ctx.beginPath()
				ctx.rect(shape.origin[0]+ctx.lineWidth/2, shape.origin[1]+ctx.lineWidth/2, shape.width-ctx.lineWidth, shape.width-ctx.lineWidth)
				ctx.stroke()
			} else if(shape.type === 'rectangle') {
				
				ctx.rect(shape.origin[0], shape.origin[1], shape.width, shape.height)
				ctx.clip()
				
				background.draw(shape.origin[0], shape.origin[1], shape.width, shape.height)
				
				// Add image
				var rel = 3.3
				var x = shape.origin[0] + (shape.width / 2 - (image.width / rel) / 2)
				var y = shape.origin[0] + (shape.height / 2 - (image.height / rel) / 2)
				ctx.drawImage(image, x, y, image.width / rel, image.height / rel)
				
				// Add texto
				ctx.font = "38px serif";
				ctx.fillStyle = 'blue'
				ctx.fillText(textoA, shape.origin[0] + shape.width/2 , shape.height - y/2);
				x = shape.origin[1] + shape.width/100* 20
				y = shape.origin[0] + shape.height/2 +20 // Proporcion
				ctx.fillText(textoC, x, y);
				ctx.fillText(textoB, shape.origin[1] + shape.width/100* 85 , y);
				
				
				ctx.beginPath()
				ctx.rect(shape.origin[0]+ctx.lineWidth/2, shape.origin[1]+ctx.lineWidth/2, shape.width-ctx.lineWidth, shape.height-ctx.lineWidth)
				ctx.stroke()
			} else {return null}
			ctx.closePath()
			ctx.restore()
		}
		
		function clearCanvas() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
		}
