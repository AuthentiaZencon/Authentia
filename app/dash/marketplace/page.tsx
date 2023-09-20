'use client'
import { trpc } from "@/app/_trpc/client"
import { Post } from "./components/Post"
import { Input } from "@/components/ui/input";


export default function MarketplacePage() {

    const getRegistrations = trpc.getRegistrations.useQuery()

    return (
        <article className="w-full text-white">

            <section className="flex flex-col min-[500px]:flex-row min-[500px]:space-x-20 min-[500px]:space-y-0 space-y-5">

                <h1 className="text-4xl font-medium">
                    Marketplace
                </h1>
                <Input type="text" placeholder="Search by theme, keywords, etc." className="w-full max-w-[40rem] h-11"/>

            </section>

            <div className="w-full flex items-center pl-10 h-64 mt-10 rounded-md bg-[url('/Images/imagen_marketplace_banner.svg')] bg-cover bg-center" >
                <p className='text-white min-[310px]:text-xl text-lg sm:text-2xl font-semibold max-w-xs'>Empower your creativity with Blockchain: your intellectual property, your rules.</p>
            </div>

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