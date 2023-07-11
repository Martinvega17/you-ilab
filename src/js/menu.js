/* document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu li');

    function toggleMenu() {
        if (window.innerWidth > 760) {
            menuButton.style.display = 'none';
            menu.classList.remove('open');
        } else {
            menuButton.style.display = 'block';
        }
    }

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('open');
        menu.classList.toggle('open');
    });

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuButton.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    toggleMenu(); // Llamada inicial para mostrar/ocultar el botón según el tamaño de la pantalla

    window.addEventListener('resize', function () {
        toggleMenu(); // Llamada en cada cambio de tamaño de la ventana para actualizar el estado del botón
    });
});




 */