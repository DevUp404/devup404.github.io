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
		
		// Appending elements
		div.appendChild(canvas)
		document.body.appendChild(div)
		document.body.appendChild(document.createElement('hr'))
		document.body.appendChild(buttons[0])
		document.body.appendChild(buttons[1])
		document.body.appendChild(buttons[2])
		document.body.appendChild(buttons[3])
		// Colores:
		var goldColor = '#ffd700'
		var whiteColor = '#ffffff'
		var blackColor = '#000000'

		// Define logos
		var textoA = 'Azul'
		var textoB = '31-01-23'
		var textoC = 'Mi 1er añito'
