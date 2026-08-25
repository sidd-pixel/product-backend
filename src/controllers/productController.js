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



const getProducts=async(req,res)=>{
    const products=await productService.getProducts();
    res.json(products);
}

const getProductById=async(req,res)=>{
    const productId=parseInt(req.params.id,10);
    const product=await productService.getProductById(productId);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: "Product not found"});
    }
}


const createProduct=(req,res)=>{

    const {name,price}=req.body;

    const product=productService.createProduct(name,price);
    res.status(201).json(product);
}

export default {getProducts, getProductById, createProduct};   