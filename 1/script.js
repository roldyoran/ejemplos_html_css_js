// Seleccionamos los elementos HTML donde se mostrará el contador
const counterElement = document.getElementById('counter');

// Seleccionamos los botones de incremento y decremento
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');

// Inicializamos el valor del contador a 0
let counterValue = 0;

// Función para actualizar la visualización del contador en la página
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Evento para incrementar el valor del contador cuando se hace clic en el botón "Incrementar"
incrementButton.addEventListener('click', function() {
    counterValue++; // Incrementamos el valor del contador
    updateCounter(); // Actualizamos la visualización
});

// Evento para decrementar el valor del contador cuando se hace clic en el botón "Decrementar"
decrementButton.addEventListener('click', function() {
    counterValue--; // Decrementamos el valor del contador
    updateCounter(); // Actualizamos la visualización
});
