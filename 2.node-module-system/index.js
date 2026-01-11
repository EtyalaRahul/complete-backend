// module.exports  - > export
//require -> import
const firstModule = require("./first-module");

console.log(firstModule.add(2, 4));
try {
  console.log("trying to divided by zero");
  let res = firstModule.divide(0, 10);
  console.log(res);
} catch (err) {
  console.log("caught an error", err.message);
} 






//module wrapper 
// {
//   function(exports,require,module,__filename,__dirname){
//     //your module code goes here
//   }
// }
