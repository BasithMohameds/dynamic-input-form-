var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/";
var objectid = require("mongodb").ObjectID;
var cors = require("cors");
var port = process.env.PORT || 8080;
const upload = require("express-fileupload");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload());
app.use(cors());
const mongoose = require("mongoose");
const user = require("./user");

mongoose.connect("mongodb://localhost:27017/formdb");

app.get("/", (req, res) => {
  res.send("backend API Running...");
});

app.post("/home", async (req, res) => {
  var dataObject = req.body.mydata;
  var formdata = {
    genid: Math.random(),
    mydata: JSON.parse(dataObject),
  };
  const User = new user(formdata);
  await User.save();
  res.send(User);
});

app.get("/form", (req, res) => {
  user.find(function (err, result) {
    if (err) {
      console.log("error..");
    } else {
      // console.log(result);
      res.json(result);
    }
  });
});

app.get("/form/data/:id", (req, res) => {
  user.find({ _id: objectid(req.params.id) }, function (err, result) {
    if (err) {
      console.log("error..");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log("server connected..");
});
