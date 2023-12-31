export function sendHSM(client_name, email, telefone, fila, elementname, inputParams, userId, variaveis) {

  return new Promise((resolve, reject) => {

    /* For debug
    console.log(inputParams)
    console.log('Nomde do cliente: ',client_name)
    console.log('E-mail: ',email)
    console.log('userID: ',userId)
    console.log('Tel: ',telefone)
    console.log('Fila: ',fila)
    */

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
          "SF_URLPop": "0016e00002wOkJMAA0",
          "email": `${email}`,
          "cpf": "",
          "nome": `${client_name}`,
          "customField1": "",
          "midia": "whatsapp",
        },
        "userId": `${userId}`,
        "phone": `55${telefone}`,
        "queue": `${fila}`
      }
    };

    fetch("https://kloe.proa.ai/message/outbound", {

      method: "POST",
      headers: headers,
      body: JSON.stringify(body)

    })

      .then( function (response) { resolve(response.status) } )

      .catch( function (error) { console.log(error); }) ;

  })
} 