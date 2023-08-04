import('./Get Genesys APIs/getUsersQueues.js')
import { select_fila } from './Get Genesys APIs/getUsersQueues.js';
import { accessToken, userID, email } from './getAccessToken.js';
import { template_hsm } from './Kloe Broker/message.js'
import { sendHSM } from './Kloe Broker/fetchBroker.js';
import { getRoles } from './Get Genesys APIs/getRolesForUsers.js'

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

async function hasPermission() {

  var permission = await getRoles()
  var toggle = document.querySelector('.toggle').style

  if ( permission === true ) {

    toggle.position = 'relative'
    toggle.opacity = '1' 
    toggle.zIndex = '0' 

  }

}

hasPermission()

let msg = document.getElementById('mensagem')

function mensagem(){
  for (let i = 0; i < template_hsm.length; i++) {

      var elementname = template_hsm[i].elementname
      var body = template_hsm[i].body
      const opt_elementname = document.createElement('option')
      opt_elementname.value = body
      opt_elementname.text = elementname
      msg.appendChild(opt_elementname)
      
  }
}

mensagem()

var texto = document.getElementById('previaMensagem')
var variaveis

msg.addEventListener("change", (event) => {

  texto.value = event.target.value

  //adjustTextareaHeight
  texto.style.height = 'auto'; // Reset the height to auto to recalculate
  texto.style.height = texto.scrollHeight + 'px'; // Set the height based on the content
  //-----------------------------------
  
  var text = texto.value

  const regex = /\{(.*?)\}/g;
  variaveis = text.match(regex);
  const quantidadeVariaveis = variaveis ? variaveis.length : 0;
  if (document.querySelector(".excluir")) {
    let excluir = document.getElementById("create_input_div");
    let exc = document.querySelectorAll(".excluir");
    let tamanhoExcluir = exc.length;
    for (var i = 0; i < tamanhoExcluir; i++) {
      excluir.removeChild(exc[i]);
    }
  }

  let input;

  if (quantidadeVariaveis > 0) {
    var create_input_div = document.getElementById('create_input_div')
    //var_input_array = []
    for (var i = 0; i < quantidadeVariaveis; i++) {
      input = document.createElement("input");
      input.required = true
      let val = 1;
      input.placeholder = i + " : " + variaveis[i];
      input.className = "excluir";
      input.id = variaveis[i]
      var input_ID = input.id.replace(/{|}/gi, "")
      input.id = input_ID
      input.placeholder = input_ID
      //console.log(input.id)
      //console.log(input.placeholder)

      var create_input_div = document.getElementById("create_input_div");
      create_input_div.appendChild(input);
    }
  }
})

document.querySelector('.toggle-input').addEventListener('click', () => {
  
  var select_element = document.querySelectorAll('select')
  var label_elements = document.querySelectorAll('label')
  var input_element = document.querySelectorAll('input')
  var bulkHSM_label = document.getElementById('bulkHSM_label')
  var file_example = document.getElementById('file_example')
  var h1 = document.querySelector('h1')
  var file_example = document.getElementById('file_example')
  var table_wrapper = document.querySelector('.table-wrapper')
  
  input_element = Array.from(input_element)
  input_element.pop()

  if( document.querySelector('.toggle-input').checked ) {

    //console.log(document.getElementById('mensagem').value)

    if ( document.getElementById('mensagem').value !== null ) {

      var template_variables = document.getElementsByClassName('excluir')

      for ( let i = 0; i < template_variables.length; i++ ) {
        template_variables[i].style.position = 'absolute'
        template_variables[i].style.zIndex = '-1'
      }

    }

    //console.log(input_element)

    texto.style.opacity = '0'
    texto.style.zIndex = '-1'
    texto.style.position = 'absolute'

    cell_phone.style.position = 'absolute'
    msg.style.position = 'absolute'

    file_example.style.display = 'block'
    file_example.style.position = 'static'
    file_example.style.opacity = '1'
    file_example.hidden = false
    file_example.zIndex = '0'

    bulkHSM_label.style.opacity = '1'
    bulkHSM_label.style.zIndex = '1'
    bulkHSM_label.style.position = 'static'

    for ( let i = 0; i < label_elements.length; i++ ) {
      label_elements[i].style.opacity = '0'
      label_elements[i].disabled = true
    }

    for ( let i = 0; i < input_element.length; i++ ) {
      input_element[i].style.opacity = '0'
      input_element[i].style.transition = '0s'
      input_element[i].disabled = true
    }

    for( let i = 0; i < select_element.length; i++ ) {
      select_element[i].style.opacity = '0'
      select_element[i].style.zIndex = '-1'
      select_element[i].disabled = true
      select_element[i].style.position = 'absolute'
      select_element[i].style.transition = '0s'
    }

    h1.style.opacity = '1'
    h1.style.position = 'static'
    h1.style.zIndex = '0'

    document.querySelector('.toggle').style.opacity = '1'
    document.getElementById('file_input').style.position = 'static'
    document.getElementById('file_input').style.opacity = '1'
    document.getElementById('file_input').disabled = false
    document.getElementById('file_input').style.zIndex = '2'
    document.getElementById('file_input').style.transition = '.3s'

    table_wrapper.style.position = 'static'
    table_wrapper.style.opacity = '1'
    table_wrapper.style.zIndex = '0'

  } else {

    if ( document.getElementById('mensagem').value !== null ) {

      var template_variables = document.getElementsByClassName('excluir')

      for ( let i = 0; i < template_variables.length; i++ ) {
        template_variables[i].style.position = 'static'
        template_variables[i].style.zIndex = '0'
      }

    }

    cell_phone.style.position = 'static'
    select_fila.style.position = 'static'
    msg.style.position = 'static'
    texto.style.position = 'static'

    console.log(file_example)
    file_example.style.opacity = '0'
    file_example.hidden = true
    texto.style.opacity = '1'
    texto.style.zIndex = '1'

    for ( let i = 0; i < label_elements.length; i++ ) {
      label_elements[i].style.opacity = '1'
      label_elements[i].disabled = false
    }

    for ( let i = 0; i < input_element.length; i++ ) {
      input_element[i].style.opacity = '1'
      input_element[i].style.transition = '.3s'
      input_element[i].disabled = false
    }

    for( let i = 0; i < select_element.length; i++ ) {
      select_element[i].style.opacity = '1'
      select_element[i].style.zIndex = '0'
      select_element[i].disabled = false
      select_element[i].style.position = 'static'
      select_element[i].style.transition = '.3s'
    }

    h1.style.opacity = '0'
    h1.style.position = 'absolute'
    h1.style.zIndex = '-1'

    bulkHSM_label.style.opacity = '0'
    bulkHSM_label.style.zIndex = '-1'
    bulkHSM_label.style.position = 'absolute'

    file_example.style.position = 'absolute'
    file_example.zIndex = '-1'

    document.getElementById('file_input').style.position = 'absolute'
    document.getElementById('file_input').style.opacity = '0'
    document.getElementById('file_input').style.zIndex = '-1'
    document.getElementById('file_input').disabled = true

    table_wrapper.style.position = 'absolute'
    table_wrapper.style.opacity = '0'
    table_wrapper.style.zIndex = '-1'

  }

})


var telefone;
var fila;
var namespace;
var elementname;
var client;
var trys;

document.getElementById('hsm_form').addEventListener('submit', async function teste(event) {

  event.preventDefault()

  let button = document.querySelector('button')
  var file = document.getElementById('file_input').files

  if ( file.length > 0 && document.querySelector('.toggle-input').checked ) {

    const extension = file[0].name.split('.')
    //console.log(extension)

    if ( extension[1] !== 'csv' ) {
      Swal.fire({
        title: 'AVISO',
        text: 'Favor inserir um arquivo com extensão ".csv" para continuar.',
        icon: 'warning',
        iconColor: 'lightskyblue',
        confirmButtonColor: 'lightskyblue',
        confirmButtonText: 'OK',
        customClass: {
          container: 'custom-alert-container'
        }
      })
      return
    }

    button = document.querySelector('button')
    button.disabled = true
    button.innerHTML = `<div class="loader"></div>`

    var data = file[0]

    const readFile = new FileReader()
    readFile.readAsText(data)

    readFile.onload = async function send_bulkHSM(e) {

      var csvdata = e.target.result

      var rowData = csvdata.split('\n')
      console.log(rowData)

      for ( let i = 0; i < rowData.length; i++ ) {
        rowData[i] = rowData[i].replace('\r', '')
        //console.log(rowData[i])
      }

      console.log(rowData)
      
      //console.log(typeof rowData[0])
      //console.log(rowData[0])
//
      //let obj = {}
//
      //for ( let i = 0; i < rowData.length; i++ ) {
      //  var row = rowData[i].replace('\r', '')
      //  console.log(rowData[i])
//
      //  obj[i] = {}
      //  console.log(obj[i])
      //  Object.assign(obj, obj[i])
//
      //}
//
      //rowData = obj
      //console.log(rowData)
      //console.log(rowData.length)
      //console.log(rowData[1])

      var tbodyEl = document.getElementById('tablecsvdata').getElementsByTagName('tbody')[0];

      //console.log(tbodyEl)

      tbodyEl.innerHTML = "";

      //console.log(rowData)
      //console.log(typeof rowData)
      //console.log(rowData.length)

      let null_row = rowData.length - 1
      //console.log(null_row)

      delete rowData[null_row]
      //console.log(rowData)
      
      let localizable_params_bulkHSM_index = 0
      let localizable_params_bulkHSM = []
      let dados = []
      for( let r = 0; r < rowData.length; r++ ) {

        //console.log(r)

        if ( r === rowData.length - 1) {
          return
        }

        var newRow = tbodyEl.insertRow()

        //console.log(newRow)

        console.log(rowData[r])
        dados[r] = rowData[r].split(';')
        console.log(dados)

        //console.log(dados.length)

        for( var c = 0; c < dados[r].length; c++ ) {

          //console.log(dados[r][0])
          //console.log(dados[r][0].length)
          //console.log(isNaN(dados[r][0]))
          //console.log(isNaN('dados[r][0]'))

          //var cell_phone = parseInt(dados[r][0])
          //console.log(typeof cell_phone)
          //console.log(cell_phone.length)
          //console.log(isNaN(cell_phone))

          while ( dados[r][1].length !== 11 && dados[r][1].length !== 10  || isNaN(dados[r][1]) === true ) {

            dados[r][1] = prompt(`Você inseriu um valor inválido na linha ${r + 1} coluna 1.\nPor favor, insira um valor válido:`, `${dados[r][1]}`)

          }

          var newCell = newRow.insertCell()

          //console.log(newCell)

          newCell.innerHTML = dados[r][c]

          if ( dados[r][c] == '' || dados[r][c] == '\r' ) {
            dados[r][c].replace('', '\r')
            dados[r].pop()
            console.log(dados[r])
          }

        }

        for( let i = 4; i < dados[r].length; i++ ) {

          localizable_params_bulkHSM[localizable_params_bulkHSM_index] = dados[r][i]
          localizable_params_bulkHSM_index++

        }

        //function sleep(ms) {
        //  return new Promise(resolve => setTimeout(resolve, ms));
        //}

        var data_hsm = {
          Telefone: dados[r][1],
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
          console.log(clientInteracting.client)
    
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
            
          }
          
          
        })

        .catch((error)=>{
          console.error('Error:', error)
        })
        
        const status = await sendHSM(dados[r][0], email, dados[r][1], dados[r][2], dados[r][3], localizable_params_bulkHSM, userID, variaveis)

        //await sleep(3000)

        console.log(status)
        console.log(c)

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

        //await sleep(10000);

        localizable_params_bulkHSM = []
        localizable_params_bulkHSM_index = 0

      }

      //sendHSM(email, dados[r][0], dados[r][1], dados[r][2], agentFirstName, localizable_params_bulkHSM, userID)

      console.log(dados)
      console.log(localizable_params_bulkHSM)

      //function sleep(ms) {
      //  return new Promise(resolve => setTimeout(resolve, ms));
      //}


    }

    button.disabled = false
    button.innerHTML = 'Enviar HSM'

  } else {

  button = document.querySelector('button')
  button.disabled = true
  button.innerHTML = `<div class="loader"></div>`
  
  // Get form input values using the form elements collection
  const form = event.target; // Get the form element

  telefone = form.elements.telefone.value;
  fila = form.elements.fila.value;
  var textBody = form.elements.mensagem.value;
  
  for (let i = 0; i < template_hsm.length; i++) {
    var body = template_hsm[i].body
    if(body == textBody){
      elementname = template_hsm[i].elementname
      namespace = template_hsm[i].namespace
      break
    }
  }

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

        Swal.fire({
          title: 'Cliente Interagindo!',
          text: 'O cliente já está em outro atendimento, aguarde a interação ser finalizada para o envio de HSM!',
          icon: 'warning',
          iconColor: 'lightskyblue',
          confirmButtonColor: 'lightskyblue',
          confirmButtonText: 'OK',
          customClass: {
            container: 'custom-alert-container'
          }
        })
    
        button.disabled = false
        button.innerHTML = 'Enviar HSM'
    
      } else {

      if (res.ok) {

        //let cliente_em_atendimento = await queryConversationDetails()
        //console.log(cliente_em_atendimento)

        const client_name = document.getElementById('nome').value

        let shippingStatus = await sendHSM(client_name, email, telefone, fila, elementname, inputParams, userID, variaveis)
        
        if ( shippingStatus != 200 ) {
          
          Swal.fire({
            title: 'Erro!',
            text: 'Erro ao enviar o HSM!\n'+ shippingStatus,
            icon: 'error',
            confirmButtonColor: '#b82c2c',
            confirmButtonText: 'OK',
            customClass: {
              container: 'custom-alert-container'
            }
          })

          button.disabled = false
          button.innerHTML = 'Enviar HSM'

        } else {

          Swal.fire({
            title: 'Sucesso!',
            text: 'O HSM foi enviado com sucesso!',
            icon: 'success',
            iconColor: '#A43C92',
            confirmButtonColor: '#A43C92',
            confirmButtonText: 'OK',
            customClass: {
              container: 'custom-alert-container'
            }
          })

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