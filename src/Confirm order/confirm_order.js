// A general function to add text content of one element to other
function addTextContent(fromElement, toElement) {
  fromElement.textContent = toElement.textContent;
}

// function to craete the orders total wrapper
function createConfirmOrdersTotalWrapper() {
  const dialogListWrapper = document.querySelector(".dialog__list-wrapper");
  const productsTotalWrapper = document.querySelector(".products__order-total-wrapper");

  const confirmOrderTotalWrapper = productsTotalWrapper.cloneNode(true);
  confirmOrderTotalWrapper.className = "confirm__order__total-wrapper flex align-items-center justify-content-between";

  dialogListWrapper.appendChild(confirmOrderTotalWrapper);
}

//function to create the confirmed orders list
function createConfirmOrderList(thumbnails) {
  const productsList = document.querySelector(".products-list");
  const productCards = Array.from(productsList.children);
  const confirmedOrdersList = document.querySelector(".confirm-order-list");

  //emtying the list if cards are already in it
  while (confirmedOrdersList.firstChild) {
    confirmedOrdersList.removeChild(confirmedOrdersList.firstChild);
  }

  for (const index in productCards) {
    const productCard = productCards[index];
    const confirmOrderCard = new ConfirmOrderCard().getConfirmOrderCard(thumbnails, index);

    addTextContent(confirmOrderCard.querySelector(".confirm__product__category"), productCard.querySelector(".product__card__category"));
    addTextContent(confirmOrderCard.querySelector(".confirm__product__count"), productCard.querySelector(".product__card__count"));
    addTextContent(confirmOrderCard.querySelector(".confirm__product__price"), productCard.querySelector(".product__card__price"))
    addTextContent(confirmOrderCard.querySelector(".confirm__product__cart__total"), productCard.querySelector(".product__card__total"))

    confirmedOrdersList.appendChild(confirmOrderCard);
  }
}

//function to open the confirm dialog box
function openDialogBox() {
  const confirmOrderDialog = document.querySelector(".order-confirm-dialog");
  confirmOrderDialog.showModal();
}

//function to close the confirm dialog box
function closeDialogBox() {
  const confirmOrderDialog = document.querySelector(".order-confirm-dialog");
  confirmOrderDialog.close();
}

// function to handle events on order confirm button
function handleConfirmOrderBtn() {
  createProductsDataArray().then(function (dataArray) {
    openDialogBox();

    const thumbnails = makeThumbnails(dataArray, productsArray);
    createConfirmOrderList(thumbnails);
    createConfirmOrdersTotalWrapper();
    handleStartNewOrderBtn();
  });
}



