class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    this.store[product.id] = product;
  }

  getProduct(id) {
    return this.store[id];
  }
}

const cart1 = new Cart();

cart1.addProduct({ id: 1, name: "노트북" }); //매개변수 product는 객체다.
console.log(cart1.store); //store의 속성은 product.id 이고 그안의 또 객체들이 들어가있다. (product)

const p = cart1.getProduct(1);
console.log(p);
