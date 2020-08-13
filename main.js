
// *** Fashion Show Page JS***

const userImg = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg",
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0136/8820/9494/products/0209_680x680_crop_center.jpg?v=1595538457",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildSlideshow = () => {
  let domstring = "";

  domstring += `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`;
  domstring += `<ol class="carousel-indicators">`;
  for (let i = 0; i < userImg.length; i++) {
    domstring += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="${ i === 0 ? "active" : ""}"></li>`;
  }
  domstring += `</ol>`;
  domstring += `<div class="carousel-inner">`
  for (let i = 0; i < userImg.length; i++) {
    domstring += `<div class="carousel-item ${i === 0 ? "active" : ""}">`;
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
  printToDom("slideshow", domstring);
};

const inputUpload = document.querySelector("#upload-img");

inputUpload.addEventListener("change", (e) => {
  const objectURL = URL.createObjectURL(inputUpload.files[0]);

  userImg.push({ imageUrl: objectURL });
  buildSlideshow();
});

initDM = () => {
  buildSlideshow();
};

initDM();

// *** End Fashion SHow Page JS ***
