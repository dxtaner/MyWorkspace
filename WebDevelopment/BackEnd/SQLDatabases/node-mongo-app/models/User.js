const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  department: String,
  salary: Number,
});

module.exports = mongoose.model("User", userSchema);
