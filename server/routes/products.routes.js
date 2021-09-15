const express = require('express');

const router = express();

const {findProducts, findSingleProduct, createProduct} = require('../controllers/product.controllers');

//rutas:

//encontrar todos los productos 
router.get('/products',findProducts);

//encontrar un solo producto
router.get('/product/:id',findSingleProduct)

//crear un nuevo producto
router.post('/products/new',createProduct)

module.exports = router;