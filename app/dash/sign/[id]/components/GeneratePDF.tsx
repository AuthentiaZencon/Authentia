import { serverClient } from "@/app/_trpc/serverClient";
import { anvilClient } from "@/config/anvil"

const templateId = 'jnLXENmHRcnGiNXZvyAV'

export const GeneratePDF = async ({id}: { id: string }) => {
    const date = new Date()
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
    const registration = await serverClient.getSingleRegistration(Number(id))

    const payload = {
      "title": "Contract",
      "fontSize": 12,
      "fontFamily": "Helvetica",
      "textColor": "#000000",
      "data": {
        "cast7c938170576111ee8a37ab1e5337b19a": formattedDate,
        "cast87a92ec0576111ee8a37ab1e5337b19a": registration?.title,
        "castb99c0c40576111ee8a37ab1e5337b19a": {
          "firstName": registration?.author,
        }
      }
    }
    const { data } = await anvilClient.fillPDF(templateId, payload)
    if (!data) return null
    const base64Data = data.toString('base64')
    const dataUrl = `data:application/pdf;base64,${base64Data}`
    return (
        <>
            <iframe src={dataUrl} width="100%" height="700px" />
        </>
    )
}