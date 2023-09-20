'use client'
import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";

const data = [
    {Title:"Imagen chida",
     Description:"Two elegant sports cars glide effortlessly along a tranquil avenue lined with tall trees. The winding road disappears into the distance, inviting an adventure filled with speed and luxury. A perfect setting for lovers of speed and natural beauty",
    Price:"$10",
    Agreements:"The buyer does NOT own the asset. The ownership and intellectual property rights of the image remain with the seller, and are not transferred to the buyer.",
    Licence:"For personal and professional use. You cannot resell or redistribute this image in their original or modified state. Read full license"},
]


export default function Marketplace () {

    return(
        <>
            <article className="w-full text-white">

                <section className="flex space-x-20">

                    <h1 className="text-4xl font-medium">
                        Marketplace
                    </h1>

                    <Input type="text" placeholder="Search by theme, keywords, etc." className="w-full max-w-[40rem] h-11"/>


                </section>


                <section className="w-full h-12 mt-10 flex space-x-20 flex-col sm:flex-row">
                    
                    <div className="bg-slate-500 h-80 w-28 sm:w-[450px]  text-white flex justify-center items-center">
                        <p>24x500px</p>
                    </div>
                    
                    <div className="">
                        <h2 className="text-3xl">
                            
                        </h2>
                        <span className="text-[#BEBEBE] block mt-2">
                            First, you will need to fill the data of your digital asset.
                        </span>
                    </div>



                </section>

            </article>
        </>
    )

}