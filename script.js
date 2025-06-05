
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multiple-text", {
    strings: ["Centro Integral de Acondicionamiento Físico"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});



function validar() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

  if (usuario === "Ana Marenco" && contraseña === "123") {
    window.location.href = "./index1.html";
    return false; //  evita el envío normal del formulario
  } else {
    alert("USUARIO O CONTRASEÑA INVÁLIDOS, INTENTE DE NUEVO");
    return false;
  }
}

function resultado() {
  let edad = parseInt(document.getElementById("edad").value);
  let actividad = parseInt(document.getElementById("actividad").value);
  let fisico = parseInt(document.getElementById("fisico").value);
  let resultadoElemento = document.getElementById("resultado");



  /*NIÑO*/


  if (edad === 1) {
    if (actividad === 1 && fisico === 1) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    }
    if (actividad === 1 && fisico === 2) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    }
    if (actividad === 1 && fisico === 3) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    } 
    
    if (actividad === 2) {
      resultadoElemento.textContent = "Te recomendamos: Natación";
    } else if (actividad === 3) {
      resultadoElemento.textContent = "Te recomendamos: Handball (CrossFit no disponible para niños)";
    } else {
      resultadoElemento.textContent = "Te recomendamos handball";
    }
  } 
  


   if (edad === 2) {
    if (actividad === 1 && fisico === 1) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    }
      if (actividad === 1 && fisico === 2) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    }
      if (actividad === 1 && fisico === 3) {
      resultadoElemento.textContent = "Te recomendamos: Handball y crossfit (+15)";
    }

if (actividad === 2 && fisico===1) {
      resultadoElemento.textContent = "Te recomendamos: Natación";
    }
    if (actividad === 2 && fisico===2) {
      resultadoElemento.textContent = "Te recomendamos: Natación";
    }
    if (actividad === 2 && fisico===3) {
      resultadoElemento.textContent = "Te recomendamos: Natación";
    }
    
 if (actividad === 3&& fisico===1) {
   resultadoElemento.textContent = "Te recomendamos: Handball";
 }
 if (actividad === 3&& fisico===2) {
    resultadoElemento.textContent = "Te recomendamos: CrossFit (+15)";
 }
  if (actividad === 3&& fisico===3) {
    resultadoElemento.textContent = "Te recomendamos: CrossFit (15)";
 }

  } 
  
  
  
  if (edad === 3) 
    if (actividad === 1) {
      resultadoElemento.textContent = "Te recomendamos: Handball";
    } else if (actividad === 2) {
      resultadoElemento.textContent = "Te recomendamos: Natación";
    } else if (actividad === 3) {
      if (fisico >= 1) {
        resultadoElemento.textContent = "Te recomendamos: CrossFit ";
    }
  }
}


      function calcularPrecio() {
      var personas = document.getElementById("personas").value;
      var meses = document.getElementById("meses").value;
      var deporte = document.getElementById("deporte").value;
      var resultado = document.getElementById("calcular");
    
      personas = parseInt(personas);
      meses = parseInt(meses);
      if (deporte === "crossfit") {
        var menores = confirm("¿Hay menores de 13 años en el grupo?");
        if (menores) {
          resultado.innerHTML = "CrossFit no está permitido para menores.";
          return;
        }
      }
      var precioPorPersona = 0;
      if (deporte === "handball") {
        precioPorPersona = 15000;
      } else if (deporte === "natacion") {
        precioPorPersona = 18000;
      } else if (deporte === "crossfit") {
        precioPorPersona = 21000;
      }
      var precioTotal = personas * precioPorPersona * meses;
      if (meses === 3) {
        precioTotal = precioTotal * 0.9; // 10% off
      } else if (meses === 6) {
        precioTotal = precioTotal * 0.8; // 20% off
      }
      resultado.innerHTML = "El total a pagar es: $" + precioTotal;
    }
    