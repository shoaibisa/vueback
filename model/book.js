const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
