const ship1 = {
  max: 4,
  passengers: [],
  onBoard: function(name) {
    console.log(this); //이때의 this는 ship1객체를 가리킨다.
    if (this.passengers.length === 4) {
      console.log(`This ship is full. ${name} can't board this ship`);
    } else {
      this.passengers.push(name);
      console.log(`${name} boarded`);
      console.log(this.passengers.length);
    }
  }
};

const ship2 = {
  max: 4,
  passengers: [],
  onBoard: name => {
    console.log(this); //화살표 함수 내부의 this는 외부의 전역객체(window)를 가리킨다.
  }
};

ship1.onBoard("jaeyoon");
ship2.onBoard("jaeyoon");
