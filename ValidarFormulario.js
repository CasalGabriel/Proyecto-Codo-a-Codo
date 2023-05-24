function validarFormulario() {
    // Agarrar los valores ingresados
    // Saca los posibles espacios en blanco al principio y al final del nombre y el mail.
    var nombre = document.getElementById("nombre").value.trim();
    var mail = document.getElementById("email").value.trim();
    var mens = document.getElementById("mensaje");

    // Aseguremos primero que no halla nada sin completar
    if (nombre === "" || mail === "" || mens === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Verifica si el nombre posee solo letras y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }
    //Controlemos que sea un mail y no cualquier cosa
    if (mail.length < 12) {
        alert("El campo Email etá incompleto");
        return false;
      }
   // Si todo lo anterior es correcto, se envia el formulario
   alert("Formulario enviado correctamente.");
   return true;     
    }

