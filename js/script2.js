var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

// Utilizar el valor del parámetro 'usuario' como desees
document.addEventListener('DOMContentLoaded', function () {
    if (username) {
        document.getElementById('welcome-message').textContent = '¡Bienvenid@, ' + username + '!';
    } else {
        document.getElementById('welcome-message').textContent = 'Usuario no especificado';
    }
});