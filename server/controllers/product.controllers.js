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

const createProducts = (req,res) =>{
  Product.create(req.body)
        .then(results => res.json({data:results}))
        .catch(error=>{
          res.json({error:error, message:'Could not create a product'})
          res.sendStatus(500)
        })
}

module.exports = {findProducts,createProducts};