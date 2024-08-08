//funcion to start the new order and udpate the UI
function startNewOrder() {
  productsArray.splice(0,productsArray.length);
  validateEmptyCart(productsArray);
  
  document.querySelectorAll(".active-cart__btn").forEach(activeCartBtn => activeCartBtn.remove());
  Array.from(document.querySelector(".product-cart").children).slice(2).forEach(cartItem => cartItem.remove());
}

//function to handle the start new order button
function handleStartNewOrderBtn() {
  const startNewBtn = document.querySelector(".start-new-order-btn");

  startNewBtn.addEventListener("click",function() {
      closeDialogBox();
      startNewOrder();
  });
}

