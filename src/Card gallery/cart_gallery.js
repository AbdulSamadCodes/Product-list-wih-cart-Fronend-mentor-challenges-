
const dessertCards = document.querySelectorAll("[data-dessert-card]");
const dessertImgWrapper = document.querySelectorAll("[data-dessert-img-wrapper]");

// function to update the cards information
function updateCardInfo(cardInfo) {

  dessertCards.forEach(function(card,index){
    const {category, name, price} = cardInfo[index]; 

    card.querySelector("[data-dessert-category]").textContent = category;
    card.querySelector("[data-dessert-name]").textContent = name;
    card.querySelector("[data-dessert-price]").textContent = `$${price}`;
  });
}

//function to render & update the card images
function updateCardImages(cardInfo) {
  const dessertCards = document.querySelectorAll("[data-dessert-card]");
  
  dessertCards.forEach((card,index) => {
    const {image:{mobile: mobileImgSrc, tablet: tabletImgSrc, desktop: desktopImgSrc}} = cardInfo[index];

    const dessertImg = card.querySelector("[data-dessert-img]");
    
    if(window.innerWidth >= 992) dessertImg.src = desktopImgSrc;
    else if(window.innerWidth >= 768) dessertImg.src = tabletImgSrc;
    else dessertImg.src = mobileImgSrc;
  });
}

//asynchronous fuction to get data from API
function getAndUpdateData() {
  const getData = () => {
    return fetch('JSON/data.json');
  }

  getData().then((responseBody) => responseBody.json())
         .then((cardInfo) => {
            updateCardInfo(cardInfo); 
            updateCardImages(cardInfo);
            window.addEventListener("load",() => updateCardImages(cardInfo));
            window.addEventListener("resize",() => updateCardImages(cardInfo));
        }) 
         .catch(() => alert("Oops!We have some issues"));
}

getAndUpdateData();

//function to add border on dessert images
function borderOnDessertImg(index) {
  dessertImgWrapper[index].style.border = `2px solid var(--clr-red)`;
}

//function to remove border on dessert images
function removeborderOnDessertImg(index) {
  dessertImgWrapper[index].style.border = `none`;
}


