//Require Mongoose
var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  account: String,
  date: Date
});

// Compile model from schema
module.exports = mongoose.model('user', userSchema );
