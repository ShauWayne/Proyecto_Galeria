// validaciones.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        var emailField = document.getElementById('inputEmail');
        var phoneField = document.getElementById('phoneInput');
        var fullNameField = document.getElementById('fullName');
        var consultaField = document.getElementById('inputConsulta');

        var email = emailField.value;
        var phone = phoneField.value;
        var fullName = fullNameField.value;
        var consulta = consultaField.value;

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var phonePattern = /^[0-9]+$/;

        var isValid = true;

        // Validar el correo electrónico
        if (!emailPattern.test(email)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        } else {
            emailField.classList.remove('is-invalid');
        }

        // Validar el número de teléfono
        if (!phonePattern.test(phone)) {
            phoneField.classList.add('is-invalid');
            isValid = false;
        } else {
            phoneField.classList.remove('is-invalid');
        }

        // Validar el nombre completo
        if (fullName.trim() === "") {
            fullNameField.classList.add('is-invalid');
            isValid = false;
        } else {
            fullNameField.classList.remove('is-invalid');
        }

        // Validar la consulta
        if (consulta.trim() === "") {
            consultaField.classList.add('is-invalid');
            isValid = false;
        } else {
            consultaField.classList.remove('is-invalid');
        }

        // Si todas las validaciones pasan, mostrar mensaje de agradecimiento
        if (isValid) {
            document.getElementById('thankYouMessage').style.display = 'block';
            // Opcional: limpiar el formulario
            emailField.value = '';
            phoneField.value = '';
            fullNameField.value = '';
            consultaField.value = '';
        }
    });
});
