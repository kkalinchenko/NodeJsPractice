function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function random(min, max, delay, callback){
    if(min < max){
        setTimeout(() => {
            callback(getRandomInt(min, max));
        }, delay)
    } else {
        callback(new Error('Incorrect range'));
    }
}