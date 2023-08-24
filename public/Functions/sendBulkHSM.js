import { check_file_extension } from "./checkFileExtension.js"
import { loaderON, loaderOFF } from "./loader.js"
import { sendHSM } from "../Kloe Broker/fetchBroker.js"

export async function bulkHSM_mode(button_sendHSM, accessToken, orgName, pathName)
{
  var file = document.getElementById('file_input').files

  if ( file.length > 0 && document.querySelector('.toggle-input').checked ) 
  {
    document.querySelector('.toggle-input').disabled = false
    check_file_extension(file)
    
    loaderON(button_sendHSM)

    var data = file[0]

    const readFile = new FileReader()
    readFile.readAsText(data)
    let rowData

    readFile.onload = async (e) => 
    {
      var csvdata = e.target.result
      rowData = csvdata.split('\n')

      for (let i = 0; i < rowData.length; i++) { rowData[i] = rowData[i].replace('\r', '')} 

      var tbodyEl = document.getElementById('tablecsvdata').getElementsByTagName('tbody')[0]
      tbodyEl.innerHTML = ""

      let null_row = rowData.length - 1
      delete rowData[null_row]

      let localizable_params_bulkHSM_index = 0
      let localizable_params_bulkHSM = []
      let dados = []

      for( let r = 1; r < rowData.length; r++ ) 
      {        

      if ( r === rowData.length - 1) { return }
      var newRow = tbodyEl.insertRow()
      dados[r] = rowData[r].split(';')

        for( var c = 0; c < dados[r].length; c++ ) 
        {
          if ( dados[r][0] === '' )
          {
            loaderOFF(button_sendHSM)
            return
          }

          /*
          while ( dados[r][1].length !== 11 && dados[r][1].length !== 10 || isNaN(dados[r][1]) === true ) {

            dados[r][1] = prompt(`Você inseriu um valor inválido na linha ${r + 1} coluna 1.\nPor favor, insira um valor válido:`, `${dados[r][1]}`)

          }*/

          var newCell = newRow.insertCell()

          newCell.innerHTML = dados[r][c]

        }

        for( let i = 4; i < dados[r].length; i++ ) 
        {
          localizable_params_bulkHSM[localizable_params_bulkHSM_index] = dados[r][i]
          localizable_params_bulkHSM_index++
        }

        var data_hsm = {
          Telefone: dados[r][1],
          AccessToken: accessToken,
          Cloud_region: orgName
        }

        await fetch('/verifyClient', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data_hsm)
    
        })
    
        .then(async(res)=>{
    
          const clientInteracting = await res.json()
    
          if (clientInteracting.client == true) {

            while ( c < 9 ) {

              newCell = newRow.insertCell()
    
              if ( c == 8 ) 
              {
                var colorStatus = pathName === '/' ? '#3B2D5E' :
                pathName === '/LeroyMerlin' ? (
                  newCell.style.borderColor = 'white',
                  'black'
                ) :
                pathName === '/Sirio-Libanes' ? '#2855af' :
                undefined; // Default value if none of the conditions match

                newCell.innerHTML = 'Interagindo'
                newCell.style.backgroundColor = colorStatus
                newCell.style.color = "white"
              }
    
              c++
    
            }

            if ( r == rowData.length - 2 ) {
  
              loaderOFF(button_sendHSM)
  
            }

            return
            
          } else {

            const HSMmode = 'massaHSM'
            const status = await sendHSM(dados[r][0], dados[r][1], dados[r][2], dados[r][3], localizable_params_bulkHSM, HSMmode)
  
            while ( c < 9 ) {
  
              newCell = newRow.insertCell()
  
              if ( status === 200 && c == 8 ) 
              {
                var colorStatus = pathName === '/' ? '#E52E7D'
                : pathName === '/LeroyMerlin' ? '#629411'
                : '#54A7EC'
  
                newCell.innerHTML = 'Enviado'
                newCell.style.backgroundColor = colorStatus
                newCell.style.color = "white"
  
              } 
              else if ( c == 8 )
              {
                newCell.innerHTML = 'Erro'
                newCell.title = 'Mensagem desconhecida, por favor adicione uma mensagem registrada.'
                newCell.style.backgroundColor = "red"
              }
  
              c++
  
            }
  
            localizable_params_bulkHSM = []
            localizable_params_bulkHSM_index = 0
            
            if ( r == rowData.length - 2 ) {
  
              button_sendHSM.disabled = false
              button_sendHSM.innerHTML = 'Enviar HSM'
  
            }
          }
        })
        

        .catch((error)=>{
          console.error('Error:', error)
        })    
    }}
  }
}