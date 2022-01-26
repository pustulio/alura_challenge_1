//Declaracion de variables
var message = document.querySelector("#messageEncrypt");
var btnEncrypt = document.querySelector("#submit");
var btnDecrypt = document.querySelector("#submitDecrypt");
var btnCopiar = document.querySelector("#submitCopy");
var mostrarFinal = document.querySelector("#message");


//Funciones 

//Funcion para encriptar el mensaje
function encryptMessage (letter) {
	if (letter == 'a') {
		letter = 'ai';
		return letter;
	} else if (letter == 'e') {
        letter = 'enter';
        return letter;
	} else if (letter == 'i') {
        letter = 'imes';
        return letter;
    } else if (letter == 'o') {
        letter = 'ober';
        return letter;
    } else if (letter == 'u') {
        letter = 'ufat';
        return letter;
    }
}


function encriptar(texto) {
	var msgEncriptado = texto.replace(/a|e|i|o|u/g, encryptMessage);
	return msgEncriptado;
}


//Funcion para descifrar el mensaje
function decryptMessage(letter) {
	if (letter == 'ai') {
		letter = 'a';
		return letter;
	} else if (letter == 'enter') {
		letter = 'e';
		return letter;
	} else if (letter == 'imes') {
		letter = 'i';
		return letter;
	} else if (letter == 'ober') {
		letter = 'o';
		return letter;
	} else if (letter == 'ufat') {
		letter = 'u';
		return letter;
	}
}

function desencriptar(texto) {
	var msgDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, decryptMessage);
	return msgDesencriptado;
}


function verification(texto) {
	var restriccion = /[^a-zñ\s]/g;
	if (restriccion.test(texto)) {
		alert("No se permiten mayúsculas, acentos ni caracteres especiales");
		return false;
	} else {
		return true;
	}
}


btnEncrypt.addEventListener('click',function (event) {
	event.preventDefault();
	var texto = message.value;
	var verificado = verification(texto);
	if (verificado == true) {
		var msgFinal = encriptar(texto);
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.value = "Favor de corregir."
	}
});


btnDecrypt.addEventListener('click', function (event) {
	event.preventDefault();
	var texto = message.value;
	var verificado = verification(texto);
	if (verificado == true) {
		var msgFinal = desencriptar(texto);
		mostrarFinal.style.color = "";
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.value = "Favor de corregir."	
	}
})


btnCopiar.addEventListener('click', function (event) {
	event.preventDefault();
	mostrarFinal.select();
	navigator.clipboard.writeText(mostrarFinal.value); 
	}
)
