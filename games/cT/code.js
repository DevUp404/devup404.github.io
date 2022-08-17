const letras = [
			'A', 'B', 'C', 'D', 'E', 
			'F', 'G', 'H', 'I', 'J', 
			'K', 'L', 'M', 'N', 'Ñ',
			'O', 'P', 'Q', 'R', 'S', 
			'T', 'U', 'V','W', 'X', 'Y', 'Z'
		];

function charSelector() {
  for(var i = 0; i < letras.length) {
    postMessage(letras[i]);
  }
  charSelector();
}
charSelector();
