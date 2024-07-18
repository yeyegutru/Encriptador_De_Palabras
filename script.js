// declaracion de variables Inciales
var texto_entrada = document.getElementById("text-encrypt");
var btn_encriptar = document.querySelector(".btn-encriptar");
var btn_desencriptar = document.querySelector(".btn-desencriptar");
var img = document.querySelector(".logo-second");
var output = document.getElementById("p_output");

// valores 
let values_encriptar = ["ai", "enter", "imes", "ober", "ufat"];
let keys_desencriptar = ["a", "e", "i", "o", "u"];


// Mapa de desencriptación
let mapaDesencriptacion = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

// funcion para solo letras minusculas y sin acento
function checkearText(evt) {
  var charCode = evt.charCode;
  console.log(charCode);
  if (charCode != 0) {
    if (
      charCode != 32 &&
      charCode != 241 &&
      (charCode < 97 || charCode > 122)
    ) {
      console.log(charCode);
      evt.preventDefault();
      alert("Por favor usa sólo letras minúsculas y sin acentos.");
    }
  }
}


// funcion de encriptacion
function encriptacion(evt) {
  // quitar recarga de pagina por el evento de click
  evt.preventDefault();
  //   obtener el texto
  var texto = texto_entrada.value;
  //   inicializar variables y values a encriptar
  let cadena = "";
  
  if (texto.trim().length != 0) {
    for (var i = 0; i < texto.length; i++) {
      switch (texto.charAt(i)) {
        case "a":
          cadena += values_encriptar[0];
          break;
        case "e":
          cadena += values_encriptar[1];
          break;
        case "i":
          cadena += values_encriptar[2];
          break;
        case "o":
          cadena += values_encriptar[3];
          break;
        case "o":
          cadena += values_encriptar[4];
          break;
        default:
          cadena += texto.charAt(i);
      }
    }
    console.log(cadena);
  }else{
    alert("Por favor ingresa un texto para encriptar")
  }
}

function desencriptar(evnt){
    evnt.preventDefault();
    var texto = texto_entrada.value;
    let patrones = new RegExp(values_encriptar.join('|'),'g');
    console.log(des(texto))
    function des (texto){
        return texto.replace(patrones, function(coin){
            return mapaDesencriptacion[coin];
        })
    }
    
}