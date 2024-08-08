class ConfirmOrderCard {
  constructor() {
    this.confirmOrderCard = document.createElement("div");
    this.thumbnailWrapper = document.createElement("div");
    this.thumbnailImg = document.createElement("img");

    this.confirmProductCardInfo = document.createElement("div");
    this.confirmProductCardCategory = document.createElement("h4");
    this.wrapper = document.createElement("div");
    this.confirmProductCount = document.createElement("span");
    this.confirmProductCardPrice = document.createElement("span");

    this.confirmProductCardTotal = document.createElement("span");
  }

  setClassNames() {
    this.confirmOrderCard.className = "confirm__order__card";
    this.thumbnailWrapper.className = "thumbnail__wrapper";
    this.thumbnailImg.className = "thumbnail___img";

    this.confirmProductCardInfo.className = "confirm__product__card__info";
    this.confirmProductCardCategory.className = "confirm__product__category";
    this.wrapper.className = "wrapper";
    this.confirmProductCount.className = "confirm__product__count";
    this.confirmProductCardPrice.className = "confirm__product__price";

    this.confirmProductCardTotal.className = "confirm__product__cart__total";
  }

  generateThumbnail(thumbnails, index) {
    this.thumbnailImg.src = thumbnails[index];
  }

  createConfirmProductCard() {
    this.thumbnailWrapper.appendChild(this.thumbnailImg);

    this.wrapper.appendChild(this.confirmProductCount);
    this.wrapper.appendChild(this.confirmProductCardPrice);

    this.confirmProductCardInfo.appendChild(this.confirmProductCardCategory);
    this.confirmProductCardInfo.appendChild(this.wrapper);

    this.confirmOrderCard.appendChild(this.thumbnailWrapper);
    this.confirmOrderCard.appendChild(this.confirmProductCardInfo);
    this.confirmOrderCard.appendChild(this.confirmProductCardTotal);
  }

  getConfirmOrderCard(thumbnails, index) {
    this.setClassNames();
    this.createConfirmProductCard();
    this.generateThumbnail(thumbnails, index);

    return this.confirmOrderCard;
  }
}