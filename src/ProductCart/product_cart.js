const productCart = document.querySelector("[data-product-cart]");
const cartEmpty = productCart.querySelector("[data-product-cart-empty]");
const cartCounter = productCart.querySelector("[data-cart-items-quanity]");

//function to validate UI if the cart is empty
function validateEmptyCartUI(productsArray) {

  (productsArray.length >= 1) ? cartEmpty.style.display = "none" : "block";
}

//function to get the cart counter
function getCartCount() {
  return  parseInt(cartCounter.textContent[1]);
}

//function to increment update the cart counter
function incrementCartCounter() {
  let currentCartCount = getCartCount();
  cartCounter.textContent = `(${++currentCartCount})`;
}

//function to increment update the cart counter
function decrementCartCounter() {
  let currentCartCount = getCartCount();
  cartCounter.textContent = `(${--currentCartCount})`;
}





