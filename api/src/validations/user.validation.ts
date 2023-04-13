import { z } from 'zod'


export const createUserSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    number: z.string(),
    isAdm : z.boolean().optional()
})