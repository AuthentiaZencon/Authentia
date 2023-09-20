import { Checkbox } from "@/components/ui/checkbox"
import { GeneratePDF } from "./components/GeneratePDF"
import { Button } from "@/components/ui/button"
import { ContractFrom } from "./components/ContractFrom"

export default function SignPage({ params }: { params : { id: string}}) {

    const id = params.id

    return (
        <article className="w-full text-white">

            <h1 className="text-4xl font-medium">
                Contract review
            </h1>
            <span className="text-[#BEBEBE] block mt-2">
                First, you will need to fill the data of your digital asset.
            </span>

            <section className="overflow-hidden mt-10">
                <GeneratePDF id={id}/>
            </section>

            <ContractFrom />

        </article>
    )

}