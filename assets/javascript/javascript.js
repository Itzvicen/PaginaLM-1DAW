let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
     if(menuVisible){
          document.getElementById("nav").classList ="";
          menuVisible = false;
     } else {
          document.getElementById("nav").classList ="responsive";
          menuVisible = true;
     }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
     document.getElementById("nav").classList = "";
     menuVisible = false;
}

// Cambiar color de fondo de la navbar al hacer scroll
// Agrega un manejador de eventos para el evento scroll
window.addEventListener('scroll', function() {
     // Comprueba si se ha hecho scroll en la página
     if (window.scrollY >= 20) {
    // Si se ha hecho scroll, agrega la clase de CSS que cambia el color de fondo a la navbar
     document.getElementById("home").classList ="contenedor-header bg-black";
     } else {
    // Si no se ha hecho scroll, elimina la clase de CSS que cambia el color de fondo de la navbar
     document.getElementById("home").classList ="contenedor-header";
     }
});
