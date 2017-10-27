var operations = {
    '+': function(a, b){
        return Number(a) + Number(b);
    },
    '*': function(a, b){
        return Number(a) * Number(b);
    }
}
function isNumber(value){
    return !isNaN(parseInt(value)) ? true : false;
}
function checkOperation(op){
    return (op in operations) ? true : false;
}
function calc(a = 0, op = '+', b = 0){
    return operations[op](a, b);
}

function start (a, op, b) {
    try{
        if(!isNumber(a) || !isNumber(b)){
            throw new Error('Type of value is not a number');
        } else if(!checkOperation(op)){
            throw new Error('Incorrect operation');
        } else{
            return calc(a, op, b);
        }
    } catch(error){
        console.log(error);
    }
}

console.log(start(process.argv[2], process.argv[3], process.argv[4]));
