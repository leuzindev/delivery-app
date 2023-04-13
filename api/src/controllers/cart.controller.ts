import prisma from "../database/prismaClient";
import { Request, Response } from "express";

class CartController {
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
    static async addItemToCart(request: Request, response: Response) {
        try {
         

          

        } catch (error) {
            return response.status(500).send();
        }
    }
}

export default CartController;