const mongose = require('mongoose')

const UserSchema = new mongose.Schema({
    name : String,
    died : String,
    REASON : String,
    DATE: String,
    LOCATION : String,
})

const DataModel = mongose.model('asap', UserSchema)

module.exports = DataModel