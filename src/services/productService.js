import products from '../models/productModel.js';

const getProducts=()=>{
    return products;
}

const getProductById=(id)=>{
    const product=products.find(prod=>prod.id===id);
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