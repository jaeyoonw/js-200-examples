function promiseForHomework(mustDo) {
  return new Promise((success, reject) => {
    setTimeout(() => {
      console.log("doing work");
      if (mustDo) {
        success({
          result: "work-result"
        });
      } else {
        reject(new Error("Too lazy!"));
      }
    }, 3000);
  });
}

const promiseA = promiseForHomework(true); // success상태
console.log("promiseA created");

const promiseB = promiseForHomework(); // reject상태
console.log("promiseB created");

promiseA.then(v => console.log(v)); // 성공하면 호출
promiseB.then(v => console.log(v)).catch(e => console.log(e));
