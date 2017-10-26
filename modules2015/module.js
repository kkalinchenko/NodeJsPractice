function isPositiveNumber(value){
    return !isNaN(parseInt(value)) && value > 0 ? true : false;
}

let perim = (a, b) => {
    return 2 * (a + b);
}

let square = (a, b) => {
    return a * b;
}

export {perim, square};
