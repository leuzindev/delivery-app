import express from 'express'
import bodyParser from 'body-parser';
import { UserRouter } from './user/user.routes';
import { FoodRouter } from './foods/food.routes';
import { CardRouter } from './card/card.routes';
import { CategoryRouter } from './category/category.routes';
import { CartRouter } from './cart/cart.routes';



export const app = express()

app.use(bodyParser.json());
app.use(UserRouter)
app.use(FoodRouter)
app.use(CardRouter)
app.use(CategoryRouter)
app.use(CartRouter)