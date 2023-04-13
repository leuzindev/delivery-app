import prisma from "../database/prismaClient";
import { Request, Response } from "express";
import { createUserSchema } from "../validations/user.validation";

import { generateHash } from "../utils/hashFunction";

class UserController {
  static async AllUsers(request: Request, response: Response) {
    try {
      const users = await prisma.user.findMany({
        include: {
          Card: true,
          Cart: true,
        }
      });
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async UserbyId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CreateUser(request: Request, response: Response) {
    try {
      const { username, email, number, isAdm } = createUserSchema.parse(
        request.body
      );
      const password = generateHash(request.body.password);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password,
          number,
          isAdm,
        },
      });
      return response.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
  static async UpdateUser(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { username, email, password, number, isAdm } = request.body;
      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: { username, email, password, number, isAdm },
      });
      return response.status(204).json(updatedUser);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async DeleteUser(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
      return response.status(204).json({ message: "User has been deleted" });
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async getUserCart(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                Cart: true
            }
        });
        return response.status(200).json(user?.Cart);

    } catch (error) {
        return response.status(500).send();
    }
}
}

export default UserController;