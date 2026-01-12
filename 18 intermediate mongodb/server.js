require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/product-routes");
const BookRoutes = require("./routes/book-routes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connection successful");
  })
  .catch((err) => {
    console.log("error while connecting to mongodb database");
  });


//use middle wares
app.use(express.json());


//routing
app.use("/products", productRoutes);
app.use("/reference", BookRoutes);


app.listen(process.env.PORT, () => {
  console.log(`app is listening to the port ${process.env.PORT}`);
});
