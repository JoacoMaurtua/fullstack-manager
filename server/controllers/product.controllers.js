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

//Actualizar un producto en la db
const updateProduct = (req,res) =>{
  Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
         .then(result => res.json({data:result}))
         .catch(error=>{
           res.json({error:error, message:'Could not update product'})
           res.sendStatus(500);
         })
}

//Eliminar un producto de la db
const deleteProduct =(req,res) =>{
  Product.deleteOne({_id:req.params.id})
         .then(result => res.json({data:result}))
         .catch(error=>{
           res.json({error:error, message:'Could not delete product'});
           res.sendStatus(202);
         })
}

module.exports = {findProducts, findSingleProduct, createProduct, updateProduct, deleteProduct};