const Book = require("../models/book");

const getAllBooks = (request, response) => {
    Book.find({})
      .then((data) => {
        response.set(200).set("Content-Type", "application/json").send(data);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  };
  
  const createBook = (request, response) => {
    const data = request.body;
    Book.create(data)
      .then((book) => {
        response.status(201).set("Content-Type", "application/json").send(book);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  };
  
  const getBookById = (request, response) => {
    const { book_id } = request.params;
    Book.findById(book_id)
      .then((book) => {
        response.status(200).set("Content-Type", "application/json").send(book);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  };
  
  const updateBookById = (request, response) => {
    const { book_id } = request.params;
    const data = request.body;
    Book.findByIdAndUpdate(book_id, data, {
      new: true,
      runValidators: true,
    })
      .then((book) => {
        response.status(201).set("Content-Type", "application/json").send(book);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  };
  
  const deleteBookById = (request, response) => {
    const { book_id } = request.params;
    Book.findByIdAndDelete(book_id)
      .then((book) => {
        response.status(200).send("Done");
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  };
  
  module.exports = {
    getAllBooks,
    createBook,
    getBookById,
    updateBookById,
    deleteBookById,
  };
  