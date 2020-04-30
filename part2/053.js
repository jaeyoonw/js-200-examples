class Product {
  static build(name, price) {
    //정적 메소드
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }

  static getTaxPrice(product) {
    //정적 메소드
    return product.price * 0.1 + product.price;
  }

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class MyProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

const gum = Product.build("롯데 껌", 500);
console.log(gum);

const clothes = new MyProduct(1, "옷", 2000);
const taxPrice = MyProduct.getTaxPrice(clothes);
console.log(taxPrice);
