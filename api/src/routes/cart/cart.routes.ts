import { Router } from 'express';
import CartController from '../../controllers/cart.controller';

const router = Router();

router
   
    .post('/cart/:id', CartController.addFoodToCart)
    

export { router as CartRouter };