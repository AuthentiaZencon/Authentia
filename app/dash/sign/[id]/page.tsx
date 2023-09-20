import { Checkbox } from "@/components/ui/checkbox"
import { GeneratePDF } from "./components/GeneratePDF"
import { Button } from "@/components/ui/button"

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

            <form className="mt-5">

                <div className="flex justify-start items-center gap-5">
                    <p className="text-[#B0B0B0]">
                        I confirm that I have read and fully understood the attached contract in its entirety. I accept all the conditions, terms, and obligations outlined therein.
                        I understand that my signature on this contract will constitute a legally binding agreement between the involved parties, and I commit to abide by all the provisions set forth therein.
                    </p>
                    <Checkbox 
                        className="bg-white"
                        required
                    />
                </div>


                <div className="w-full flex justify-center items-center my-3">
                    <Button
                        className="bg-[#D0AE66] w-48"
                    >
                        Confirm purchase
                    </Button>
                </div>
            </form>

        </article>
    )

}