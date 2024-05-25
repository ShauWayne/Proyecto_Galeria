document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario para que no recargue la página

        // Validar el formulario (opcional)
        const isValid = form.checkValidity();
        if (isValid) {
            // Mostrar el mensaje de agradecimiento
            thankYouMessage.style.display = 'block';
            
            // Opcional: limpiar el formulario
            form.reset();
        } else {
            // Si el formulario no es válido, muestra los mensajes de validación de HTML5
            form.reportValidity();
        }
    });
});
