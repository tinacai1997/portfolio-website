// --------------------- Toggle Side Menu --------------------//
// This works under the assumption that the user won't be changing
// their screen size. Otherwise, there are issues with menu visibility
// when changing sizes.

// Get variables

let menuOpen = false;
const getMenuNav = document.querySelector('#header nav');
// const getMenuContainer = document.querySelector('.menu-container')
const getMenuIcon = document.querySelector('.menu-icon');

// Open Menu

function openMenu() {
  getMenuNav.style.visibility = 'visible';

  menuOpen = true;

  getMenuIcon.classList.toggle('close');
  getMenuIcon.classList.toggle('open');
}

// Close Menu

function closeMenu() {
  getMenuNav.style.visibility = 'hidden';

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

// Execute only if script exists on page

$(document).ready(function () {
  // Slick
  if ($('.slider-container').length) {
    $('.slider-container').slick({
      dots: true,
    });
  }

  // Parallax
  if ($('.parallax-img').length) {
    const image = document.getElementsByClassName('parallax-img');
    new simpleParallax(image, {
      scale: 1.4
    });
  }

});


// Projects Background Color Change

$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 50% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 2);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    } else if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) || (window.scrollY==0)) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('white'));
    }
  });    
  
}).scroll();


// Back to Top Button
var btn = $('#top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

