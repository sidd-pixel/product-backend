import pool from '../config/db.js';

const getProducts=async()=>{
    const query='select * from products';
    const {rows}=await pool.query(query);
    return rows;
}

const getProductById=async(id)=>{
    const query='select * from products where id=$1';
    const {rows}=await pool.query(query,[id]);
    return rows[0];  
}

const createProduct=async(name,price)=>{
    const query='insert into products(name,price) values($1,$2) returning *';
    const {rows}=await pool.query(query,[name,price]);
    return rows[0];
}

const updateProduct=async(id,name,price)=>{
    const query='update products set name=$1, price=$2 where id=$3 returning *';
    const {rows}=await pool.query(query,[name,price,id]);
    return rows[0];
}

const deleteProduct=async(id)=>{
    const query='delete from products where id=$1 returning *';
    const {rows}=await pool.query(query,[id]);
    return rows[0];
}

export default {getProducts,getProductById,createProduct,updateProduct,deleteProduct};