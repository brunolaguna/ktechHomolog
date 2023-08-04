async function sendWorkFlow(values) {

  return new Promise((resolve, reject) => {
    
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const day = currentDate.getDate()

    const platformClient = require("purecloud-platform-client-v2");
    const client = platformClient.ApiClient.instance;
    client.setEnvironment(platformClient.PureCloudRegionHosts.sa_east_1);
    client.setAccessToken("yWGasok-HPztDjzdKQ9TXWBQ1eG_UUUWAivChgdUdlJMGqG8wi8Yd0IdrYJICT2rRhUZPzowmxPveeP-NoDDbw"); //obs new token (Adson Abade Ferreira)

    //console.log('Back end: ',oauthToken)

    let apiInstance = new platformClient.ArchitectApi();

    let datatableId = `${values[1]}`;
    let dataTableRow = {
      "key": `${values[2]}`,
      "criadoPor": `${values[0]}`,
      "dataCriacao": `${day+'/'+month+'/'+year}`,
      "status": "Aberto",
      "pedido": `${values[4]}`,
      "descricaoN1": `${values[7]}`,
      "protocolo": parseInt(values[5]),
      "email": `${values[3]}`,
      "responsavelBko": ``,
      "sla": ``,
      "dataFinalizacao": ``, //obs
      "observacaoBko": ``,
      "tratativaBko": ``,
      "id": `${values[6]}`,
    }

//   Create a new row entry for the datatable.
  apiInstance.postFlowsDatatableRows(datatableId, dataTableRow)

    .then((data) => {

      console.log('postFlowsDatatableRows success!'); // data: ${JSON.stringify(data, null, 2)}
      resolve(200)

    })

    .catch((err) => {

      console.log("There was a failure calling postFlowsDatatableRows");

      resolve(err.status)

    });
  })
}

module.exports = { sendWorkFlow }