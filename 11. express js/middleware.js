const express = require("express");
const app = express();

// define middle ware function
const myFirstMiddleware = (req, res, next) => {
  console.log("this middle ware funcion will on every request");
  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send(" about home page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
