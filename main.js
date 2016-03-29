(function () {

	var resultado = document.querySelector("#resultado"),
	baseOfNumber = document.querySelector("#baseOfNumber"),
	baseToTransform = document.querySelector("#baseToTransform"),
	input = document.querySelector('input#campoUno');

	document.addEventListener('DOMContentLoaded', init, false);

	function init () {
		input.addEventListener("keyup", calculate);

		baseOfNumber.addEventListener("change", calculate);
		
		baseToTransform.addEventListener("change", calculate);
	}

	function calculate () {
		var number = parseFloat(input.value);

		if (number === 0 || number) {
			if (input.value.indexOf(",") === -1) {
				resultado.innerHTML = "Cargando";
				
				if (baseOfNumber.value == 10) {
					var resultadoReal = decimalTo(number, baseToTransform.value);
					resultado.innerHTML = resultadoReal.toString();
				} else {
					if (baseToTransform.value == baseOfNumber.value) {
						resultado.innerHTML = input.value;
					} else if (baseToTransform.value != 10) {
						resultado.innerHTML = convertThroughDecima();
					} else {
						if (input.value.indexOf(".") === -1) {
							resultado.innerHTML = otherBaseToDecimal(input.value);
						} else {
							resultado.innerHTML = otherBaseToDecimal(input.value.replace('.', ''));
						}
					}
				}

			} else {
				resultado.innerHTML = "Por favor, reemplace la coma por un punto";
			}

		} else {
			resultado.innerHTML = "Ingrese un numero correcto";
		};
	}

	function decimalTo (number, base) {
		if (typeof(number) == "number") {
			return (number).toString(base);
		} else {
			resultado.innerHTML = "Ocurrió un error inesperado";
		};
	}

	function otherBaseToDecimal (string) {

		var flag = 0,
		plus,
		newString = 0;

		for (var i = string.length; i > 0; i--) {
			plus = (string[flag] * window.Math.pow(parseFloat(baseOfNumber.value),(i-1)));

			if (i === string.length) {
				newString = parseFloat(plus);
			} else {
				newString = parseFloat(newString) + parseFloat(plus);
			}

			flag++;				
		}

		return newString;
	}

	function convertThroughDecima () {
		var toDecimal;

		if (input.value.indexOf(".") === -1) {
			toDecimal = otherBaseToDecimal(input.value);
		} else {
			toDecimal = otherBaseToDecimal(input.value.replace('.', ''));
		}
		
		return decimalTo(toDecimal, baseToTransform.value);
	}

})();