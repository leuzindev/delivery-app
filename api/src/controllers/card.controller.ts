import prisma from "../database/prismaClient";
import { Request, Response } from "express";

class CardController {
  static async AllCards(request: Request, response: Response) {
    try {
      const cards = await prisma.card.findMany();
      return response.status(200).json(cards);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CardbyId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const card = await prisma.card.findUnique({
        where: {
          id: id,
        },
      });
      return response.status(200).json(card);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CreateCard(request: Request, response: Response) {
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
  static async UpdateCard(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { userId, name, cardNumber, cvv, expiry } = request.body;
      const updatedCard = await prisma.card.update({
        where: {
          id: id,
        },
        data: { userId, name, cardNumber, cvv, expiry },
      });
      return response.status(204).json(updatedCard);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async DeleteCard(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await prisma.card.delete({
        where: {
          id: id,
        },
      });
      return response.status(204).json({ message: "Card has been deleted" });
    } catch (error) {
      return response.status(500).send();
    }
  }
}

export default CardController;