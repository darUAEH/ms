
$(document).ready(function() {
	console.log("ready!");
	const inicio = "/micrositio/index.html";
	const indice = "/micrositio/";
	const reflexion = "/micrositio/reflexion.html";

	readTextFile("js/textos.json", function(text) {
		var data = JSON.parse(text);
		console.log(data);
		datap = data;
	
		for(let i = 0; i < Object.keys(datap["menu_izq"]).length; i++)
		{
			let html= '<li><a href="'+data['menu_izq'][i].href+'">'+data['menu_izq'][i].texto+
            '<span class="'+data['menu_izq'][i].class0+'">'+
 			'	<i class="'+data['menu_izq'][i].class1+'"></i>'+	
 			'	<i class="'+data['menu_izq'][i].class2+'"></i> '+
 			'</span></a></li>'
			
			$('#menu_izq').append(html)
			
		}		
		if ((window.location.pathname === inicio)||(window.location.pathname === indice)) {
			(data["Variables"]["index"]["seccion"][0] ==="text") ? $('#seccion').text(data["Variables"]["index"]["seccion"][1]) : $("#seccion").load(data["Variables"]["index"]["seccion"][1]);     
			(data["Variables"]["index"]["cuerpo"][0] ==="text") ? $('#cuerpo').text(data["Variables"]["index"]["cuerpo"][1]) : $("#cuerpo").load(data["Variables"]["index"]["cuerpo"][1]);  
			
		}
		if (window.location.pathname === reflexion) {
			(data["Variables"]["reflexion"]["seccion"][0] ==="text") ? $('#seccion').text(data["Variables"]["reflexion"]["seccion"][1]) : $("#seccion").load(data["Variables"]["reflexion"]["seccion"][1]);     
			(data["Variables"]["reflexion"]["cuerpo"][0] ==="text") ? $('#cuerpo').text(data["Variables"]["reflexion"]["cuerpo"][1]) : $("#cuerpo").load(data["Variables"]["reflexion"]["cuerpo"][1]);  
			
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

