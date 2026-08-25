
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

const updateProduct=async(id,name,price)=>{
    const product=await productRepository.getProductById(id);
    if(!product){
        return null;
    }
    if(name===undefined){
        name=product.name;
    }
    if(price===undefined){
        price=product.price;
    }
    const updatedProduct=await productRepository.updateProduct(id,name,price);
    return updatedProduct;
}

export default {createProduct,getProducts,getProductById,updateProduct};