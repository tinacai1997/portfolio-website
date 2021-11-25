console.log("this is a secret message");


// Toggle Side Menu

let menuOpen = false;

function menuToggle() {
  let getSideMenu = document.querySelector(".side-menu");
  let getSideMenuNav = document.querySelector(".side-menu nav");
  let getSideContact = document.querySelector(".side-contact");
  let getMenuMask = document.querySelector(".menu-mask");
  let getMenuIcon = document.querySelector(".menu-icon");

  getMenuIcon.classList.toggle('close');
  getMenuIcon.classList.toggle('open');

  if (menuOpen === false) {
    getSideMenu.style.visibility = "visible";
    getSideMenu.style.transform = "scaleX(1)";

    getSideMenuNav.style.visibility = "visible";
    getSideMenuNav.style.opacity = "1";

    getSideContact.style.visibility = "visible";
    getSideContact.style.opacity = "1";

    getMenuMask.style.visibility = "visible";
    getMenuMask.style.opacity = "0.5";

    menuOpen = true;

  } else {
    getSideMenu.style.visibility = "hidden";
    getSideMenu.style.transform = "scaleX(0)";

    getSideMenuNav.style.visibility = "hidden";
    getSideMenuNav.style.opacity = "0";

    getSideContact.style.visibility = "hidden";
    getSideContact.style.opacity = "0";

    getMenuMask.style.visibility = "hidden";
    getMenuMask.style.opacity = "0";

    menuOpen = false;
  }

}

// // Toggle Dark Mode
//
// let darkMode = false;
//
// function darkModeToggle() {
//
//
// }
