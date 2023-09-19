import { initTRPC } from '@trpc/server'

// initialize a TRPC server
const t = initTRPC.create();

export const router = t.router;
export const publicProcedures = t.procedure;