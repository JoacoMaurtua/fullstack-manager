const express = require('express');

const router = express();

const {findProducts, createProduct} = require('../controllers/product.controllers');

//rutas:

//encontrar todos los productos 
router.get('/products',findProducts);

//crear un nuevo producto
router.post('/products/new',createProduct)

module.exports = router;