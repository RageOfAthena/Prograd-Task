const Mongoose = require("mongoose");

const schema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const schemaModel = Mongoose.model("schemaData", schema);
module.exports = schemaModel;
