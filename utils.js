// TODO: allow for file upload to a specifc file so the app takes the url and plays it on play
const fs = require('fs');
const path = require('path');
const folder ='music'
try{
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder)
    }
}catch(err){
    console.error(err)
}
console.log(__dirname);
if(fs.existsSync(folder)){
    let files =  fs.readdirSync(folder).map((filename) =>{
        return path.join(`${__dirname}${folder}`,filename)
    });
    console.log(files);
}