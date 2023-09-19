import { publicProcedures, router } from "./trpc";
import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const primsa = new PrismaClient();

// create out TRPC router that has our procedures on it
export const appRouter = router({

    registerUser: publicProcedures.input(z.object({
        email:    z.string().email(),
        name:     z.string(),
        password: z.string().min(8).max(100),
        country:  z.string(),
        city:     z.string(),
        phone:    z.string(),
        sector:   z.string(),
    })).mutation(async (opts) => {

        // password = await bcrypt.hash(opts.input.password, 10);
        // const password = await bcrypt

        await primsa.user.create({
            data: {
                email: opts.input.email,
                name: opts.input.name,
                password: opts.input.password,
                country: opts.input.country,
                city: opts.input.city,
                phone: opts.input.phone,
                sector: opts.input.sector,
            }
        })
    })

})

export type AppRouter = typeof appRouter;