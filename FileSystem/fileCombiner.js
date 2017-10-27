const fs = require('fs');

let mainFile = process.argv[2];

for(let i = 3; i < process.argv.length; i++){
    fs.readFile(process.argv[i], "utf8", (error, data) => {
        if (error) {
           throw error;
        }

        fs.appendFile(mainFile, '\n' +  data, (error) => {
            if(error){
                throw error;
            }
        })
        
     });
     
    
}

