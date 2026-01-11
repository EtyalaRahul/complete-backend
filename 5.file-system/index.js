const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder create");
}

const filePath = path.join(dataFolder, "example.txt");

//synchronous way of creating a file

fs.writeFileSync(filePath, "srujana tinnava ra ");
console.log("file created");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("file content", readContentFromFile);

fs.appendFileSync(filePath, "\n This is a new line");

console.log("new file content added");

//async way of creating

const asynceFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asynceFilePath, "hello async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created succes");
  fs.readFile(asynceFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(" async file data from the file", data);
  });
  fs.appendFile(asynceFilePath, "\n idhi kothaline mowa", (err) => {
    if (err) throw err;
    console.log("new line add");
  });
  fs.readFile(asynceFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(" updated async file data from the file", data);
  });
});
