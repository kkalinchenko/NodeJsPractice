const stream = require("stream");

class StringTransform extends stream.Transform {
   constructor() {
      super({objectMode: true});
   }
   _transform(chunk, encoding, callback) {
      let res = chunk.replace(/\r|\n| /g, '').toLowerCase();
      this.push(res);
      callback();
   } 
}


module.exports = StringTransform;