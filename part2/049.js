function Teacher(name, age, subject) {
  //재사용 하기위한, 유사한 객체를 여러개 만들 때 생성자 함수는 유용하다.
  //함수 이름의 첫문자를 대문자로 시작하면 생성자 함수이다.
  //this = {};  (빈 객체가 암시적으로 만들어진다.)
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.teach = function(student) {
    console.log(student + "에게" + this.subject + "를 가르칩니다.");
  };

  //return this; (this가 암시적으로 반횐된다.)
}
const jay = new Teacher("jay", 30, "Javascript"); //생성자 함수는 반드시 new키워드를 이용해 객체를 만든다.
console.log(jay);
jay.teach("bbo");

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher("jay", 25, "Javascript");
console.log(jay2); //새로운 객체가 반환되지 않아서  undefined가 뜬다.
console.log(age);
