const EventEmitter = require("events");

class Rabbit extends EventEmitter {
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }

    changeCoordinates(){
        function getRandomInt() {
           return Math.floor((Math.random() * 10) + 1);
        }
        this.x = getRandomInt();
        this.y = getRandomInt();

        this.emit('rabbitMoved', this.getChangedCoordinates());
    }

    getChangedCoordinates(){
        return {
            x : this.x,
            y : this.y
        }
    }
    
}

class Hunter extends EventEmitter {
    showCoordinates(coord){
        console.log(coord);
    }
}
var rabbit = new Rabbit(1,2);
var hunter = new Hunter();

ra.on('rabbitMoved', (coords) => {
    hunter.showCoordinates(coords);
} )

rabbit.changeCoordinates();

rabbit.changeCoordinates();
