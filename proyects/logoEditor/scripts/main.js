// Elements declaration
		let div = document.createElement('div')
		let canvas = document.createElement('canvas')
		let ctx = canvas.getContext('2d')
		let buttons = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')]
		
		// Canvas setting
		canvas.width = window.innerWidth - 20
		canvas.height = window.innerHeight - 20
		canvas.style.backgroundColor = '#888'
		canvas.style.border = '1px solid black'
		
		// Buttons setting
		buttons[0].setAttribute('onclick', 'render(circleBox)')
		buttons[0].innerHTML = 'Draw circle'
		buttons[1].setAttribute('onclick', 'render(squareBox)')
		buttons[1].innerHTML = 'Draw square'
		buttons[2].setAttribute('onclick', 'render(rectBox)')
		buttons[2].innerHTML = 'Draw rectangle'
		buttons[3].setAttribute('onclick', `downloadCanvas('canvasImage', 'png')`)
		buttons[3].innerHTML = 'Download Image'

		// Appending elements
		div.appendChild(canvas)
		document.body.appendChild(div)
		document.body.appendChild(document.createElement('hr'))
		document.body.appendChild(buttons[0])
		document.body.appendChild(buttons[1])
		document.body.appendChild(buttons[2])
		document.body.appendChild(buttons[3])
		
		var imagen = insertarImagen('Prototipo-corona.png')

		// Colores:
		var goldColor = '#ffd700'
		var whiteColor = '#ffffff'
		var blackColor = '#000000'

		// Define logos
		var textoA = 'Azul'
		var textoB = '31-01-23'
		var textoC = 'Mi 1er añito'
