function fillWall(x, y, width, height, color) {
    // Fill wall on pink
    ctx.rect(x, y, x+width, y+height)
    ctx.fillStyle = color
    ctx.fill()
}

function drawDot(x, y, color) {
    // Draw a dot
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
}

// Draw a dotted-line
function drawDottedLine(x, y, width, lineLength) {
    for (; x < width; x += lineLength) {
        drawDot(x, y, '#ffffff')
    }
}

// Draw a dotted-wall
function drawDottedWall() {
    fillWall(0, 0, canvas.width, canvas.height, '#FFB6C1')
    // Draw a dots line set
    x = 0
    y = 5
    altura = 15
    longitud = 30
    for (let i = 0; y < canvas.height; y += altura) {
        // Draw a dots line
        x = (i++ % 2 === 0) ? longitud : longitud / 2
        longitud = 30
        drawDottedLine(x, y, canvas.width, longitud)
    }
}

function insertarImagen(imgSrc) {
var imagen = document.createElement('img')
imagen.setAttribute('src', imgSrc)
imagen.setAttribute('hidden', 'hidden')
document.body.appendChild(imagen)
return imagen
}

function drawLinedWall(x, y, width, height) {
  // Paint background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(x, y, width, height)
	
	// Stroke lines
  ctx.strokeStyle = '#ffd700'
  ctx.lineWidth = 10
  
  // Draw band horizontal
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x+width, y)
  ctx.stroke()
  
  // Draw vertical lines
  var lx = x + 5
  ctx.lineWidth = 3
  var longitud = 18
  for (; lx < width; lx += longitud) {
      ctx.moveTo(lx, y)
      ctx.lineTo(lx, y+height)
  }
  ctx.stroke()
}

		// Text fields for arguments pass
		function insertTextField(inputID, inputValue, nodeParent){
			let oLabel = document.createElement('label')
			oLabel.setAttribute('for', inputID)
			let oInput = document.createElement('input')
			oInput.setAttribute('id', inputID)
			oInput.setAttribute('type', 'text')
			oInput.setAttribute('value', inputValue)
			//oInput.setAttribute('name', inputName)
			
			nodeParent.appendChild(oLabel)
			nodeParent.appendChild(oInput)
			
			return [oLabel, oInput]
		}
		
function updateTextValues(t1, t2, t3) {
	textoA = t1.value
	textoB = t2.value
	textoC = t3.value
}

function updateColorValues(c1, c2) {
	wall.colors[0] = c1.value
	wall.colors[1] = c2.value
}