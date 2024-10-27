const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
//creating(Loading) function
const PUSHproduct = asyncHandler(async(req,res) => {
    try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
    }
    catch(error){
        console.log(error.message);
        res.status(500);
        throw new Error(error.message);
    }
})
//Reading from Database all products function
const GETallproduct = asyncHandler(async(req,res) => {
    try{
    const products = await Product.find({});
    res.status(200).json(products);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//Reading from Database by ID
const GETproductbyID = asyncHandler(async(req,res) => {
    try{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//Updating Database by ID
const PUTproductbyID = asyncHandler(async(req,res) => {
    try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product){
        res.status(404);
        throw new Error(`Cannot find any product with ID ${id}`);
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//Delete from Database by ID
const DELETEproductbyID = asyncHandler(async(req,res) => {
    try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        res.status(404);
        throw new Error(`Cannot find any product with ID ${id}`);
    }
    res.status(200).json(product);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
module.exports ={PUSHproduct,GETallproduct,GETproductbyID,PUTproductbyID,DELETEproductbyID}