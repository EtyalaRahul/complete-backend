const Book = require("../models/Book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books feteched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in the collection",
      });
    }
  } catch (er) {
    console.log(er);
    res.status(500).json({
      success: false,
      message: "Error while fetching books",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookId);
    if (!bookDetailsByID) {
      res.status(404).json({
        success: false,
        message: "book with the current is not found please try with a new id",
      });
    }
    res.status(200).json({
      success: true,
      message: "book fetched success",
      data: bookDetailsByID,
    });
  } catch (err) {
    console.log(er);
    res.status(500).json({
      success: false,
      message: "Error while fetching books",
    });
  }
};

const addnewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching books",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFOrmData = req.body;
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      updatedBookFOrmData,
      { new: true }
    );
    if (!updatedBook) {
      res.status(400).json({
        success: false,
        message: "Book not found to update",
      });
    }
    res.status(200).json({
      success: true,
      message: "book updated success",
      data: updatedBook
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching books",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentId = req.params.id;
    const DeletedBook = await Book.findByIdAndDelete(getCurrentId);
    if (!DeletedBook) {
      res.status(404).json({
        success: false,
        message: "book is not found with this id",
      });
    }
    res.status(200).json({
      success: "book is deleted",
      data: deleteBook,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching books",
    });
  }
};
module.exports = {
  getAllBooks,
  getSingleBookById,
  addnewBook,
  updateBook,
  deleteBook,
};
