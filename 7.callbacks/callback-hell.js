const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error while reading file : ", err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.log("error writeing file", err);
      return;
    }
    console.log("data written to the new file");
    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("error while reading file", err);
      }
      console.log(data);
    });
  });
});
