'Use Strict';

// Product Page
const products = [
  {
    name: 'The Classic Jort',
    pictureURL: 'placeholder',
    description: 'A classic pair of jorts for a classic look!',
    price: '$12.99',
    season: 'SPRING',
  },
  {
    name: 'Long Jort',
    pictureURL: 'placeholder',
    description: 'A longer jort for those cooler months!',
    price: '$16.99',
    season: 'WINTER',
  },
  {
    name: 'Short Jort',
    pictureURL: 'placeholder',
    description:
      'Let go of the constraints of good fashion, and enjoy an unrestricted garment for the hottest months!',
    price: '$14.99',
    season: 'Summer',
  },
  {
    name: 'MEGA Jort',
    pictureURL: 'placeholder',
    description:
      'Big jorts, big functionality! legal disclaimer: not to be used as a parachute.',
    price: '$21.99',
    season: 'Fall',
  },
  {
    name: 'Canadian Tuxedo Jort',
    pictureURL: 'placeholder',
    description:
      'Put your best foot forward, while still somehow going backward!',
    price: '$15.99',
    season: 'Spring',
  },
  {
    name: 'Black Jorts',
    pictureURL: 'placeholder',
    description: "IT'S NOT A PHASE, MOM!",
    price: '$14.99',
    season: 'Winter',
  },
  {
    name: 'Dad Jorts',
    pictureURL: 'placeholder',
    description: "Hey jorts! I'm Dad!",
    price: '$17.99',
    season: 'Summer',
  },
  {
    name: 'Mom Jorts',
    pictureURL: 'placeholder',
    description: 'Does this jort make me look tacky?',
    price: '$12.99',
    season: 'Fall',
  },
  {
    name: 'Green Jorts',
    pictureURL: 'placeholder',
    description: 'Leprechauns envy you.',
    price: '$14.99',
    season: 'Spring',
  },
  {
    name: 'Not Jorts',
    pictureURL: 'placeholder',
    description: 'These are not jorts. Nor are they for sale. Or are they?',
    price: '$1.99',
    season: 'Winter',
  },
  {
    name: 'Cool Jorts',
    pictureURL: 'placeholder',
    description: 'Must be this cool |-------x-| to wear.',
    price: '$17.99',
    season: 'Summer',
  },
  {
    name: 'Ugly Jorts',
    pictureURL: 'placeholder',
    description: "Don't tell your uncle.",
    price: '$22.99',
    season: 'Fall',
  },
];

// --------------Start Home page JS--------------
const seeWindowHref = () => {
  const testVariable = window.location.href.split('#');
  if (testVariable[1] === 'targetContact') {
    document.getElementById('contact-page').classList.add('active');
  }
  if (testVariable[1] === 'targetAbout') {
    document.getElementById('about-page').classList.add('active');
  }

  //shop init
  const shopVariable = window.location.href;
  if (shopVariable.includes('shop.html') === true) {
    shopInit();
  }
};

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

const initCC = () => {
  document
    .querySelector('#contact-page')
    .addEventListener('click', changeAboutContactLinkColor);
  document
    .querySelector('#about-page')
    .addEventListener('click', changeAboutContactLinkColor);
};

initCC();
// --------------End Home page JS--------------

//Print to DOM function and Build Cards
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const buildFirstCards = () => {
  let domString = '';

  for (let i = 0; i <= 2; i++) {
    domString += `<div class="card" style="width: 18rem;">`;
    domString += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg/330px-Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg" class="card-img-top" alt="..."></img>`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title">${products[i].name}</h5>`;
    domString += `<p class="card-text">${products[i].description}</p>`;
    domString += `<footer><strong>${products[i].price}</strong></footer>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  printToDom('first', domString);
};

const buildShopCards = () => {
  let domString = '';

  for (let i = 3; i < products.length; i++) {
    domString += `<div class="card" style="width: 18rem;">`;
    domString += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg/330px-Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg" class="card-img-top" alt="..."></img>`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title">${products[i].name}</h5>`;
    domString += `<p class="card-text">${products[i].description}</p>`;
    domString += `<footer><strong>${products[i].price}</strong></footer>`;
    domString += `</div>`;
    domString += `</div>`;
  }

  printToDom('product', domString);
};

const btnText = () => {
  let button = document.getElementById('moreLess');

  if (button.innerHTML == 'See Less') {
    button.innerHTML = 'See More';
  } else {
    button.innerHTML = 'See Less';
  }
};

// Initialization Function
const shopInit = () => {
  buildFirstCards();
  document.getElementById('moreLess').addEventListener('click', buildShopCards);
  document.getElementById('moreLess').addEventListener('click', btnText);
};
seeWindowHref();
// shopInit();

// END Product Page

// *** Fashion Show Page JS***

// *** End Fashion Show
