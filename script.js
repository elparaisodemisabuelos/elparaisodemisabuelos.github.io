
    
function iniciarAnimacion() {
    
    var contenido = document.querySelector('.landing-content');
    

    var alturaInicial = -800; 
    
    
    var alturaFinal = 1;
    
    
    contenido.style.transition = 'transform 0.6s ease-in-out';
    
  
    contenido.style.transform = 'translateY(' + alturaInicial + 'px)';
    
    
    setTimeout(function() {
        contenido.style.transform = 'translateY(' + alturaFinal + 'px)';
    }, 100); 
}


window.addEventListener('load', iniciarAnimacion);


//*Nosotros
document.addEventListener('DOMContentLoaded', function () {
    const contentLeftN = document.querySelector('.content-leftN');
    contentLeftN.classList.add('visible');
  });
  
  function mostrarElemento() {
    const contentLeftN = document.querySelector('.content-leftN');
    contentLeftN.classList.add('visible');
  }
  window.addEventListener('load', mostrarElemento);

  //Servicios 

  'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})



 

