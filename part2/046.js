let user = {};
Object.defineProperty(user, "age", {
  //age라는 속성을 정의함
  get: function() {
    //user라는 객체, 즉 클래스 안에 있는 메소드 = 함수
    return this._age; //속성 앞에 _를 붙이는것은 비공개 속성임을 나타낸다.
  },
  set: function(age) {
    if (age < 0) {
      console.error("0보다 작은 값은 못와");
    } else {
      this._age = age;
    }
  },
  enumerable: true
});
user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
  get name() {
    return this._name;
  },
  set name(val) {
    if (val.length < 3) {
      throw new Error("3자 이상이어야 한다.");
    }
    this._name = val;
  }
};
user2.name = "harin";
console.log(user2.name);
user2.name = "ha";
