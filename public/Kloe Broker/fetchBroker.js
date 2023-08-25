import { userID, email, agentName, x_api_key} from '../Get Genesys APIs/getAccessToken.js'

export function sendHSM(client_name, telefone, fila, elementname, inputParams, HSMmode) {

  const params = [{"default": inputParams[0]}, {"default": inputParams[1]}, {"default": inputParams[2]}, {"default": inputParams[3]}]

  var undefinedInputs = 0

  for (let i = 0; i < params.length; i++)
  {
    if ( params[i].default === undefined || params[i].default === '' )
    {
      undefinedInputs+=1
    }
  }
  params.length -= undefinedInputs

  return new Promise((resolve, reject) => {

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": x_api_key
    };

    const body = {
      "conversationId": `55${telefone}`,
      "hsm": {
        "element_name": `${elementname}`,
        "localizable_params": params
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
        "userName": `${agentName}`,
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