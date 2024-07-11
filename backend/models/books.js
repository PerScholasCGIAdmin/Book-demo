const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subject: {
    type: String,    
  },
});
module.exports = Book = mongoose.model("book", BookSchema);
