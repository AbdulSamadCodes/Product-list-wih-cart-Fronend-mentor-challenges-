//asynchronous function to make api call
function getProductsData() {
  return fetch('JSON/data.json');
}

//function to create the dataArray
function createProductsDataArray() {
  const productsDataArray = [];

  getProductsData().then((resposeBody) => resposeBody)
    .then((dataArray) => productsDataArray = dataArray)
    .catch(() => alert("Oops!!Some error occurred"));

  return productsDataArray;
}
