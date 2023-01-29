/*
Colores comunes:
	- Contorno
	- Fondos
	- Textos
	- Más...
Otros:
	- Fuentes
	- Valores
	- Posiciones
	- Capas
	- Secuencia de dibujado (orden dinámico editable)
*/

// Elements declaration
let div = document.createElement('div')
let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')
let buttons = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')]

// Canvas setting
canvas.width = window.innerWidth - 30
canvas.height = window.innerHeight - 30
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

document.body.appendChild(document.createElement('hr'))
document.body.appendChild(document.createElement('br'))
let elementoVar = document.createElement('p')
elementoVar.innerHTML = 'Configuracion de parametros'
document.body.appendChild(elementoVar)
document.body.appendChild(document.createElement('br'))

var textNodeA = insertTextField('83', 'nombre', document.body)[1]
document.body.appendChild(document.createElement('br'))
var textNodeB = insertTextField('84', 'Leyenda...', document.body)[1]
document.body.appendChild(document.createElement('br'))
var textNodeC = insertTextField('85', '00-00-00', document.body)[1]
document.body.appendChild(document.createElement('br'))

// New button
buttons.push(document.createElement('button'))
buttons[buttons.length - 1].setAttribute('onclick', 'updateTextValues(textNodeA, textNodeB, textNodeC)')
buttons[buttons.length - 1].innerHTML = 'Actualizar valores'
document.body.appendChild(buttons[buttons.length - 1])

// To modify colors
document.body.appendChild(document.createElement('br'))
elementoVar = document.createElement('p')
elementoVar.innerHTML = 'Configuracion de parametros para colores'
document.body.appendChild(elementoVar)
document.body.appendChild(document.createElement('br'))

var colorNodeA = insertTextField('86', 'red', document.body)[1]
document.body.appendChild(document.createElement('br'))
var colorNodeB = insertTextField('87', '#fff', document.body)[1]
document.body.appendChild(document.createElement('br'))
// New button
buttons.push(document.createElement('button'))
buttons[buttons.length - 1].setAttribute('onclick', 'updateColorValues(colorNodeA, colorNodeB)')
buttons[buttons.length - 1].innerHTML = 'Actualizar colores'
document.body.appendChild(buttons[buttons.length - 1])