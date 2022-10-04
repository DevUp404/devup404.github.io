function createDiv(numId) {
	var elId = "div" + numId;// ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"
	var styleAttrs = "background-color:transparent;width:60px;height:60px;";
	var attrList = setAttr("id", elId) + setAttr("style", styleAttrs) + setAttr("ondrop", "drop(event)") + setAttr("ondragover", "allowDrop(event)");
		return "<div" + attrList + "> </div>";
	}

function setAttr(field, value) {
		return " " + field + "= " + value;
	}

function createTD(numId, color) {
		return "<td" + setAttr("class", color) + ">" + createDiv(numId++) + "</td>";
	}

function createRow(colorA, colorB, numeroId) {
		// @numeroId = 1 - inicialmente. Luego: 9, 17, 25, 33, 41, 49, 57.
		var row = "<tr>";
		for (var i = 0; i < 8; i++) {
			if (i % 2 == 0) {
				row += createTD(numeroId, colorA);
			} else {
				row += createTD(numeroId, colorB);
			}
			numeroId++;
		}
		row += "</tr>";
		return row;
	}

function createRows() {
		var tableRows = ["1", "2", "3", "4", "5", "6", "7", "8"];
		var contador = 1;
        for(var i = 0; i < 8; i++) {
			if (i % 2 == 0) {
				tableRows[i] = createRow("white", "black", contador);
			} else {
				tableRows[i] = createRow("black", "white", contador);
			}
			contador += 8;
        }
        return tableRows;
      }

function loadTable() {
		var chessTable = document.getElementById("chessTab");
		var tablero = "";
		var tableRows = createRows();
		
		for (var i = 0; i < tableRows.length; i++) {
			tablero += tableRows[i];
		}
		chessTable.innerHTML = tablero;
		alert("Se ha construido el tablero");
	  }

// Draw table; Paint Table; Update.
