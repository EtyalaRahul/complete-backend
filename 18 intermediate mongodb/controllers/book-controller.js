const Author = require("../models/Author");
const Book = require("../models/Book");

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();

    res.status(201).json({
      success: true,
      data: author,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    // check if author exists
    const existingAuthor = await Author.findById(author);
    if (!existingAuthor) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    const book = new Book({ title, author });
    await book.save();

    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

const getBookWithAurhor = async (req, res) => {
  try {
    const books = await Book.findById(req.params.id).populate("author");
    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

module.exports = { createAuthor, createBook, getBookWithAurhor };
