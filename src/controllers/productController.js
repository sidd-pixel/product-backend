// const products=[
//     {
//         id:1,
//         name:"iphone 17",
//         price:80000
//     },
//     {
//         id:2,
//         name:"samsung s23",
//         price:70000
//     },
//     {
//         id:3,
//         name:"google pixel 11",
//         price:90000
//     }
// ]

import productService from '../services/productService.js';
import asyncHandler from '../utils/asyncHandler.js';



const getProducts=asyncHandler(async(req,res)=>{
    const products=await productService.getProducts();
    res.json(products);
});

const getProductById=asyncHandler(async(req,res)=>{
    const productId=parseInt(req.params.id,10);
    const product=await productService.getProductById(productId);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: "Product not found"});
    }
});


const createProduct=asyncHandler(async(req,res)=>{

    const {name,price}=req.body;

    const product=await productService.createProduct(name,price);
    res.status(201).json(product);
});

const updateProduct=asyncHandler(async(req,res)=>{
    const productId=parseInt(req.params.id,10);

    const {name,price}=req.body;

    const product=await productService.updateProduct(productId,name,price);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }

    res.json(product);
})

const deleteProduct=asyncHandler(async(req,res)=>{
    const productId=parseInt(req.params.id,10);

    const product= await productService.deleteProduct(productId);
    if(!product){
        return res.status(404).json({
            message:"Product not found"
        })
    }
    res.status(204).json({message:"Product deleted successfully"});
})

export default {getProducts, getProductById, createProduct,updateProduct, deleteProduct};   