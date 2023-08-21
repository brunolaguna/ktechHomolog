import('./Get Genesys APIs/getRolesForUsers.js')
import('./orgStyles.js')
import('./toggleButtonStyle.js')
import { pathName, accessToken, template_hsm, orgName } from './getAccessToken.js';
import { getOrgTemplates, msg } from './sort_messages.js'
import { automaticAgentName } from './Functions/getAgentName.js';
import { swalFire } from './swal_fire.js';
import { sendHSM } from './Kloe Broker/fetchBroker.js';
import { bulkHSM_mode } from './sendBulkHSM.js';

if ( accessToken )
{
  document.querySelector('section').remove()
  document.querySelector('body').style.overflowY = 'visible'
}

getOrgTemplates(template_hsm)

const cient_name = document.getElementById('client_name')

cient_name.addEventListener('input', (event) => 
{  
  var input = event.target.value
  input = input.replace(/[^\p{L}\p{M}´~^\s]/gu, '');
  event.target.value = input
  }
)

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

function clientName_input_mirror() 
{
  let client_param = document.getElementById('Cliente')

  if ( client_param !== null )
  {
    client_param.value = document.getElementById('client_name').value
    client_param.disabled = true
  }
}

var previous_message = document.getElementById('previaMensagem')
var variaveis

msg.addEventListener("change", () => {

  for( let i = 0; i < template_hsm.length; i++ ) 
  {
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
      automaticAgentName()

    }
  }

  clientName_input_mirror()

})

document.getElementById('client_name').addEventListener('input', () => 
{
  clientName_input_mirror()
})

document.getElementById('hsm_form').addEventListener('submit', async function (event) {

  event.preventDefault()

  var button_sendHSM = document.querySelector('#sendHSM')

  bulkHSM_mode(button_sendHSM, accessToken, orgName)
  
  if ( document.querySelector('.toggle-input').checked == false ) {

  button_sendHSM = document.querySelector('#sendHSM')
  button_sendHSM.disabled = true
  button_sendHSM.innerHTML = `<div class="loader"></div>`
  
  // Get form input values using the form elements collection
  const form = event.target; // Get the form element

  var telefone = form.elements.telefone.value;
  var fila = form.elements.fila.value;
  var elementname = form.elements.mensagem.value;

    //Log the form input values

    let inputParams = ['Cliente', 'Agente', 'Pedido', 'Protocolo', 'Tentativas', 'Data', 'Link', 'Loja', 'Endereço', 'Solicitação', 'Servico_instalacao', 'Quantidade']

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
      AccessToken: accessToken,
      Cloud_region: orgName[0]
    }

    fetch('/verifyClient', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_hsm)

    })

    .then(async(res)=>{

      const clientInteracting = await res.json()

      if (clientInteracting.client == true){

        swalFire('Cliente Interagindo!', 'O cliente já está em outro atendimento, aguarde a interação ser finalizada para o envio de HSM!', 'warning', 'gray', 'gray', 'OK')
    
        button_sendHSM.disabled = false
        button_sendHSM.innerHTML = 'Enviar HSM'
    
      } else {

      if (res.ok) {

        const HSMmode = 'individualHSM'
        const client_name = document.getElementById('client_name').value

        let shippingStatus = await sendHSM(client_name, telefone, fila, elementname, inputParams, HSMmode)
        
        if ( shippingStatus != 200 ) {
          
          swalFire('Erro', 'Erro ao enviar o HSM!\n', 'error', '#b82c2c', 'OK')

          button_sendHSM.disabled = false
          button_sendHSM.innerHTML = 'Enviar HSM'

        } else {

          if ( pathName === '/' )
          {
            var success_swalColor = '#BC3F86'
          }
          else if ( pathName === '/LeroyMerlin' )
          {
            var success_swalColor = '#629411'
          }
          else if ( pathName === '/Sirio-Libanes' )
          {
            var success_swalColor = '#54A7EC'
          }

          swalFire('Sucesso!', 'O HSM foi enviado com sucesso!', 'success', success_swalColor, success_swalColor, 'OK')

          this.reset()

          button_sendHSM.disabled = false
          button_sendHSM.innerHTML = 'Enviar HSM'

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