import { Router } from 'express';
import  FoodController  from '../../controllers/food.controller';

const router = Router();

router
    .get('/foods', FoodController.AllFoods)
    .get('/food/:id', FoodController.FoodbyId)
    .post('/foods', FoodController.CreateFood)
    .put('/food/:id', FoodController.UpdateFood)
    .delete('/food/:id', FoodController.DeleteFood)

export { router as FoodRouter };