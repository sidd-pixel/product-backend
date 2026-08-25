import express from 'express';
import productRoutes from './src/routes/productRoutes.js';
import loggerMiddleware from './src/middleware/loggerMiddleware.js';
import errorMiddleware from './src/middleware/errorMiddleware.js';

const app=express();

app.use(express.json());

app.use(loggerMiddleware);

app.use('/products',productRoutes);

app.use(errorMiddleware);

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


// app.get('/',(req,res)=>{
//     res.send("hello from backend")
// })

// app.get('/products',(req,res)=>{
//     res.json(products);
// })

// app.get('/products/:id',(req,res)=>{
//     // const productId=parseInt(req.params.id,10);
//     // for(let i=0;i<products.length;i++){
//     //     if(products[i].id===productId){
//     //         res.json(products[i]);
//     //         return;
//     //     }
//     // }
//     // // res.status(404).json({message:"Product not found"});
//     // res.status(404).send("Product not found");

//     const productId=parseInt(req.params.id,10);
//     const product=products.find(prod=>prod.id===productId);
//     if(product){
//         res.json(product);
//     }else{
//         res.status(404).json({message:"Product not found"});
//     }
// })

// // app.post('/products',(req,res)=>{
// //     const newProduct={
// //         id:products.length+1,
// //         ...req.body
// //     };
// //     // if(!newProduct.name || !newProduct.price){
// //     //     return res.status(400).json({message:"Name and price are required"});
// //     // }
// //     // if(newProduct.price<0){
// //     //     return res.status(400).json({message:"Price cannot be negative"});
// //     // }
// //     // if(typeof newProduct.name!=='string' || typeof newProduct.price!=='number'){
// //     //     return res.status(400).json({message:"Invalid data type for name or price"});
// //     // }

// //     if (!newProduct.name) {
// //     return res.status(400).json({
// //         message: "Name is required"
// //     });
// // }

// //     if (newProduct.price === undefined) {
// //         return res.status(400).json({
// //             message: "Price is required"
// //         });
// //     }

// //     if(newProduct.price<=0){
// //         return res.status(400).json({message:"Price cannot be negative"});
// //     }
// //     products.push(newProduct);
// //     res.status(201).json(newProduct);
// // })


// //a better way to write the post request is as follows
// app.post('/products', (req, res) => {

//     const { name, price } = req.body;

//     if (!name.trim()) {
//         return res.status(400).json({
//             message: "Name is required"
//         });
//     }

    //     if (typeof name !== 'string') {
    //         return res.status(400).json({
    //             message: "Name must be a string"
    //         });
    //     }

//     if (typeof price !== 'number') {
//         return res.status(400).json({
//             message: "Price must be a number"
//         });
//     }

//     if (price <= 0) {
//         return res.status(400).json({
//             message: "Price must be greater than 0"
//         });
//     }

//     const newProduct = {
//         id: products.length + 1,
//         name,
//         price
//     };

//     products.push(newProduct);

//     res.status(201).json(newProduct);
// });



app.listen(3000,()=>{
    console.log("server started")
})