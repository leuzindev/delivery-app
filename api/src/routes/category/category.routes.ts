import { Router } from 'express';
import  CategoryController  from '../../controllers/category.controller';

const router = Router();

router
    .get('/categories', CategoryController.AllCategories)
    .get('/category/:name', CategoryController.CategoryByName)
    .post('/categories', CategoryController.CreateCategory)
    .put('/category/:name', CategoryController.UpdateCategory)
    .delete('/category/:name', CategoryController.DeleteCategory)

export { router as CategoryRouter };