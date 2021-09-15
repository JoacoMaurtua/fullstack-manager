const Product = require('../models/product.models');

//Devolver todos los productos de la db
const findProducts = (req,res) =>{
  Product.find({})
         .then(results => res.json({data:results}))
         .catch(error=>{
           res.json({error:error, message:'Products not found'})
           res.sendStatus(404)
         })
}

//Devolver un solo producto en la db
const findSingleProduct = (req,res) =>{
  Product.findOne({_id:req.params.id})
         .then(results => res.json({data:results}))
         .catch(error=>{
           res.json({error:error, message:'Product not found'})
           res.sendStatus(404);
         })
}

//Crear un producto en la db
const createProduct = (req,res) =>{
  Product.create(req.body)
        .then(results => res.json({data:results}))
        .catch(error=>{
          res.json({error:error, message:'Could not create a product'})
          res.sendStatus(500)
        })
}

module.exports = {findProducts, findSingleProduct, createProduct};