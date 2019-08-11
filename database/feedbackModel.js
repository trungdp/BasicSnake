//Require Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    name: String,
    content: String,
    created: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('feedbacks', feedbackSchema);