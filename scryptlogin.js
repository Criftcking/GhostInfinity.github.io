function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value; // Corregido: Cambiado el nombre de la variable a "password"
    var messageElement = document.getElementById('message');

    if (username === 'us' && password === 'con') { // Corregido: Se utiliza "===" para comparar de manera estricta
        document.getElementById('message').innerHTML = '';
        alert('Inicio de sesión exitoso');
        return true;
    } else {
        document.getElementById('message').innerHTML = '⚠️Los datos son incorrectos. Por favor, inténtalo de nuevo';

        setTimeout(function() {
            fadeOut(messageElement);
        }, 2000);

        setTimeout(function() {
            location.reload();
        }, 4000);

        return false;
    }
}

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 100);
}




function redirect() {
    window.location.href = 'home.html';
}