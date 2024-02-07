const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    died : String,
    reason : String,
    date: String,
    location : String,
})

const DataModel = mongoose.model('asaps', UserSchema)

module.exports = DataModel