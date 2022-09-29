/*
El programa analizará un string. Identificará fragmentos según un lenguaje parametrizado
y les dará una propiedad para que el editor que muestre el codigo resalte cada elemento
según su tipo(keyword, valor literal, comment, variable and methods names, code blocks).
*/
let lineas;

function getLineas(texto){
    let lineas = []; // ¿Como reconozco el salto de linea en la fuente @texto?
    return lineas;
}

function getValorLinea(indice) {
    return indice + 1;
}

// Primer proceso: lectura progresiva del texto{Objeto}. 
// Segundo proceso: tokenización del texto.

// Hallable: declaración clase, atributo, funcion;

// En la clase, se declara su accesibilidad y tipo, nombre y más. Al final de la 
// declaración se coloca el bloque o cuerpo de la clase()
// public class Nombre {}

/*
ENUNCIADO:
    De un texto, mostrar las palabras coloreadas según su tipo en el lenguaje
    especificado. El texto se mostrará en HTML y se creará un documento de 
    caracter universal, es decir, que sea util fuera del navegador e interpre-
    table por otros programas(como notepad u otro).

Analisis:
    Composicion del texto: tokens(palabras y espacios) y lineas.
    Lenguaje: 
        -keywords ─ public;
        -literales ─ "content";
        -comments ─ 
            // line comment
            / multi-line comments /;
        -lines ─ text until find and scape char;
        -statement ─ funcion functionName(parameterList){code}
        -blocks ─ Inicia con '{' y termina con '}'(cada bloque añade tabulacion a sus elementos).
    
*/