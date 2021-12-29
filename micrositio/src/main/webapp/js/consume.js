
$(document).ready(function() {
	console.log("ready!");
	const inicio = "/micrositio/index.html";

	readTextFile("js/textos.json", function(text) {
		var data = JSON.parse(text);
		console.log(data);
		datap = data;
		if (window.location.pathname === inicio) {
			$('#seccion').text(data["Variables"]["index"].seccion);
			$('#cuerpo').html(data["Variables"]["index"].cuerpo);
		}
		
	});



});
let datap = []
function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

