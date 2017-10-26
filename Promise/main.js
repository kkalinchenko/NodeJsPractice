// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve(5);
//         console.log(1);
//     }, 2000);
// });

// let ppp = promise.then((p) => {
//     throw new Error('Error');
//     console.log(`Hello from then ${p}`);
//     return p*p;
// }).then((p) => {
//     console.log(`Hello from then ${p}`);
//     return p*p;
// }).catch((error) => {
//     console.log(error);
// })

// let a = ppp.then(() =>{
//     console.log('promise');
// })
let x = 0.6;
let pr = Promise.resolve(x); 
if(x > 0.5){
    pr =  pr.then((x) => {
        return x;
    }).then((x) => {
        return x+2;
    })
}
pr.then((p) => {
    console.log(p);
})
console.log(1);

