const express = require("express");
const router = express.Router();
const upload = require("../utils/file");
const bookCon = require("../database/controller/book");
// router.post("/creating", req);

router.get("/books", bookCon.getAllBooks);
router.get("/book/:bId", bookCon.getBookById);
router.get("/", (req, res) => {
  res.send("Good");
});
router.post("/book", upload.single("book"), bookCon.createBook);

module.exports = router;
