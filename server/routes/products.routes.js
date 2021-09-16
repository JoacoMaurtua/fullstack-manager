const express = require('express');

const router = express();

const {findProducts, findSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controllers');

//rutas:

//encontrar todos los productos 
router.get('/products',findProducts);

//encontrar un solo producto
router.get('/product/:id',findSingleProduct)

//crear un nuevo producto
router.post('/products/new',createProduct)

//actualizar un producto
router.put('/products/update/:id',updateProduct)

//eliminar un producto
router.delete('/products/delete/:id', deleteProduct)

module.exports = router;