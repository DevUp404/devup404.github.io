// Variables:
		
		class Pieza {
		constructor(nombre, id, imagen) {
			this.nombre = nombre;
			this.id = id;
			this.imagen = imagen + nombre + ".png";
		}
		
	}
	const directorioRaiz = "../media/chess/";
	let casillasBlancas = [61, 60, 62, 59, 58, 63, 64, 57, 49, 50, 51, 52, 53, 54, 55, 56];
	let casillasNegras = [5, 4, 3, 6, 2, 7, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16];
		
	const blancas = [
		new Pieza("rey-white", 1, directorioRaiz),
		new Pieza("reina-white", 2, directorioRaiz),
		new Pieza("alfil-white", 5, directorioRaiz),
		new Pieza("alfil-white", 7, directorioRaiz),
		new Pieza("caballo-white", 3, directorioRaiz),
		new Pieza("caballo-white", 6, directorioRaiz),
		new Pieza("torre-white", 4, directorioRaiz),
		new Pieza("torre-white", 8, directorioRaiz),
		new Pieza("peon-white", 9, directorioRaiz),
		new Pieza("peon-white", 10, directorioRaiz),
		new Pieza("peon-white", 11, directorioRaiz),
		new Pieza("peon-white", 12, directorioRaiz),
		new Pieza("peon-white", 13, directorioRaiz),
		new Pieza("peon-white", 14, directorioRaiz),
		new Pieza("peon-white", 15, directorioRaiz),
		new Pieza("peon-white", 16, directorioRaiz),
	];
		
	const negras = [
		new Pieza("rey-black", 17, directorioRaiz),
		new Pieza("reina-black", 18, directorioRaiz),
		new Pieza("alfil-black", 21, directorioRaiz),
		new Pieza("alfil-black", 23, directorioRaiz),
		new Pieza("caballo-black", 19, directorioRaiz),
		new Pieza("caballo-black", 22, directorioRaiz),
		new Pieza("torre-black", 20, directorioRaiz),
		new Pieza("torre-black", 24, directorioRaiz),
		new Pieza("peon-black", 25, directorioRaiz),
		new Pieza("peon-black", 26, directorioRaiz),
		new Pieza("peon-black", 27, directorioRaiz),
		new Pieza("peon-black", 28, directorioRaiz),
		new Pieza("peon-black", 29, directorioRaiz),
		new Pieza("peon-black", 30, directorioRaiz),
		new Pieza("peon-black", 31, directorioRaiz),
		new Pieza("peon-black", 32, directorioRaiz),
	];
	  
	  function addImg() {
			colocar(blancas, casillasBlancas);
			colocar(negras, casillasNegras);
		//document.getElementById("drag1").style.width = "25px";
		//document.getElementById("drag1").style.height = "25px";
	  }
		
		function colocar(piezas, casillas) {
			let temp;
			let drags = 'draggable=\"true\" ondragstart=\"drag(event)\"';
			let imgSize = 'width=\"60\" height=\"60\"';
			for (let i = 0; i < casillas.length; i++){
				let imgId = 'id="drag' + casillas[i] + '"';
				let imgSrc = 'src="' + piezas[i].imagen + '"';
				
				temp = document.getElementById("div" + casillas[i]);
				let tempId ="drag" + casillas[i];
				temp.innerHTML = "<img " + imgId + ' ' + imgSrc + ' ' + imgSize + ' ' + drags + '>';
			}
		}
	  
	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
	loadTable();
	addImg();
