const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addnewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller.js");

//create express router
const router = express.Router();

//all the routes that are related to books only

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookById);
router.post("/add", addnewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports=router;