const mongoose = require("mongoose");
const Book = require("./books"); 

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Link the books to books collections - array and ability to add to books 
  books: [Book.schema] 
});

module.exports = Users = mongoose.model("users", UsersSchema);
