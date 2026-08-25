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

export default {getProducts,getProductById};