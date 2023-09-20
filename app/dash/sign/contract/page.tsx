import { Button } from "@/components/ui/button";

export default function ContractPage() {

    return (
        <article className="w-full text-white">

            <h1 className="text-4xl font-medium">
                Contract
            </h1>
            <span className="text-[#BEBEBE] block mt-2">
                Congratulations, you have successfully signed your legal contract, an this is you
                smart contract address.
            </span>

            <p className="text-white text-lg mt-10">
                This is your smart contract address: <span className="font-semibold">0x2f8E666467f1EF74Cb0E543e92d48090a4c7f4e8</span>
            </p>

            <div className="w-full flex justify-start items-center my-3">
                <a href="https://res.cloudinary.com/dbp8jxvfi/image/upload/v1695161479/journal/ruvfipkaapahmjyuhnap.jpg" download>
                    <Button className="bg-[#D0AE66] w-48">
                        Download image
                    </Button>
                </a>
            </div>

        </article>
    )

}