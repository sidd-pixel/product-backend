
import productRepository from '../repositories/productRepository.js';

const getProducts=async()=>{
    const products=await productRepository.getProducts();
    return products;
}

const getProductById=async(id)=>{
    const product=await productRepository.getProductById(id);
    return product;
}

const createProduct=async(name,price)=>{

    const newProduct=await productRepository.createProduct(name,price);
    return newProduct;
}

export default {createProduct,getProducts,getProductById};