 // Función para validar el correo electrónico de SUSCRIBETE
 function validarEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Mensaje de aviso, en el caso de que el campo esté vacío.
document.querySelector('.close').addEventListener('click', function() {
    var emailField = document.getElementById('exampleFormControlInput1');
    if (emailField.value === '') {
        alert('No olvides suscribirte a nuestro newsletter!');
    }
});

// Mensaje de agradecimiento al enviar el correo
document.getElementById('sendEmailBtn').addEventListener('click', function() {
    var emailField = document.getElementById('exampleFormControlInput1');
    if (emailField.value === '') {
        alert('Por favor, ingresa tu correo electrónico.');
    } else if (!validarEmail(emailField.value)) {
        alert('Por favor, ingresa un correo electrónico válido.');
    } else {
        alert('Gracias por suscribirte!');
        $('#exampleModal').modal('hide'); // Cerrar el modal después de mostrar el mensaje de agradecimiento
    }
});

// Cambiar color de fondo de las tarjetas de productos al pasar el ratón
$('.card').hover(
    function() {
        $(this).css('background-color', '#f0f8ff');
    }, function() {
        $(this).css('background-color', 'white');
    }
);