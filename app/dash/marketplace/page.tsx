'use client'
import { trpc } from "@/app/_trpc/client"
import { Post } from "./components/Post"


export default function MarketplacePage() {

    const getRegistrations = trpc.getRegistrations.useQuery()

    return (
        <article className="w-full text-white">

            <h1 className="text-4xl font-medium">
                Marketplace
            </h1>

            <div 
                className="w-full h-64 mt-10 rounded-md bg-pink-400"
            />

            <section className="grid grid-cols-3 gap-5 mt-10">

                {
                    getRegistrations.data?.map((registration) => {
                        return (
                            <Post key={registration.id} post={registration} />
                        )
                    })
                }

            </section>

        </article>
    )

}