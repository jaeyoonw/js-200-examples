function Storage() {
  this.dataStore = {}; //dataStore로 빈객체 생성
}

Storage.prototype.put = function(key, data) {
  //Storage함수에 put 메소드를 추가한다.
  this.dataStore[key] = data;
};

Storage.prototype.getData = function(key) {
  //Storage 함수에 getData 메소드를 추가한다.
  return this.dataStore[key];
};

const productStorage = new Storage(); //Storage생성자 함수의 prototype 메소드를 사용할수 있게 된다. (put, getData)
productStorage.put("id001", { name: "키보드", price: 2000 });
console.log(productStorage.getData("id001"));

function RemovableStorage() {
  Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype); //Removable의 프로토타입 객체에 Storage의 프로토타입 객체가 할당된다.

RemovableStorage.prototype.removeAll = function() {
  this.dataStore = {};
};
const productStorage2 = new RemovableStorage();
productStorage2.put("id001", { name: "키보드", price: 2000 });
productStorage2.removeAll();
const item2 = productStorage2.getData("id001");
console.log(item2);
