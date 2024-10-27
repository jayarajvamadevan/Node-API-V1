const express = require('express');
const Product = require('../models/productModel');
const{PUSHproduct,GETallproduct,GETproductbyID,PUTproductbyID,DELETEproductbyID} =require('../controllers/productController')
const router =express.Router();

//creating(Loading) the  Database PUSH
router.post('/',PUSHproduct)

//Reading from Database all products(product routes)
router.get('/',GETallproduct)

//Reading from Database by ID
router.get('/:id',GETproductbyID)

//Updating Database by ID
router.put('/:id',PUTproductbyID)

//Delete from Database by ID
router.delete('/:id',DELETEproductbyID)

module.exports = router;