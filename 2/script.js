// Seleccionamos los elementos HTML donde se mostrará el contador
const counterElement = document.getElementById('counter');

// Seleccionamos los botones de incremento, decremento y reset
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');
const resetButton = document.getElementById('resetBtn');

// Seleccionamos el campo de entrada del valor de incremento/decremento
const stepValueInput = document.getElementById('stepValue');

// Inicializamos el valor del contador a 0
let counterValue = 0;

// Función para actualizar la visualización del contador en la página
function updateCounter() {
    counterElement.textContent = counterValue;
    
    // Si el valor del contador llega a 10 o -10, mostrar una alerta
    if (counterValue >= 60) {
        alert('¡Has alcanzado el valor máximo de 60!');
    } else if (counterValue <= -60) {
        alert('¡Has alcanzado el valor mínimo de -60!');
    }
}

// Evento para incrementar el valor del contador según el valor del campo de entrada
incrementButton.addEventListener('click', function() {
    const stepValue = parseInt(stepValueInput.value); // Obtener el valor de incremento
    counterValue += stepValue; // Incrementamos el valor del contador
    updateCounter(); // Actualizamos la visualización
});

// Evento para decrementar el valor del contador según el valor del campo de entrada
decrementButton.addEventListener('click', function() {
    const stepValue = parseInt(stepValueInput.value); // Obtener el valor de decremento
    counterValue -= stepValue; // Decrementamos el valor del contador
    updateCounter(); // Actualizamos la visualización
});

// Nuevo: Evento para reiniciar el contador a 0
resetButton.addEventListener('click', function() {
    counterValue = 0; // Reiniciar el contador a 0
    updateCounter(); // Actualizamos la visualización
});
