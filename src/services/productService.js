import products from '../models/productModel.js';
import productRepository from '../repositories/productRepository.js';

const getProducts=async()=>{
    const products=await productRepository.getProducts();
    return products;
}

const getProductById=async(id)=>{
    const product=await productRepository.getProductById(id);
    return product;
}

const createProduct=(name,price)=>{

    
    const newProduct={
        id: products.length+1,
        name,
        price
    }
    products.push(newProduct);

    return newProduct;
}

export default {createProduct,getProducts,getProductById};