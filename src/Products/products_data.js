//asynchronous function to make api call
function getProductsData() {
  return fetch('JSON/data.json');
}

//function to create the dataArray
function createProductsDataArray() {
  return getProductsData().
    then((resposeBody) => resposeBody.json()).
    then((dataArray) => dataArray).
    catch(() => []);
}

createProductsDataArray().then(function (dataArray) {
  document.querySelectorAll("[data-add-to-cart-btn]").forEach((addToCartBtn, index) => {
    addToCartBtn.addEventListener("click", function(event) {
      createProduct(index, dataArray, createProductCard);
    })
  });
});


