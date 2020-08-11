'use strict';
// --------------Home page--------------
// when you click on the contact link
const homeDomEvents = () => {
  document
    .querySelector('#contact-link')
    .addEventListener('click', swapActiveClass);
};

// you want the active class to be removed from the about link
// and the active class to be added to the contact link.
const swapActiveClass = e => {
  const aboutElement = document.querySelector('#about-link');
  aboutElement.classList.remove('active');
  e.classList.add('active');
};
homeDomEvents();

// --------------End Home page--------------
// *** Fashion Show Page JS***

// *** End Fashion SHow Page JS ***
