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



const getProducts=(req,res)=>{
    res.json(productService.getProducts());
}

const getProductById=(req,res)=>{
    const productId=parseInt(req.params.id,10);
    const product=productService.getProductById(productId);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: "Product not found"});
    }
}


const createProduct=(req,res)=>{

    const {name,price}=req.body;

    if(typeof price!=='number'){
        return res.status(400).json({message:"Product price must be a number"});
    }

    if(typeof name!=='string'){
        return res.status(400).json({message:"Product name must be a string"});
    }

    if(!name.trim()){
        return res.status(400).json({message:"Product name is required"});
    }


    if(price<=0){
        return res.status(400).json({message:"Product price cannot be negative"});
    }


    const product=productService.createProduct(name,price);
    res.status(201).json(product);
}

export default {getProducts, getProductById, createProduct};   