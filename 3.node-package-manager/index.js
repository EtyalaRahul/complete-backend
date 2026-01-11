const lodash = require("lodash");

const names = ["rahul", "john", "vinay"];

const capitalized = lodash.map(names, lodash.capitalize);

console.log(capitalized);
