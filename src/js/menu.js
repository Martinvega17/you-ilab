const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li');

function toggleMenu() {
  if (window.innerWidth > 760) {
    menuButton.style.display = 'none';
    menu.classList.remove('open');
  } else {
    menuButton.style.display = 'block';
    menuButton.classList.remove('open');
    menu.classList.remove('open');
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

window.addEventListener('resize', function () {
  toggleMenu();
});

toggleMenu();
