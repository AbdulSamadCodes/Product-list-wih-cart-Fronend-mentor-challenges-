const productCart = document.querySelector("[data-product-cart]");

//function to update the cart counter on UI
function updatCartCounter(activeCartBtns) {
  const cartCounter = document.querySelector("[data-cart-items-quantity]");

  const totalOrders = Array.from(activeCartBtns).reduce((sum, activeCartBtn) => {
    sum += parseInt(activeCartBtn.querySelector(".order-count-span").textContent);

    return sum;
  }, 0);

  cartCounter.textContent = `(${totalOrders})`;
}

//function to validate whether product cart is empty or not and then update UI
function validateEmptyCart(productsArray) {
  const cartEmpty = productCart.querySelector("[data-product-cart-empty]");

  productsArray.length > 0 ? cartEmpty.style.display = "none" : cartEmpty.style.display = "block";
}

//function to create the products list on UI
function createProductsList() {
  const productsList = document.createElement("ul");
  productCart.appendChild(productsList);

  return productsList;
}

function createOrderTotalAndConfirmBtn(productsArray) {
  const orderTotalWrapper = document.createElement("div");
  orderTotalWrapper.classList.add("products__order-total-wrapper", "flex", "align-items-center","justify-content-between");

  // order total element 
  const orderTotalTitle = document.createElement("span");
  orderTotalTitle.classList.add("order__total__title");
  orderTotalTitle.textContent = "Order Total";

  const orderTotalPrice = document.createElement("span");
  orderTotalPrice.classList.add("order__total__price");

  orderTotalWrapper.appendChild(orderTotalTitle);
  orderTotalWrapper.appendChild(orderTotalPrice);
  
  // carbon delivery message
  const carbonDeliveryMessageWrapper = document.createElement("div");
  carbonDeliveryMessageWrapper.classList.add("carbon-delivery-message-wrapper","margin-inline-auto","flex","align-items-center");

  const treeImg = document.createElement("img");
  treeImg.src = "/assets/images/icon-carbon-neutral.svg";

  const carbonMessage = document.createElement("p");
  carbonMessage.classList.add("carbon__message");
  carbonMessage.innerHTML = "This is a <span>carbon-neutral</span> delivery";

  carbonDeliveryMessageWrapper.appendChild(treeImg);
  carbonDeliveryMessageWrapper.appendChild(carbonMessage);

  //confirm order button
  const confirmOrderBtn = document.createElement("button");
  confirmOrderBtn.classList.add("confirm-order-btn","grid","place-content-center");
  confirmOrderBtn.textContent = "Confirm Order";

  
  productCart.appendChild(orderTotalWrapper);
  productCart.appendChild(carbonDeliveryMessageWrapper);
  productCart.appendChild(confirmOrderBtn);
}

function calculateAndUpdateOrdersTotal() {
  const orderTotalSpan = document.querySelector(".order__total__price");
  const productsTotalSpans = document.querySelectorAll(".product__card__total");  
  
  const totalPrice = Array.from(productsTotalSpans).reduce((total,productTotalSpan) => {
    return total+=parseFloat(productTotalSpan.textContent.slice(1));
  },0);

  if(orderTotalSpan) {
    orderTotalSpan.textContent = `$${totalPrice.toFixed(2)}`;
  }
}


