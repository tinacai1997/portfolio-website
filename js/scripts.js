console.log("this is a secret message");

let menuOpen = false;

function menuToggle() {
  let getSideMenu = document.querySelector(".side-menu");
  let getSideMenuNav = document.querySelector(".side-menu nav");
  let getSideContact = document.querySelector(".side-contact");
  let getMenuMask = document.querySelector(".menu-mask");

  if (menuOpen === false) {
    getSideMenu.style.visibility = "visible";

    getSideMenuNav.style.visibility = "visible";
    getSideMenuNav.style.opacity = "1";

    getSideContact.style.visibility = "visible";
    getSideContact.style.opacity = "1";

    getMenuMask.style.visibility = "visible";
    getMenuMask.style.opacity = "0.5";

    if (screen.width <= 640px) {
      getSideMenu.style.width = "50vw";
    } else {
      getSideMenu.style.width = "35vw";
    }

    menuOpen = true;

  } else {
    getSideMenu.style.visibility = "hidden";
    getSideMenu.style.width = "0%";

    getSideMenuNav.style.visibility = "hidden";
    getSideMenuNav.style.opacity = "0";

    getSideContact.style.visibility = "hidden";
    getSideContact.style.opacity = "0";

    getMenuMask.style.visibility = "hidden";
    getMenuMask.style.opacity = "0";

    menuOpen = false;
  }
}
