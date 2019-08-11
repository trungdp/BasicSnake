//Require Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    a_string: String,
    a_date: Date
});



module.exports = userSchema;