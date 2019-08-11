//Require Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    score: Number,
    created: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', userSchema);