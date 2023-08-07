import('./Get Genesys APIs/getRolesForUsers.js')
import('./toggleButtonStyle.js')
import { accessToken, userID, email } from './getAccessToken.js';
import { template_hsm } from './Kloe Broker/message.js'
import { swalFire } from './swal_fire.js';
import { sendHSM } from './Kloe Broker/fetchBroker.js';

/* After, Analyze this function
const name = document.getElementById('nome')
name.addEventListener('input', (event) => {
  
  var input = event.target.value
  
  // Replace string and space to ''
  input = input.replace(/[^\p{L}\p{M}´~^\s]/gu, '');

  
  event.target.value = input
  }
)
*/

// Function FormatPhoneNumber
const cell_phone = document.getElementById('telefone')
cell_phone.addEventListener('input', (event) => {
  
  var input = event.target.value
  
  // Replace string and space to ''
  input = input.replace(/\s/g, '')
  input = input.replace(/\D/g, '')
  
  event.target.value = input

  }
)

// Var
let msg = document.getElementById('mensagem')

for (let i = 0; i < template_hsm.length; i++) {

    const elementName_opt = document.createElement('option')
    elementName_opt.value = template_hsm[i].elementname
    elementName_opt.text = template_hsm[i].elementname
    msg.appendChild(elementName_opt)
    
}

// Vars
var previous_message = document.getElementById('previaMensagem')
var variaveis

msg.addEventListener("change", () => {

  for( let i = 0; i < template_hsm.length; i++ ) {

    if ( msg.value === template_hsm[i].elementname ) { previous_message.value = template_hsm[i].body }

  }

  //adjustTextareaHeight
  previous_message.style.height = 'auto'; // Reset the height to auto to recalculate
  previous_message.style.height = previous_message.scrollHeight + 'px'; // Set the height based on the content
  //--------------------

  variaveis = previous_message.value.match(/\{(.*?)\}/g);

  if (document.querySelector(".excluir")) {
    let excluir = document.getElementById("create_input_div");
    let exc = document.querySelectorAll(".excluir");
    for (var i = 0; i < exc.length; i++) {
      excluir.removeChild(exc[i]);
    }
  }

  let input;
  const quantidadeVariaveis = variaveis ? variaveis.length : 0;

  if (quantidadeVariaveis > 0) {

    var create_input_div = document.getElementById('create_input_div')

    for (var i = 0; i < quantidadeVariaveis; i++) {

      input = document.createElement("input");
      input.required = true
      input.className = "excluir";
      input.id = variaveis[i]

      var input_ID = input.id.replace(/{|}/gi, "")
      input.id = input_ID
      input.placeholder = input_ID

      create_input_div.appendChild(input);

    }
  }
})

document.getElementById('hsm_form').addEventListener('submit', async function (event) {

  event.preventDefault()

  var button = document.querySelector('button')
  var file = document.getElementById('file_input').files

  if ( file.length > 0 && document.querySelector('.toggle-input').checked ) {

    const extension = file[0].name.split('.')

    if ( extension[1] !== 'csv' ) {

      swalFire('AVISO', 'Favor inserir um arquivo com extensão ".csv" para continuar.', 'warning', 'lightskyblue', 'lightskyblue', 'OK')
      return

    }

    button.innerHTML = `<div class="loader"></div>`
    button.disabled = true

    var data = file[0]

    const readFile = new FileReader()
    readFile.readAsText(data)

    readFile.onload = async function send_bulkHSM(e) {

      var csvdata = e.target.result

      var rowData = csvdata.split('\n')

      for ( let i = 0; i < rowData.length; i++ ) { rowData[i] = rowData[i].replace('\r', '') }

      var tbodyEl = document.getElementById('tablecsvdata').getElementsByTagName('tbody')[0];

      tbodyEl.innerHTML = "";

      let null_row = rowData.length - 1
      delete rowData[null_row]
      
      let localizable_params_bulkHSM_index = 0
      let localizable_params_bulkHSM = []
      let dados = []

      for( let r = 0; r < rowData.length; r++ ) {

        if ( r === rowData.length - 1) { return }

        var newRow = tbodyEl.insertRow()

        dados[r] = rowData[r].split(';')

        for( var c = 0; c < dados[r].length; c++ ) {

          while ( dados[r][1].length !== 11 && dados[r][1].length !== 10 || isNaN(dados[r][1]) === true ) {

            dados[r][1] = prompt(`Você inseriu um valor inválido na linha ${r + 1} coluna 1.\nPor favor, insira um valor válido:`, `${dados[r][1]}`)

          }

          var newCell = newRow.insertCell()

          newCell.innerHTML = dados[r][c]

          //if ( dados[r][c] == '' || dados[r][c] == '\r' ) {
          //  dados[r].pop()
          //  console.log(dados[r])
          //}

        }

        for( let i = 4; i < dados[r].length; i++ ) {

          localizable_params_bulkHSM[localizable_params_bulkHSM_index] = dados[r][i]
          localizable_params_bulkHSM_index++

        }

        var data_hsm = {
          Telefone: dados[r][1],
          AccessToken: accessToken
        }

        await fetch('/enviarHSM', {

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
    
              if ( c == 8 ) {
    
                newCell.innerHTML = 'Interagindo'
                newCell.style.backgroundColor = "lightskyblue"
                newCell.style.color = "red"
    
              }
    
              c++
    
            }

            return
            
          } else {

            const status = await sendHSM(dados[r][0], email, dados[r][1], dados[r][2], dados[r][3], localizable_params_bulkHSM, userID, variaveis)
  
            while ( c < 9 ) {
  
              newCell = newRow.insertCell()
  
              if ( status === 200 && c == 8 ) {
  
                newCell.innerHTML = 'Enviado'
                newCell.style.backgroundColor = "#BC3F86"
                newCell.style.color = "white"
  
              } else if ( c == 8 ){
  
                newCell.innerHTML = 'Erro'
                newCell.style.backgroundColor = "red"
  
              }
  
              c++
  
            }
  
            localizable_params_bulkHSM = []
            localizable_params_bulkHSM_index = 0
            
            if ( r == rowData.length - 2 ) {
  
              button.disabled = false
              button.innerHTML = 'Enviar HSM'
  
            }
          }
        })

        .catch((error)=>{
          console.error('Error:', error)
        })
        
      }
    }
  }
  
  if ( document.querySelector('.toggle-input').checked == false ) {

  button = document.querySelector('button')
  button.disabled = true
  button.innerHTML = `<div class="loader"></div>`
  
  // Get form input values using the form elements collection
  const form = event.target; // Get the form element

  var telefone = form.elements.telefone.value;
  var fila = form.elements.fila.value;
  var elementname = form.elements.mensagem.value;

    //Log the form input values

    let inputParams = ['Cliente', 'Agente', 'Pedido', 'Protocolo', 'Tentativas', 'Data', 'Link', 'Loja', 'Endereço', 'Solicitação', 'Servico_instalacao']

    for(let i=0; i<inputParams.length; i++){
      try {
        inputParams[i] = document.getElementById(inputParams[i]).value
      } catch {
        inputParams.splice(i, 1)
        i--
      }
    }

    var data_hsm = {
      Telefone: telefone,
      Fila: fila,
      Mensagem: elementname,
      Parametros: inputParams,
      AccessToken: accessToken
    }

    fetch('/enviarHSM', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_hsm)

    })

    .then(async(res)=>{

      const clientInteracting = await res.json()

      if (clientInteracting.client == true){

        swalFire('Cliente Interagindo!', 'O cliente já está em outro atendimento, aguarde a interação ser finalizada para o envio de HSM!', 'warning', 'lightskyblue', 'lightskyblue', 'OK')
    
        button.disabled = false
        button.innerHTML = 'Enviar HSM'
    
      } else {

      if (res.ok) {

        const client_name = document.getElementById('nome').value

        let shippingStatus = await sendHSM(client_name, email, telefone, fila, elementname, inputParams, userID, variaveis)
        
        if ( shippingStatus != 200 ) {
          
          swalFire('Erro', 'Erro ao enviar o HSM!\n', 'error', '#b82c2c', 'OK')

          button.disabled = false
          button.innerHTML = 'Enviar HSM'

        } else {

          swalFire('Sucesso!', 'O HSM foi enviado com sucesso!', 'success', '#A43C92', '#A43C92', 'OK')

          this.reset()

          button.disabled = false
          button.innerHTML = 'Enviar HSM'

          }
      }
        else {
        console.error(res)
      }
    }})

    .catch((error)=>{
      console.error('Error:', error)
    })

  }

})

export { previous_message, cell_phone, msg }