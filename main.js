	document.addEventListener('DOMContentLoaded', init, false);

	var a = document.querySelector("#baseOfNumber"),
		b = document.querySelector("#baseToTransform");
	
	function init () {
		document.querySelector('input#campoUno').addEventListener("keyup", calculate);
		a.addEventListener("change", calculate);
		b.addEventListener("change", calculate);
	};

	function calculate () {
		var number = document.querySelector('input#campoUno').value;
		document.querySelector("#resultado").innerText = (a.value != 0) ? decimalTo(toDecimal(number, parseInt(a.value)), b.value) : decimalTo(number, b.value);
	};


	function decimalTo (numero, base){
		return parseFloat(numero).toString(parseInt(base)); 
	};


	function toDecimal (string, base) {
		var aux,
			newString = 0,
			decimalCharacters = 0;

		if (string.indexOf(".") !== -1)
			decimalCharacters = string.length - string.indexOf(".") - 1;
			
		string = string.replace('.', '').split("").reverse().join("");	//saco el punto e invierto la cadena

		for (var i = 0; i < string.length; i++) {
			aux = convertChartInNumer(string[i]) * window.Math.pow(parseFloat(base),(i-decimalCharacters));

			newString = (i === string.length) ? parseFloat(aux) : parseFloat(newString) + parseFloat(aux);
		};		

		return newString;
	};

	function convertChartInNumer (chart) {
		switch(chart) {
			case "a":
				return 10;
			break;
			case "b":
				return 11;
			break;
			case "c":
				return 12;
			break;
			case "d":
				return 13;
			break;
			case "e":
				return 14;
			break;
			case "f":
				return 15;
			break;
			default:
				return chart;
			break;
		}
	}