'use client'
import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { trpc } from "@/app/_trpc/client";
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";



export default function Marketplace ({ params }: { params : { id: string}}) {
    const id = params.id
    const getRegistration = trpc.getSingleRegistration.useQuery(Number(id))
    const router = useRouter()

    return(
        <>
            <article className="w-full text-white">

                <section className="flex flex-col min-[500px]:flex-row min-[500px]:space-x-20 min-[500px]:space-y-0 space-y-5">

                    <h1 className="text-4xl font-medium">
                        Marketplace
                    </h1>

                    <Input type="text" placeholder="Search by theme, keywords, etc." className="w-full max-w-[40rem] h-11"/>


                </section>


                <section className="w-full h-full mt-10 flex sm:space-x-20 flex-col sm:flex-row">
                    
                    <div className="h-min-[18rem] bg-[#111111] sm:w-min-[450px]  sm:w-1/2  text-white flex justify-center items-center">
                        <img className="flex justify-center items-center w-full h-full object-contain" src={getRegistration.data?.url} />
                    </div>
                
                    <div className="flex flex-col pt-10 h-full h-min-[18rem] w-full sm:w-1/2">
                             <h2 className="text-3xl">
                                {getRegistration.data?.title}
                            </h2>
                            <span className="text-[#B0B0B0] block mt-2 text-sm">
                                Sold by:{getRegistration.data?.author}
                            </span>
                            <span className="text-[#BEBEBE] block mt-10 break-all">
                                {getRegistration.data?.description}
                            </span>

                            <div className="flex space-x-7 w-full h-full items-end justify-end mt-5">

                                <p className="text-white text-lg font-medium">${getRegistration.data?.id} USD</p>

                                <Button className='justify-center items-center bg-[#D0AE66]  py-1 px-2 flex text-base  w-28'
                                    onClick={() => router.push(`/dash/sign/${getRegistration.data?.id}`)}
                                >
                                    Buy
                                </Button>

                            </div>

                            <hr className="w-full bg-white mt-5"/>

                    </div>

                </section>

                <section className="flex flex-col min-[500px]:flex-row h-full w-full min-[500px]:space-x-20 space-y-20 min-[500px]:space-y-0 mt-10">

                    <div className="flex flex-col w-full sm:w-1/2 h-full space-y-5 ">
                        <h2 className="text-xl">
                            Contract agreements
                        </h2>
                        <div className="flex-col  space-y-5 pl-10">
                            <p> 
                                The buyer does NOT own the asset. The ownership and intellectual property rights of the image remain with the seller, and are not transferred to the buyer.
                            </p>
                            <p> 
                                The buyer CANNOT modify the image in any way, including but not limited to altering, editing, cropping, or overlaying additional elements onto the image. The image must remain in its original state as provided by the seller.
                            </p>
                            <p> 
                                Prior to finalizing this agreement, the buyer must declare the intended use of the asset. This declaration should specify the purpose for which the image will be utilized, such as for a personal blog, a commercial website, a print publication, or any other intended use.
                            </p>
                            <p> 
                                The buyer agrees to use the asset only for the declared purpose and in compliance with all applicable laws and regulations. Any use of the asset beyond the declared purpose or in violation of legal requirements is strictly prohibited.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 h-full space-y-5 ">
                        <h2 className="text-xl">
                        License
                        </h2>
                        <div className="flex-col  space-y-5">
                            <p> 
                                For personal and professional use. You cannot resell or redistribute this image in their original or modified state. Read full license
                            </p>

                        </div>

                    </div>

                </section>

            </article>
        </>
    )

}