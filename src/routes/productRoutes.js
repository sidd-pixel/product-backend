import express from 'express';
import productController from '../controllers/productController.js';
import validateProduct from '../middleware/validateProduct.js';
import validateProductUpdate from '../middleware/validateProductUpdate.js';

const router = express.Router();

router.get('/',productController.getProducts);

router.get('/:id',productController.getProductById);

router.post('/',validateProduct,productController.createProduct);

router.patch('/:id',validateProductUpdate,productController.updateProduct);

router.delete('/:id',productController.deleteProduct);

export default router;
