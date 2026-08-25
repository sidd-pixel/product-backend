import express from 'express';
import productController from '../controllers/productController.js';
import validateProduct from '../middleware/validateProduct.js';

const router = express.Router();

router.get('/',productController.getProducts);

router.get('/:id',productController.getProductById);

router.post('/',validateProduct,productController.createProduct);

export default router;
