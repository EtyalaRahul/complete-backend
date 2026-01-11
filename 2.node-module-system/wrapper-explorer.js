console.log("Node module wrapper demo");

console.log("__filename in we", __filename);
console.log("__filename in we", __dirname);

module.exports.greet = (name) => {
  console.log(`hello ${name}`);
};
