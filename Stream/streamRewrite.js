const StringTransform = require('./stream');
const fs = require('fs');

let strTranform = new StringTransform();
let readableStream = fs.createReadStream("./input.txt", "utf8");
let writeableStream = fs.createWriteStream("./output.txt");


readableStream.pipe(strTranform).pipe(writeableStream);
