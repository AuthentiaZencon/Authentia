'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@radix-ui/react-checkbox"
import { useRouter } from "next/navigation"

export const ContractFrom = () => {

    const router = useRouter()

    return(
        <div className="mt-5">

            <div className="flex justify-start items-center gap-5">
                <p className="text-[#B0B0B0]">
                    I confirm that I have read and fully understood the attached contract in its entirety. I accept all the conditions, terms, and obligations outlined therein.
                    I understand that my signature on this contract will constitute a legally binding agreement between the involved parties, and I commit to abide by all the provisions set forth therein.
                </p>
                {/* <Checkbox 
                    className="bg-white"
                    required
                /> */}
            </div>


            <div className="w-full flex justify-start items-center my-3">
                <Button
                    className="bg-[#D0AE66] w-48"
                    onClick={() => router.push('/dash/sign/contract')}
                >
                    Confirm purchase
                </Button>
            </div>
        </div>
    )

}