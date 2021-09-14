const express = require('express');

const router = express();

const {findProducts, createProducts} = require('../controllers/product.controllers');

//rutas:

//encontrar todos los productos 
router.get('/products',findProducts);

module.exports = router;