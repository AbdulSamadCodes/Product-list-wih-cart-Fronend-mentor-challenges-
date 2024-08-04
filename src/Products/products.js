//an array of products
const productsArray = [];

class Product {
  constructor(product) {
    this.category = product.category;
    this.name = product.name;
    this.price = product.price;
    this.count = 1;
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    if (this.count <= 1) {
      this.count = 1;
      return;
    }

    this.count--;
  }

  setTotal() {
    return (this.price * this.count).toFixed(2);
  }
}

//function to create the product object
function createProduct(index, dataArray, createProductCard) {
  const product = new Product(dataArray[index]);

  productsArray.push(product);
  createProductCard(product);
}


