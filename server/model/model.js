const mongoose = require("mongoose")
const DataSchema = new mongoose.Schema({
id:Number,
name : String,
died : String,
REASON : String,
date: String,
LOCATION : String,

})

const DataModel = mongoose.model("asap",DataSchema)

module.exports = DataModel