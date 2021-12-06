// --------------------- Toggle Side Menu --------------------//

// Get variables

let menuOpen = false;
const getSideMenu = document.querySelector('.side-menu');
const getSideMenuNav = document.querySelector('.side-menu nav');
const getSideContact = document.querySelector('.side-contact');
const getMenuMask = document.querySelector('.menu-mask');
const getMenuIcon = document.querySelector('.menu-icon');

// Open Menu

function openMenu() {
  getSideMenu.style.visibility = 'visible';
  getSideMenu.style.transform = 'scaleX(1)';

  getSideMenuNav.style.visibility = 'visible';
  getSideMenuNav.style.opacity = '1';

  getSideContact.style.visibility = 'visible';
  getSideContact.style.opacity = '1';

  getMenuMask.style.visibility = 'visible';
  getMenuMask.style.opacity = '0.5';

  menuOpen = true;

  getMenuIcon.classList.toggle('close');
  getMenuIcon.classList.toggle('open');
}

// Close Menu

function closeMenu() {
  getSideMenu.style.visibility = 'hidden';
  getSideMenu.style.transform = 'scaleX(0)';

  getSideMenuNav.style.visibility = 'hidden';
  getSideMenuNav.style.opacity = '0';

  getSideContact.style.visibility = 'hidden';
  getSideContact.style.opacity = '0';

  getMenuMask.style.visibility = 'hidden';
  getMenuMask.style.opacity = '0';

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

const title = document.title;
const tabMessage = [
  'Click Me 😁',
  'Please Click Me 🥺',
  '🕷 Oh no, a spider!',
];

let intervalTimer = null;
let timeoutTimer = null;

window.addEventListener('blur', function () {
  intervalTimer = setInterval(function () {
    const rand = Math.floor((Math.random() * tabMessage.length));

    document.title = tabMessage[rand];

    timeoutTimer = setTimeout(function () {
      document.title = title;
    }, 5000);
  }, 10000);
});

window.addEventListener('focus', function () {
  clearInterval(intervalTimer);
  clearTimeout(timeoutTimer);
  document.title = title;
});

// Slider

// const slider = document.getElementsByClassName("slider-container");
// console.log(slider);
// console.log(slider.length);

// for (var i = 0; i < slider.length; i++) {
const slider = new NSlider({
  elem: document.querySelector('.slider-container'),
  animation: {
    duration: 1000,
    timingFunction: 'ease-in-out',
  },
  dots: true,
  keyboardControl: true,
  prevButtonInner: '<',
  nextButtonInner: '>',
});
// }
