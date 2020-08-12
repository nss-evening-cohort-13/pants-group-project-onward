'use strict';
// --------------Home page--------------
// when you click on the contact link
// const homeDomEvents = () => {};

// you want the active class to be removed from the about link
// and the active class to be added to the contact link.

const seeWindowHref = () => {
  const testVariable = window.location.href.split('#');
  if (testVariable[1] === 'targetContact') {
    document.getElementById('contact-page').classList.add('active');
  }
  if (
    testVariable[1] === 'targetAbout' ||
    testVariable[0].includes('aboutAndContact')
  ) {
    document.getElementById('about-page').classList.add('active');
  }
};
seeWindowHref();

const changeAboutContactLinkColor = e => {
  if (e.target.id === 'contact-page') {
    document.getElementById('about-page').classList.remove('active');
    document.getElementById('contact-page').classList.add('active');
  }
  if (e.target.id === 'about-page') {
    document.getElementById('contact-page').classList.remove('active');
    document.getElementById('about-page').classList.add('active');
  }
};

document
  .querySelector('#contact-page')
  .addEventListener('click', changeAboutContactLinkColor);
document
  .querySelector('#about-page')
  .addEventListener('click', changeAboutContactLinkColor);

// --------------End Home page--------------
// *** Fashion Show Page JS***

// *** End Fashion SHow Page JS ***
