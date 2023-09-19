import { anvilClient } from "@/config/anvil"
import AnvilEmbedFrame from "@anvilco/anvil-embed-frame"

// const exampleData = {
//     title: 'My PDF Title',
//     data: [
//         {
//             label: 'Hello World!',
//         },
//     ],
// }

const payload = {
    "title": "Blank",
    "fontSize": 10,
    "textColor": "#333333",
    "data": {
      "cast49499b5056a411ee9836ff9161276692": {
        "firstName": "Jose",
        "mi": "W",
        "lastName": "Emmanuel"
      },
      "cast4a832cc056a411ee9836ff9161276692": {
        "firstName": "Robin",
        "mi": "W",
        "lastName": "Smith"
      },
      "cast6794ed7056a511ee9836ff9161276692": "testy@example.com",
      "cast6ce6c64056a511ee9836ff9161276692": "testy@example.com"
    },
    'signers': [{
        'id': 'signer1',
        'name': 'Jose Emmanuel',
        'email': 'bayonaj368@gmail.com',
        'routingOrder': 1,
        'fields': [{
            'fieldId': 'sign1'
        }]
    }]
  }


// const payload = {
//     files: [{
//         id: 'imageContract',
//         castEid: '8tvvacHpJpmgHbSsSTvI',
//         filename: 'imageContract.pdf',
//         title: 'Image Contract',
//     }],
//     data: {
//         payloads: {
//             imageContract: {
//                 name: 'Jose Emmanuel',
//                 email: 'bayonaj368@gmail.com',
//             }
//         }
//     }
// }

const templateId = '8tvvacHpJpmgHbSsSTvI'

export const GeneratePDF = async () => {
    // const { statusCode, data } = await anvilClient.generatePDF(exampleData)
    // console.log(statusCode)
    // console.log(data)
    // const base64Data = data.toString('base64')
    // const dataUrl = `data:application/pdf;base64,${base64Data}`

    const { data } = await anvilClient.fillPDF(templateId, payload)
    const base64Data = data.toString('base64')
    const dataUrl = `data:application/pdf;base64,${base64Data}`
    return (
        <>
            {/* <iframe src={dataUrl} width="100%" height="500px" /> */}
            {/* <AnvilEmbedFrame
                iframeURL={dataUrl} */}
                {/* // onEvent={(eventObject) => console.log('Event object:', eventObject)} */}
            {/* /> */}
        </>
    )
}