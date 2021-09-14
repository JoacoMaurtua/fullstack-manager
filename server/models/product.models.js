const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title:{
    type: String,
    required:[true, 'title is required!']
  },

  price:{
    type: Number,
    required:[true, 'price is required!']
  },

  description:{
    type: String,
    required:[true, 'description required!']
  }

},{timestamps:true});

const Product = mongoose.model('Products',productSchema);

module.exports = Product;

