// declaracion de variables Inciales
var texto_entrada = document.getElementById("text-encrypt");
var btn_encriptar = document.querySelector(".btn-encriptar");
var btn_desencriptar = document.querySelector(".btn-desencriptar");
var img = document.querySelector(".logo-second");
var section_traduct = document.querySelector(".section-button");
var section_result = document.querySelector(".section-result");
var output = document.querySelector(".texto-traduct");

// valores
let values_encriptar = ["ai", "enter", "imes", "ober", "ufat"];
let keys_desencriptar = ["a", "e", "i", "o", "u"];

// Mapa de desencriptación
let mapaDesencriptacion = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
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

// funcion para ver sections
function mostrarEncriptacion() {
  //variables
  section_traduct.classList.remove("ocultar");
  section_result.classList.add("ocultar");
  console.log(section_result);
}

// funcion de encriptacion normal pero lenta
function encriptacion(evt) {
  // quitar recarga de pagina por el evento de click
  evt.preventDefault();
  //   obtener el texto
  var texto = texto_entrada.value;
  //   inicializar variables y values a encriptar
  var cadena = "";

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
    mostrarEncriptacion();
    output.textContent = cadena;
  } else {
    alert("Por favor ingresa un texto para encriptar");
  }
}

// funcion de desenciptacion rapida
function desencriptar(evnt) {
  evnt.preventDefault();
  var texto = texto_entrada.value;
  let patrones = new RegExp(values_encriptar.join("|"), "g");
  function des(texto) {
    return texto.replace(patrones, function (coin) {
      return mapaDesencriptacion[coin];
    });
  }
  output.textContent = des(texto);
}

function copiar_texto() {
  var texto = output.textContent;
  navigator.clipboard.writeText(texto).then(
    function () {
      alert("Texto copiado");
    },
    function (err) {
      // Error
      console.error("Error al copiar el texto: ", err);
    }
  );
}
