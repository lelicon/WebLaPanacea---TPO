const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      const subMenu = this.nextElementSibling;
      const height = subMenu.scrollHeight;

      if (subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
      } else {
        subMenu.classList.add("desplegar");
        subMenu.style.height = height + "px";
      }
    }
  });
}

let inputs = document.getElementsByClassName("formulario__input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario() {
  alert("Su consulta está siendo enviada");

  var mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("Ingresa tu nombre");
  }

  if (apellido.value === null || apellido.value === "") {
    mensajesError.push("Ingresa tu apellido");
  }

  if (telefono.value === null || telefono.value === "") {
    mensajesError.push("Ingresa un número de teléfono de contacto");
  }
  if (email.value === null || email.value === "") {
    mensajesError.push("Ingresa una dirección de correo válida");
  }

  error.innerHTML = mensajesError.join(",");

  formulario.reset();

  return false;
}
