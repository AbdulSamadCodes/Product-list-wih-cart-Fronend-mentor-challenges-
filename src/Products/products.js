class Product {
  constructor(product) {
    this.category = product.category;
    this.name = product.name;
    this.price = product.price;
    this.count = 0;
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    this.count--;
  }
}



