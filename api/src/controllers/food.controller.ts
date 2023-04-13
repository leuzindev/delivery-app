import prisma from "../database/prismaClient";
import { Request, Response } from "express";

class FoodController {
  static async AllFoods(request: Request, response: Response) {
    try {
      const foods = await prisma.food.findMany();
      return response.status(200).json(foods);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async FoodbyId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const food = await prisma.food.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return response.status(200).json(food);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CreateFood(request: Request, response: Response) {
    try {
      const { name, price } = request.body

      const newFood = await prisma.food.create({
        data: {
          name,
          price,
        },
      });
      return response.status(201).json(newFood);
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
  static async UpdateFood(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, price } = request.body;
      const updatedFood = await prisma.food.update({
        where: {
          id: parseInt(id),
        },
        data: { name, price },
      });
      return response.status(204).json(updatedFood);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async DeleteFood(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await prisma.food.delete({
        where: {
          id: parseInt(id),
        },
      });
      return response.status(204).json({ message: "Food has been deleted" });
    } catch (error) {
      return response.status(500).send();
    }
  }
}

export default FoodController;