var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/pets_db');

var PetSchema = new mongoose.Schema({
   name: { type: String, required: [ true, 'Name is required' ], minlength: [ 3, 'Name must be at least 3 characters long' ]},
   type: { type: String, required: [ true, 'Type is required'], minlength: [ 3, 'Type must be at least 3 characters long' ]},
   description: { type: String, required: [ true, 'Description is required'], minlength: [ 3, 'Description must be at least 3 characters long' ]},
   skills: [{ type: String }],
   likes: { type: Number, default: 0 }
  },{ timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);
