const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  genid: Number,
  mydata: [
    {
      labelname: String,
      labeltype: String,
      textboxval: String,
      texttype: String,
    },
  ],
});
module.exports = mongoose.model("user", userSchema);
