// CODE HERE
function createElement(tag, block, content, attributes){
    if(block === 1) {
        if(attributes !== '') {
            tag += " " + attributes;
        }
        return `<${tag}>${content}</${tag}>`;
    } else {
        return `</${tag}>`;
    }
}

function placeElements(){
    let b1 = createElement('button', 1, "Iniciar partida", 'id="but1" class="pad"');
    let b2 = createElement('button', 1, "Analizar partida", 'id="but2" class="pad"');
    let b3 = createElement('button', 1, "Reglas", 'id="but3" class="pad"');
    let b4 = createElement('button', 1, "Opciones", 'id="but4" class="pad"');
    let b5 = createElement('button', 1, "Ayuda", 'id="but5" class="pad"');
    document.getElementById("d1").innerHTML = b1;
    document.getElementById("d2").innerHTML = b2;
    document.getElementById("d3").innerHTML = b3;
    document.getElementById("d4").innerHTML = b4;
    document.getElementById("d5").innerHTML = b5;
}