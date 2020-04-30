function createCounterClosure() {
  let count = 0;
  return {
    increase: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter1 = createCounterClosure(); //이 두개가 서로 다른 렉시컬환경에서 작동하기때문에 서로 다른 count 값을 갖는다.
const counter2 = createCounterClosure(); //counter1,counter2가 호출문을 참조하고있기 때문에 실행컨텍스트가 제거되지 않는다.

counter1.increase();
counter1.increase();
console.log("counter1 의 값: " + counter1.getCount()); //2

counter2.increase();
console.log("counter2 의 값: " + counter2.getCount()); //1
