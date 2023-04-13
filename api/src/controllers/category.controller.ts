
import prisma from "../database/prismaClient";
import { Request, Response } from 'express';
import { Prisma } from ".prisma/client";

class CategoryController {

  static async AllCategories(request: Request, response: Response) {
    try {
      const categories = await prisma.category.findMany({
        include: {
          foods: true
        }
      })
      return response.status(200).json(categories)

    } catch (error) {
      return response.status(500).send()
    }
  }
  static async CategoryByName(request: Request, response: Response) {
    try {
      const { name } = request.params
      const category = await prisma.category.findUnique({
        where: {
          name: name
        }
      })
      return response.status(200).json(category)

    } catch (error) {
      return response.status(500).send()
    }
  }
  static async CreateCategory(request: Request, response: Response) {
    try {

      const { name } = request.body

      const newCategory = await prisma.category.create({
        data: {
          name,
        },
      }
      )
      return response.status(201).json(newCategory)

    } catch (error) {
      console.log(error)
      return response.status(500).send()
    }
  }
  static async UpdateCategory(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name } = request.body
      const updatedCategory = await prisma.category.update({
        where: {
          name: name
        },
        data: { name }
      })
      return response.status(204).json(updatedCategory)

    } catch (error) {
      return response.status(500).send()
    }
  }
  static async DeleteCategory(request: Request, response: Response) {
    try {
      const { name } = request.params;
      await prisma.category.delete({
        where: {
          name: name
        }
      })
      return response.status(204).json({ message: "Category has been deleted" })

    } catch (error) {
      return response.status(500).send()
    }
  }
}

export default CategoryController