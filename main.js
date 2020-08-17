'Use Strict';

// Product Page
const products = [
  {
    name: 'The Classic Jort',
    pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg/330px-Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg",
    description: 'A classic pair of jorts for a classic look!',
    price: '$12.99',
    season: 'SPRING',
  },
  {
    name: 'Long Jort',
    pictureURL: "https://i5.walmartimages.com/asr/f705d800-859a-468a-8396-a523bd4e8a09_1.3fff5979462bac1a3ebf2468e6f43a6a.jpeg",
    description: 'A longer jort for those cooler months!',
    price: '$16.99',
    season: 'WINTER',
  },
  {
    name: 'Short Jort',
    pictureURL: 'https://images-na.ssl-images-amazon.com/images/I/713zBAX5wrL._AC_UX679_.jpg',
    description:
      'Let go of the constraints of good fashion, and enjoy an unrestricted garment for the hottest months!',
    price: '$14.99',
    season: 'Summer',
  },
  {
    name: 'MEGA Jort',
    pictureURL: 'https://i.pinimg.com/236x/9b/9f/03/9b9f03b8f17a6811008de191034745d6--fashion-advice-kevin-oleary.jpg',
    description:
      'Big jorts, big functionality! legal disclaimer: not to be used as a parachute.',
    price: '$21.99',
    season: 'Fall',
  },
  {
    name: 'Canadian Tuxedo Jort',
    pictureURL: 'https://www.suitusa.com/images/image46323.jpg',
    description:
      'Put your best foot forward, while still somehow going backward!',
    price: '$15.99',
    season: 'Spring',
  },
  {
    name: 'Black Jorts',
    pictureURL: 'https://i.etsystatic.com/7679539/r/il/14d86e/507544359/il_570xN.507544359_4mfv.jpg',
    description: "IT'S NOT A PHASE, MOM!",
    price: '$14.99',
    season: 'Winter',
  },
  {
    name: 'Dad Jorts',
    pictureURL: 'https://i.pinimg.com/originals/8a/09/e5/8a09e5e7789694a6235368e05488a434.jpg',
    description: "Hey jorts! I'm Dad!",
    price: '$17.99',
    season: 'Summer',
  },
  {
    name: 'Mom Jorts',
    pictureURL: 'https://lsco.scene7.com/is/image/lsco/levis/clothing/168880001-back-pdp.jpg?$regular_mobile$',
    description: 'Does this jort make me look tacky?',
    price: '$12.99',
    season: 'Fall',
  },
  {
    name: 'Green Jorts',
    pictureURL: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/11/12/5be9fca3c9bf503e5a9a88e6/m_5be9fcb12e1478dcd10076a2.jpg',
    description: 'Leprechauns envy you.',
    price: '$14.99',
    season: 'Spring',
  },
  {
    name: 'Not Jorts',
    pictureURL: 'https://previews.123rf.com/images/gorovits/gorovits1603/gorovits160300442/53361383-stylish-paper-sticker-on-white-background-men-s-shorts.jpg',
    description: 'These are not jorts. Nor are they for sale. Or are they?',
    price: '$1.99',
    season: 'Winter',
  },
  {
    name: 'Cool Jorts',
    pictureURL: 'https://www.valetmag.com/gr/daily/style/products/jorts_are_cool_again_062117/art-product1.jpg',
    description: 'Must be this cool |-------x-| to wear.',
    price: '$17.99',
    season: 'Summer',
  },
  {
    name: 'Ugly Jorts',
    pictureURL: 'https://i.pinimg.com/originals/9d/52/f5/9d52f58f1312ad829784a30cdd9fedc3.jpg',
    description: "Don't tell your uncle.",
    price: '$22.99',
    season: 'Fall',
  },
];

//Activate Js based on URL
const activateJsByPage = () => {
  const urlName = window.location.href;
  if (urlName.includes('shop.html') === true) {
    shopInit();
    eventSearch();
  } else if (urlName.includes('fashion.html') === true) {
    initDM();
  } else if (urlName.includes('#targetAbout') === true) {
    document.getElementById('about-page').classList.add('active');
    initRb();
  } else if (urlName.includes('#targetContact')) {
    document.getElementById('contact-page').classList.add('active');
    initRb();
  } else if (urlName.includes('index.html')) {
    initHome();
  }
};

// *** Home page ***

const seasonalJorts = selectedSeason => {
  let domString = '';
  for (let i = 0; i < products.length; i++) {
    if (products[i].season.toLowerCase().includes(selectedSeason) === true) {
      {
        domString += `<div class="card" style="width: 18rem;">`;
        domString += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg/330px-Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg" class="card-img-top" alt="..."></img>`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${products[i].name}</h5>`;
        domString += `<p class="card-text">${products[i].description}</p>`;
        domString += `<p class="card-text">Season: ${products[i].season}</p>`;
        domString += `<footer><strong>${products[i].price}</strong></footer>`;
        domString += `</div>`;
        domString += `</div>`;
      }
    }
  }
  printToDom(`${selectedSeason}-jorts`, domString);
};

const initHome = () => {
  seasonalJorts('summer');
  seasonalJorts('fall');
};

// *** End home page ***

// *** Product page ***
//Print to DOM function and Build Cards
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

//The Search
const showCards = searchString => {
  let domString = '';
  let searchedCards = products.filter(item => {
    if (
      item.name.toLowerCase().includes(searchString) ||
      item.season.toLowerCase().includes(searchString)
    ) {
          domString += `<div class="card h-100 d-flex flex-column justify-content-between">`;
          domString += `<img src=${item.pictureURL} alt="..."/>`;
          domString += `<div class="card-body">`;
          domString += `<h5 class="card-title">${item.name}</h5>`;
          domString += `<p class="card-text">${item.description}</p>`;
          domString += `<p class="card-text"><em>Season: ${item.season}</em></p>`;
          domString += `<footer><strong>${item.price}</strong></footer>`;
          domString += `</div>`;
          domString += `</div>`;
      }
      printToDom("first", domString);
    });
  };

const eventSearch = () => {
  searchBox.addEventListener('keyup', e => {
    let searchChars = [];
    const searchBox = document.getElementById('searchBox');
    const searchString = e.target.value.toLowerCase();
    showCards(searchString);
  });
};

// Build first Cards
const buildFirstCards = () => {
  let domString = '';

  for (let i = 0; i <= 2; i++) {
    domString += `<div class="card h-100 d-flex flex-column justify-content-between">`;
    domString += `<img src=${products[i].pictureURL} alt="..."/>`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title">${products[i].name}</h5>`;
    domString += `<p class="card-text">${products[i].description}</p>`;
    domString += `<p class="card-text"><em>${products[i].season}</em></p>`;
    domString += `<footer><strong>${products[i].price}</strong></footer>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  printToDom('first', domString);
};

const buildShopCards = () => {
  let domString = '';

  for (let i = 3; i < products.length; i++) {
    domString += `<div class="card h-100 d-flex flex-column justify-content-between">`;
    domString += `<img src=${products[i].pictureURL} alt="..."/>`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title">${products[i].name}</h5>`;
    domString += `<p class="card-text">${products[i].description}</p>`;
    domString += `<p class="card-text"><em>${products[i].season}</em></p>`;
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

// *** End product page ***

// *** About Us / Contact Page JS ***
const userInfoArray = [
  {
    name: '',
    email: '',
    comments: '',
  },
];

const buildModal = () => {
  let domString = '';
  let emailErrorString = '';
  const nameErrorMessage = document.getElementById('userNameError');
  const emailErrorMessage = document.getElementById('userEmailError');

  for (let i = 0; i < userInfoArray.length; i++) {
    if (userName.value === '' && userEmail.value === '') {
      domString += '<p class="text-danger">Please enter a name</p>';
      printModalToDom('userNameError', domString);

      emailErrorString +=
        '<p class="text-danger">Please enter an email address</p>';
      printModalToDom('userEmailError', emailErrorString);
    } else if (userName.value === '') {
      domString += '<p class="text-danger">Please enter a name</p>';
      printModalToDom('userNameError', domString);
      emailErrorMessage.textContent = '';
    } else if (userEmail.value === '') {
      domString += '<p class="text-danger">Please enter an email address</p>';
      printModalToDom('userEmailError', domString);
      nameErrorMessage.textContent = '';
    } else {
      domString += `<div class="modal fade" id="userSubmitModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Is this information correct?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Name: ${userInfoArray[i].name}</p>
          <p>Email: ${userInfoArray[i].email}</p>
          <p>Comments: ${userInfoArray[i].comments}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Go Back</button>
          <button type="button" class="btn" id="modalConfirm" data-dismiss="modal" data-toggle="modal" data-target="#confirmationModal">Confirm</button>
        </div>
      </div>
    </div>
  </div>`;
      printModalToDom('modalContainer', domString);
      nameErrorMessage.textContent = '';
      emailErrorMessage.textContent = '';
    }
  }
};

const confirmSubmit = e => {
  let domString = '';

  const target = e.target.id;
  if (target === `modalConfirm`) {
    domString += `<div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmationModalLabel">Success!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Thank you for your input!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;
    document.querySelector('#userName').value = '';
    document.querySelector('#userEmail').value = '';
    document.querySelector('#userComments').value = '';
  }
  printModalToDom('modalContainer', domString);
};

const printModalToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const submitUserInfo = e => {
  const target = e.target.id;

  for (let i = 0; i < userInfoArray.length; i++) {
    if (target === 'formSubmitBtn') {
      const name = document.querySelector('#userName').value;
      const email = document.querySelector('#userEmail').value;
      const comments = document.querySelector('#userComments').value;
      userInfoArray[i].name = name;
      userInfoArray[i].email = email;
      userInfoArray[i].comments = comments;
    }
  }
};

const contactButtonEvent = () => {
    document
      .querySelector('#formSubmitBtn')
      .addEventListener('click', submitUserInfo);
    document
      .querySelector('#formSubmitBtn')
      .addEventListener('click', buildModal);
    document
      .querySelector('#modalContainer')
      .addEventListener('click', confirmSubmit);
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

const handleLinkClick = () => {
  document
    .querySelector('#contact-page')
    .addEventListener('click', changeAboutContactLinkColor);
  document
    .querySelector('#about-page')
    .addEventListener('click', changeAboutContactLinkColor);
};

const initRb = () => {
  handleLinkClick();
  contactButtonEvent();
};

// *** End About Us / Contact Page JS ***

// *** Fashion Show Page JS ***
const userImg = [
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1977/8779/products/1000SWP_JORTS_1.jpg?v=1582908352",
  },
  {
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0136/8820/9494/products/0209_680x680_crop_center.jpg?v=1595538457',
  },
];

const buildSlideshow = () => {
  let domstring = '';

  domstring += `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`;
  domstring += `<ol class="carousel-indicators">`;
  for (let i = 0; i < userImg.length; i++) {
    domstring += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></li>`;
  }
  domstring += `</ol>`;
  domstring += `<div class="carousel-inner">`;
   for (let i = 0; i < userImg.length; i++) {
    domstring += `<div class="carousel-item ${i === 0 ? 'active' : ''}">`;
    domstring += `<img src=${userImg[i].imageUrl} class="d-block w-100" alt="...">`;
    domstring += `</div>`;
  }
  domstring += `</div>`;
  domstring += `<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">`;
  domstring += `<span class="carousel-control-prev-icon" aria-hidden="true"></span>`;
  domstring += `<span class="sr-only">Previous</span>`;
  domstring += `</a>`;
  domstring += `<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">`;
  domstring += `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
  domstring += `<span class="sr-only">Next</span>`;
  domstring += `</a>`;
  domstring += `</div>`;
  printToDom('slideshow', domstring);
};


const askForInput = () => {
  const inputUpload = document.querySelector('#upload-img');

// const inputUpload = document.querySelector("#upload-img");

inputUpload.addEventListener("change", (e) => {
  const objectURL = URL.createObjectURL(inputUpload.files[0]);

  userImg.push({ imageUrl: objectURL });
  buildSlideshow();
    });



    

initDM = () => {
  buildSlideshow();
  askForInput()

};
seeWindowHref()

    userImg.push({ imageUrl: objectURL });
    buildSlideshow();
  };


initDM = () => {
  buildSlideshow();
  askForInput();
};

// *** End Fashion Show Page JS ***

activateJsByPage();
