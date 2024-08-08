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

//function to handle products in the product cart
function handleProductsInCart() {
  createProductsDataArray().then(function (dataArray) {
    addCartBtns.forEach((addToCartBtn, index) => {
      addToCartBtn.addEventListener("click", function (event) {
        if (!dataArray.length) {
          alert("Some issue in creating your product");
          return;
        }

        createProduct(index, dataArray, createProductCard);
        validateEmptyCart(dataArray);

        incrementProductCount(getProductCard);
        decrementProductCount(getProductCard);

        if (productsArray.length <= 1 && dataArray.length) {
          createOrderTotalAndConfirmBtn(productsArray);
        }

        calculateAndUpdateOrdersTotal();
      });
    });
  });
}

handleProductsInCart();

//function to increment product count 
function incrementProductCount(event, getProductCard) {
  if (!event.target) {
    return;
  }

  const productCategoryName = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.querySelector(".dessert__category").textContent;

  const product = productsArray.find((product) => product.category === productCategoryName);
  product.incrementCount();

  const incrementedProduct = getProductCard(product);
  incrementedProduct.querySelector(".product__card__count").textContent = `${product.count}x`;
  incrementedProduct.querySelector(".product__card__total").textContent = `$${product.setTotal()}`;

  calculateAndUpdateOrdersTotal();
}

//function to decrement product count 
function decrementProductCount(event, getProductCard) {
  if (!event.target) {
     return;
  }

  const productCategoryName = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.querySelector(".dessert__category").textContent
  const product = productsArray.find((product) => product.category === productCategoryName);
  product.decrementCount();

  const decrementedProduct = getProductCard(product);
  decrementedProduct.querySelector(".product__card__count").textContent = `${product.count}x`;
  decrementedProduct.querySelector(".product__card__total").textContent = `$${product.setTotal()}`;

  calculateAndUpdateOrdersTotal();
}

//function to update the product cart UI on increment & decrement 
function getProductCard(product) {
  const productCards = Array.from(document.querySelectorAll(".product__card"));

  const incrementedProduct = productCards.find((productCard) => productCard.querySelector(".product__card__category").textContent === product.category);

  return incrementedProduct;
}

//function to delete product from product array
function deleteProduct(removeCardBtn) {
  const deletedProduct = productsArray.find((product) => {
    return product.category === removeCardBtn.parentElement.querySelector(".product__card__category").textContent;
  });
  const deletedProductIndex = productsArray.indexOf(deletedProduct);

  productsArray.splice(deletedProductIndex, 1);
}

function makeThumbnails(dataArray, productsArray) {
  const thumbnails = [];

  for (const product of productsArray) {
    const thumbnailProduct = dataArray.find((productData) => productData.category === product.category);

    const { image: { thumbnail } } = thumbnailProduct;
    thumbnails.push(thumbnail);
  }

  return thumbnails;
}





