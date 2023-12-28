const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
})

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;