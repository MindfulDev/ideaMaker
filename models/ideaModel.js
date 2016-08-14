var mongoose = require("mongoose");

var schemaOptions = {
    collection: "ideas"
};

var schema = new mongoose.Schema({
    title: { type: String, required: true},
    details: [String]
}, schemaOptions);

module.exports = mongoose.model("idea", schema);