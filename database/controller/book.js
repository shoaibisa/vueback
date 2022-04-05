const Book = require("../../model/book");
const fileHelper = require("../../utils/fileHelperDelete");

exports.getAllBooks = (req, res, next) => {
  Book.find().then((b) => {
    return res.status(208).json({ books: b, message: "True" });
  });
};

exports.getBookById = (req, res) => {
  const bId = req.params.bId;
  Book.findById(bId).then((b) => {
    if (!b) {
      return res
        .status(208)
        .json({ isError: true, title: "Error", message: "Book not found!" });
    }

    return res.status(200).json({ book: b, message: "success" });
  });
};

exports.createBook = (req, res, next) => {
  if (!req.file) {
    return res
      .status(208)
      .json({ isError: true, title: "Error", message: "Image is not given" });
  }

  const { name, description } = req.body;

  const b1 = new Book({
    name,
    description,
    photo: req.file.filename,
  });

  b1.save((err, b) => {
    if (err || !b) {
      if (req.file) {
        const pathImg = "upload/images/" + req.file.filename;
        fileHelper.deleteFiles(pathImg);
      }
      return res.status(208).json({
        isError: true,
        title: "Error",
        message: "Error ocurd while saving db",
        error: err,
      });
    } else {
      return res.status(200).json({
        isError: false,
        title: "Success",
        message: "Book is added",
      });
    }
  });
};
