import prisma from "../database/prismaClient";
import { Request, Response } from "express";

class CartController {
  
  
  static async addFoodToCart(request: Request, response: Response) {
    try {
      const { userId, name, cardNumber, cvv, expiry } = request.body
   
      const newCard = await prisma.card.create({
        data: {
          userId,
          name,
          cardNumber,
          cvv,
          expiry,
        },
      });
      return response.status(201).json(newCard);
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
  
}

export default CartController;