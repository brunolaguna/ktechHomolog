import { userID, email, agentName } from '../getAccessToken.js'

export function sendHSM(client_name, telefone, fila, elementname, inputParams, HSMmode) {

  return new Promise((resolve, reject) => {

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "3KJwb3vLBM2g1d6vu5xlH58VhDgKrNY93ruVZzWv"
    };

    const body = {
      "conversationId": `55${telefone}`,
      "hsm": {
        "element_name": `${elementname}`,
        "localizable_params": [
          {
            "default": `${inputParams[0]}`
          },
          {
            "default": `${inputParams[1]}`
          },
          {
            "default": `${inputParams[2]}`
          },
          {
            "default": `${inputParams[3]}`
          }
        ]
      },
      "isBot": false,
      "context": {
        "user":{
          "name": `${client_name}`,
          "email": `${email}`,
          "cpf": "",
          "nome": `${client_name}`,
          "customField1": "",
          "midia": "whatsapp",
        },
        "userId": `${userID}`,
        "phone": `55${telefone}`,
        "queue": `${fila}`,
        "modoHSM": `${HSMmode}`,
        "userName": `${agentName}`
      }
    };

    fetch("https://kloe.proa.ai/message/outbound", {

      method: "POST",
      headers: headers,
      body: JSON.stringify(body)

    })

      .then( function (response) { resolve(response.status) } )

      .catch( function (error) { console.log(error) })

  })
} 