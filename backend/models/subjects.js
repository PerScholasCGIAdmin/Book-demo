const mongoose = require("mongoose");

const SubjectsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  subject: {
    type: String,  
    required: true,  
  },
});

module.exports = Subjects = mongoose.model("subjects", SubjectsSchema);
