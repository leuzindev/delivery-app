import { Router } from 'express';
import CartController from '../../controllers/cart.controller';

const router = Router();

router
    .get('/cart/:id', CartController.getUserCart)
    // .get('/category/:name', CategoryController.CategoryByName)
    .post('/cart/:id/cart/items', CartController.addItemToCart)
    // .put('/category/:name', CategoryController.UpdateCategory)
    // .delete('/category/:name', CategoryController.DeleteCategory)

export { router as CartRouter };