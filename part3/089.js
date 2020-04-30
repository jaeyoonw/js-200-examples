const fruits = ["melon", "lemon", "source", "apple", "juice"];

fruits.splice(4, 1); // (시작인덱스, 삭제할요소 개수, 추가될 요소들)
fruits.splice(4, 0, "grape");
fruits.splice(2, 1, "mandarin", "strawberry", "watermelon");
console.log(fruits);
