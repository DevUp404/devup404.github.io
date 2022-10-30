/*
 - This file will create a button pad.
 - It can define the buttons quantity and distribution, simply, the pad's form.
*/
let elementContainer = "div";
let buttonsBlock;// '<div id="buttonsBlock"></div>';

function createButton(descripcion, buttonId) {
	return `<button id="${buttonId}" class="pad">${descripcion}</button>`;
}

let buttons= [
	createButton("Iniciar la partida", "but1"),
	createButton("Analizar la partida", "but2"),
	createButton("Reglas del juego", "but3"),
	createButton("Configuración", "but4"),
	createButton("Ayuda", "but5")
];
let buttonsChain = buttons[0] + "</br>" + buttons[1] + "</br>" + buttons[2] + "</br>" + buttons[3] + buttons[4];

function getPad() {
	return buttonsBlock;//
}

function setPad(tag, id, elementClass) {
	buttonsBlock = `<${tag} id="${id}" class="${elementClass}">${buttonsChain}</${tag}>`;
}