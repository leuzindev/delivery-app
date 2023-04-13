import { Router } from 'express';
import  CardController  from '../../controllers/card.controller';

const router = Router();

router
    .get('/cards', CardController.AllCards)
    .get('/card/:id', CardController.CardbyId)
    .post('/cards', CardController.CreateCard)
    .put('/card/:id', CardController.UpdateCard)
    .delete('/card/:id', CardController.DeleteCard)

export { router as CardRouter };