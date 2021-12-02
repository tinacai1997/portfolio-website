console.log("this is a secret message");


// --------------------- Toggle Side Menu --------------------//

// Get variables

let menuOpen = false;
let getSideMenu = document.querySelector(".side-menu");
let getSideMenuNav = document.querySelector(".side-menu nav");
let getSideContact = document.querySelector(".side-contact");
let getMenuMask = document.querySelector(".menu-mask");
let getMenuIcon = document.querySelector(".menu-icon");

// Open Menu

function openMenu() {
  getSideMenu.style.visibility = "visible";
  getSideMenu.style.transform = "scaleX(1)";

  getSideMenuNav.style.visibility = "visible";
  getSideMenuNav.style.opacity = "1";

  getSideContact.style.visibility = "visible";
  getSideContact.style.opacity = "1";

  getMenuMask.style.visibility = "visible";
  getMenuMask.style.opacity = "0.5";

  menuOpen = true;

  getMenuIcon.classList.toggle('close');
  getMenuIcon.classList.toggle('open');
}

// Close Menu

function closeMenu() {
 
  getSideMenu.style.visibility = "hidden";
  getSideMenu.style.transform = "scaleX(0)";

  getSideMenuNav.style.visibility = "hidden";
  getSideMenuNav.style.opacity = "0";

  getSideContact.style.visibility = "hidden";
  getSideContact.style.opacity = "0";

  getMenuMask.style.visibility = "hidden";
  getMenuMask.style.opacity = "0";

  menuOpen = false;

  getMenuIcon.classList.toggle('close');
  getMenuIcon.classList.toggle('open');
}

function menuToggle() {

  if (menuOpen === false) {
    openMenu();
  } else {
    closeMenu();
  }  

}


// Tab Message

var title = document.title;
var tabMessage = [
  "Click Me 😁",
  "Please Click Me 🥺",
  "🕷 Oh no, a spider!"
];

var intervalTimer = null;
var timeoutTimer = null;

window.addEventListener("blur", function () { 
   intervalTimer = setInterval(function() {
     var rand = Math.floor((Math.random() * tabMessage.length));

     document.title = tabMessage[rand];

     timeoutTimer = setTimeout(function() {
       document.title = title;
     },5000);
   },10000);
});

window.addEventListener("focus", function(){ 
  clearInterval(intervalTimer);
  clearTimeout(timeoutTimer);
  document.title = title; 
});


// Slider

const slider = new NSlider({
  elem: document.querySelector('.slider-container'),
  animation: {
    duration: 1000,
    timingFunction: 'ease-in-out'
  },
  dots: true,
  keyboardControl: true,
  prevButtonInner: '<',
  nextButtonInner: '>'
});
