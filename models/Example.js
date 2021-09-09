const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({});

module.exports = Forum = mongoose.model("Forum", exampleSchema);
