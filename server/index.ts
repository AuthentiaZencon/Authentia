import { publicProcedures, router } from "./trpc";
import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const primsa = new PrismaClient();

// create out TRPC router that has our procedures on it
export const appRouter = router({

    getTodo: publicProcedures.query( async () => {
        return [ 1, 2, 3 ]
    } )

})

export type AppRouter = typeof appRouter;