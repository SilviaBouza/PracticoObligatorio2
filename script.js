
function getMensaje() {
  const http = new XMLHttpRequest();

  // Maneja la respuesta
  http.onreadystatechange = () => {
      console.log("onreadystatechange");
      console.log(http.readyState);
      console.log(http.status);

      // Verifica si la solicitud está completa y fue exitosa
      if (http.readyState == 4 && http.status == 200) {
          // Mostrar la respuesta del servidor
          document.getElementById("mensaje").innerHTML = http.responseText;
      }
  };

  // Inicializar la solicitud con el método GET y la URL correcta del recurso
  http.open('GET','http://localhost/TrabajoPracticoModulo2Obligatorio/gracias.txt', true);
  // Enviar la solicitud al servidor
  http.send();
}

// Agregar evento al formulario para validar antes del envío
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto
  validarFormulario(); // llamar a la función de validación
});

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let tipoContacto = document.getElementById("tipoContacto").value;
  let asunto = document.getElementById("asunto").value;
  let descripcion = document.getElementById("descripcion").value;

  let valid = true; // variable para indicar si el formulario es válido

  // Validar que el nombre no esté vacío
  if (nombre === "") {
      alert("El nombre es obligatorio");
      valid = false;
  }

  // Validar que el apellido no esté vacío
  if (apellido === "") {
      alert("El apellido es obligatorio");
      valid = false;
  }

  // Validar que el email no esté vacío
  if (email === "") {
      alert("El email es obligatorio");
      valid = false;
  }

  // Validar que el tipo de contacto esté seleccionado
  if (tipoContacto === "") {
      alert("Seleccione un tipo de contacto");
      valid = false;
  }

  // Validar que el asunto no esté vacío
  if (asunto === "") {
      alert("El asunto es obligatorio");
      valid = false;
  }

  // Validar que la descripción no esté vacía
  if (descripcion === "") {
      alert("La descripción es obligatoria");
      valid = false;
  }

  // Mostrar mensaje si el formulario es válido
  if (valid) {
      alert("Formulario enviado con éxito");
      getMensaje(); // Hacer la solicitud AJAX para leer el archivo gracias.txt
  } else {
      alert("Por favor, corrige los errores en el formulario");
  }
}

