const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");

function toggleMenu() {
  if (window.innerWidth > 760) {
    menuButton.style.display = "none";
    menu.classNameList.remove("open");
  } else {
    menuButton.style.display = "block";
    menuButton.classNameList.remove("open");
    menu.classNameList.remove("open");
  }
}

menuButton.addEventListener("click", function () {
  menuButton.classNameList.toggle("open");
  menu.classNameList.toggle("open");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuButton.classNameList.remove("open");
    menu.classNameList.remove("open");
  });
});

window.addEventListener("resize", function () {
  toggleMenu();
});

toggleMenu();
