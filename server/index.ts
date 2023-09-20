import { publicProcedures, router } from "./trpc";
import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const prisma = new PrismaClient();

// create out TRPC router that has our procedures on it
export const appRouter = router({

    getRegistrations: publicProcedures.query(async () => {
        return await prisma.post.findMany();
    }),
    getSingleRegistration: publicProcedures.input(z.number()).query(async(opts) => {
        const post = await prisma.post.findUnique({
            where: {
                id : opts.input
            }
        })
         return post
    }),
    addRegistration: publicProcedures.input(z.object({
        title: z.string(),
        type:  z.string(),
        author: z.string(),
        description: z.string(),
        url: z.string(),
    })).mutation(async (opts) => {
        const post = await prisma.post.create({
            data: {
                title: opts.input.title,
                type: opts.input.type,
                author: opts.input.author,
                description: opts.input.description,
                url: opts.input.url,
            }
        })
        return post;
    })

})

export type AppRouter = typeof appRouter;