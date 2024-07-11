const mongoose = require("mongoose");

/* Replace <username> <password> with your database details */
const db =  "mongodb+srv://<Username>:<password>@pscluster.hlac4v1.mongodb.net/?retryWrites=true&w=majority&appName=PSCluster";
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
