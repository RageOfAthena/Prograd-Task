const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const schemaModel = require("./schema");

const DB =
  "mongodb+srv://admin:1234@cluster0.lgfajor.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

mongoose.connect(DB).then(() => console.log("Connection successfull"));

app.post("/save", async (req, res) => {
  const data = new schemaModel({
    email: req.body.email,
    query: req.body.query,
  });

  try {
    await data.save();
  } catch (err) {
    console.log("Error");
  }
});

app.listen(3001, (req, res) => {
  console.log("Listening on port 3001");
});
