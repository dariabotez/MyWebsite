const burger = document.getElementById("burgerItem");
const menu = document.getElementById("navItem");
let isMenuOpen = false;
function openMenu() {
  if (isMenuOpen) {
    menu.classList.remove("menu-activ");
  } else {
    menu.classList.add("menu-activ");
  }
  isMenuOpen = !isMenuOpen;
}
burger.addEventListener("click", openMenu);
