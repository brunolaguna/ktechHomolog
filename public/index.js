import { fetchToken } from './JS Front End/fetchTokenOnServerSephora.js';
import { getDataTableRow } from './JS Front End/getDataTableRow_Sephora.js'
import { swalFire } from './JS Front End/swal_fire.js';

let input_elements = document.querySelectorAll('input')
let elements_numbersInput = document.getElementsByClassName('numbersInput')

for( let i = 1; i < input_elements.length; i++ ) {
  
  input_elements[i].addEventListener('input', (event) => {

      var input = event.target.value
    
      // Replace string and space to ''
      input = input.replace(/\s/g, '')
      
      event.target.value = input
  
  })
}

for( let i = 0; i < elements_numbersInput.length; i++ ) {

    elements_numbersInput[i].addEventListener('input', (event) => {

        var input = event.target.value
      
        // Replace string and space to ''
        input = input.replace(/\D/g, '')
        
        event.target.value = input
    
    })
}

document.querySelector('textarea').addEventListener('input', (event) => {

  var input = event.target.value
      
  // Replace string and space to ''
  input = input.replace(/[\n]/g, '');
  
  event.target.value = input

})

document.querySelector('form').addEventListener("submit", async (event) => {

    event.preventDefault()

    var formData = new FormData(event.target)

    const entries = Object.fromEntries(formData.entries())

    const values = Object.values(entries)

    const newToken = await fetchToken()

    //console.log(newToken)

    values.push(newToken)

    fetch('/sendWF', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      
      })
    
      .then((res)=>{
      
        if (res.ok) {
            
          swalFire('Sucesso!', 'WorkFlow enviado!', 'success', 'green', 'green', 'OK')

          document.querySelector('form').reset()

        }
          else if( res.status == 409 ){

            swalFire('Falha ao Cadastrar!', 'Cliente já foi cadastrado no departamento!\n(O CPF já existe no departamento selecionado!)', 'warning', 'red', 'red', 'OK')

            getDataTableRow(values[1], values[2], values[8])

        } else {

            console.error(res)

            swalFire('Erro!', 'Não foi possível cadastrar. Erro desconhecido!\n'+ res.status, 'error', 'red', 'red', 'OK')

            //setTimeout(() => {
            //  window.location.href = "https://ktechdigital-hsm-afc92f4d4c18.herokuapp.com/SephoraScript"
            //},10000)

        }

      })
      
      .catch((error)=>{
        console.error('Error:', error)
      })

})