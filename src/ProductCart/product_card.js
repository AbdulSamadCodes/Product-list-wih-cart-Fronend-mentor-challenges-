class ProductCard {
  #removeButtonImgSrc = "/assets/images/icon-remove-item.svg";

  constructor() {
    this.productCard = document.createElement("li");
    this.cardWrapper = document.createElement("div");

    this.productCardInfo = document.createElement("div");
    this.productCardCategory = document.createElement("h4");
    this.productCount = document.createElement("span");
    this.productCardPrice = document.createElement("span");
    this.productCardTotal = document.createElement("span");
    this.removeButton = document.createElement("button");
  }

  setClassNames() {
    this.productCard.className = "product__card";
    this.cardWrapper.className = "product__card__wrapper"
    this.productCardInfo.className = "product__card__info";
    this.productCardCategory.className = "product__card__category";
    this.productCount.classList = "product__card__count";
    this.productCardPrice.className = "product__card__price";
    this.productCardTotal.className = "product__card__total";
    this.removeButton.className = "product__card__remove-btn";
  }

  createProductCard() {
    this.productCardInfo.appendChild(this.productCount);
    this.productCardInfo.appendChild(this.productCardPrice);
    this.productCardInfo.appendChild(this.productCardTotal);

    this.cardWrapper.appendChild(this.productCardCategory);
    this.cardWrapper.appendChild(this.productCardInfo);

    const cancelImg = document.createElement("img");
    cancelImg.src = this.#removeButtonImgSrc;
    this.removeButton.appendChild(cancelImg);

    this.removeButton.addEventListener("click", function () {
      removeProductCardFromUI(this);
      calculateAndUpdateOrdersTotal();
      deleteProduct(this);
    });

    this.productCard.appendChild(this.cardWrapper);
    this.productCard.appendChild(this.removeButton);
  }

  getProductCard() {
    this.setClassNames();
    this.createProductCard();

    return this.productCard;
  }
}

// function to create the product cart on UI
function createProductCard(product) {
  const productCard = new ProductCard().getProductCard();

  productCard.querySelector(".product__card__category").textContent = product.category;
  productCard.querySelector(".product__card__count").textContent = `${product.count}x`;
  productCard.querySelector(".product__card__price").textContent = `@ $${product.price}`;
  productCard.querySelector(".product__card__total").textContent = `$${product.setTotal()}`;


  let productsList = Array.from(productCart.children).find((childElem) => childElem.tagName === "UL");

  if (productsList) {
    productsList.appendChild(productCard);
    return;
  }

  productsList = createProductsList();
  productsList.appendChild(productCard);
}

//function to remove product card from UI
function removeProductCardFromUI(removeCardBtn) {
  removeCardBtn.parentElement.remove();
}




