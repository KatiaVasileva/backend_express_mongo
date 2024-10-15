const router = require("express").Router();

const { getAllBooks, createBook, getBookById, updateBookById, deleteBookById } = require("../controllers/books");

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.get("/books/:book_id", getBookById);
router.patch("/books/:book_id", updateBookById);
router.delete("/books/:book_id", deleteBookById);

module.exports = router;