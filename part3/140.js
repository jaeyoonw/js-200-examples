function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        person.stamina -= 30;
        resolve({
          result: `${name} success`
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const harin = { stamina: 100 };

const execute = async function() {
  //execute 함수 내부에 비동기작업을 제어한다.
  try {
    let v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
    console.log(v.result);
    v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
  } catch (e) {
    console.log(e);
  }
};

execute();
