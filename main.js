console.log("Sort the jort port by cohort. Abort!")

// *** Fashion Show Page JS***











//   slideshowEvents = () => {
//       document.querySelector("selectImg").addEventListener("click", whatImg)
//   }


const userImg = [
    {
        name: "Jorts",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg"
    },
    {
        name: "Jorts",
        imageUrl: "https://cdn.shopify.com/s/files/1/0136/8820/9494/products/0209_680x680_crop_center.jpg?v=1595538457"
    }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };



const buildSlideshow = () => {
  let domstring = "";


  domstring += `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`;
  domstring += `<ol class="carousel-indicators">`;
  domstring +=  `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`;
  domstring +=  `<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>`;
  domstring +=  `<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>`;
  domstring += `</ol>`;
  domstring += `<div class="carousel-inner">`;

  // i === 0 
  // if(i === 0) {
    // ? 'active'
        // return 'active'
  // } else {
    // : ''
      // return ''
  // }

  for (let i=0; i < userImg.length; i++) {
    domstring +=  `<div class="carousel-item ${ i === 0 ? 'active': '' }">`;
    domstring +=    `<img src=${userImg[i].imageUrl} class="d-block w-100" alt="...">`;
    domstring +=  `</div>`;
  }

  domstring += `</div>`;
  
  domstring += `<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">`;
  domstring +=  `<span class="carousel-control-prev-icon" aria-hidden="true"></span>`;
  domstring +=  `<span class="sr-only">Previous</span>`;
  domstring += `</a>`;
  domstring += `<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">`;
  domstring +=  `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
  domstring +=  `<span class="sr-only">Next</span>`;
  domstring += `</a>`;
  domstring += `</div>`;
 printToDom("slideshow", domstring)
}


const placeImg = () => {
    let domString = `<form>
                    <div class="form-group">
                    <label for="exampleFormControlFile1">Choose Your Photo!</label>
                    <input type="file" class="img-control-file" id="upload-img" />
                    </div>
                    </form>`;
    printToDom("addImg", domString);
  };

  const selectedFile = document.getElementById('upload-img').files[0];

init = () => {
    buildSlideshow()
    placeImg()
}

init();


//   const whatImg = () => {
//     const img = document.getElementById("upload-img").value;
//     userImg.push([]);
//     document.querySelector("#upload-img").reset();
  
//     if (document.getElementById("upload-img").value.length == 0) {
//       alert("no photo");
//     }
//   };

// const init = () => {
//     buildSlideshow()
//     placeImg()
// }

// init();
// *** End Fashion SHow Page JS ***
