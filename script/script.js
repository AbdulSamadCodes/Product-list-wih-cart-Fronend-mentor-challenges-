// function to update the cards information
function updateCardInfo(cardInfo) {
  const dessertCards = document.querySelectorAll("[data-dessert-card]");

  dessertCards.forEach(function(card,index){
    const {category, name, price} = cardInfo[index]; 

    card.querySelector("[data-dessert-category]").textContent = category;
    card.querySelector("[data-dessert-name]").textContent = name;
    card.querySelector("[data-dessert-price]").textContent = price;
  });
}

//function to render & update the card images
function updateCardImages(cardInfo) {
  const dessertCards = document.querySelectorAll("[data-dessert-card]");
  
  dessertCards.forEach((card,index) => {
    const {image:{mobile: mobileImgSrc, tablet: tabletImgSrc, desktop: desktopImgSrc}} = cardInfo[index];

    card.querySelector("[data-dessert-img]").src = mobileImgSrc;
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
        }) 
         .catch(() => alert("Oops!We have some issues"));
}

getAndUpdateData();

