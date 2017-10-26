function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {
       if(min < max) {
           setTimeout(() => {
                resolve(getRandomInt(min, max));
           }, delay);
       } else{
           throw new Error('Min cannot be less than max');
       }
    });
 }
 let p1 = createPromiseRandom(1, 100, 2000);
 p1.then(num => {
    console.log(num);
 });
 let p2 = createPromiseRandom(1000, 100, 3000);
 p2.then(num => {
    console.log(num);
 }).catch(err => {
    console.log(err.message);
 })
 