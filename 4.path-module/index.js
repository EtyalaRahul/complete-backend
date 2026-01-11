const path = require("path");
console.log("Directory name : ", path.dirname(__filename));

console.log("file name", path.basename(__filename));

console.log("file extension ", path.extname(__filename));


const joinpath=path.join('user','documents','node','projects') 

console.log("Joined path",joinpath) 

const resolvePath=path.resolve('user','documents','node','projects') 

console.log("resolve path  : ",resolvePath) 


const normalizedpath=path.normalize('/user/.documents/.../node/project') 
console.log("normalized path",normalizedpath)