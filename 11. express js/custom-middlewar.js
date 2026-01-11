const express = require("express");
const app = express();

const reqTimeStampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from request metho ${req.method} to ${req.url}`);
  next();
};

app.use(reqTimeStampLogger);
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send(" about home page");
});

const port = 3000;
app.listen(port, () => {
  console.log("app vintundi");
});
