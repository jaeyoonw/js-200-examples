function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        resolve({
          result: `${name} success`,
          loss: 30
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const jaeyoon = {
  stamina: 100
};
doJob("work", jaeyoon)
  .then(v => {
    console.log(v.result);
    jaeyoon.stamina -= v.loss;
    return doJob("study", jaeyoon);
  })
  .then(v => {
    console.log(v.result);
    jaeyoon.stamina -= v.loss;
    return doJob("work", jaeyoon);
  })
  .catch(e => console.error(e));
