let docBody = document.getElementById("cuerpo");

function setSize(ancho, alto, elemento) {
	if(ancho != "KEEP") {
		elemento.style.width = ancho;
	}
	if(alto != "KEEP") {
		elemento.style.height = alto;
	}
}

function a() {
	let altura = window.innerHeight - 20;
//		alert(altura);
	let elemento = `<div id="divBox" class="box" style="height: ${altura}px;">Hola</div>`;
	docBody.innerHTML = elemento;
//		alert(window.innerHeight);
}

a();
let contenedor = document.getElementById("divBox");
setPad("div", "bPad", "box");
contenedor.innerHTML = getPad();
document.getElementById("bPad").class = "box";
setSize("40%", "KEEP", document.getElementById("bPad"));

//setSize("80%", "KEEP", document.getElementById("but1"));
//setSize("80%", "KEEP", document.getElementById("but2"));
//setSize("80%", "KEEP", document.getElementById("but3"));
setSize("50%", "KEEP", document.getElementById("but4"));
setSize("50%", "KEEP", document.getElementById("but5"));
//document.getElementById("but4").style.float = "left";
//document.getElementById("but5").style.float = "right";