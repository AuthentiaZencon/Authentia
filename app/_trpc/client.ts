import { createTRPCReact } from '@trpc/react-query'
import { type AppRouter } from '@/server'

// create our TRPC react client using the react query adapter library
export const trpc = createTRPCReact<AppRouter>({});