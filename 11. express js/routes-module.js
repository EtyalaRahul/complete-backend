const express = require("express");
const app = express();

const products = [
  { id: 1, label: "product1" },
  { id: 2, label: "product2" },
  { id: 3, label: "product3" },
];

// root route
app.get("/", (req, res) => {
  res.send("welcome to our home page");
});

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get single product by id
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("request parama", req.params);
  const findProduct = products.find((product) => product.id === id);

  if (findProduct) {
    res.json(findProduct);
  } else {
    res.status(404).send("aa product ledu, vere id tho try cheii");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
