import { select_fila } from './Get Genesys APIs/getUsersQueues.js';
import { previous_message, cell_phone, msg } from './index.js'

document.querySelector('.toggle-input').addEventListener('click', () => 
{
  /*
  const remove_or_add_classes = document.querySelectorAll('.first_page_hidden_element')

  for ( let i = 0; i < remove_or_add_classes.length; i++ )
  {
    if ( i % 2 !== 0 )
    {
      remove_or_add_classes[i].classList.add('hidden_element_on')
    } 
    else
    {
      remove_or_add_classes[i].classList.remove('hidden_element_on')
    }
  }

  return*/  
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
      document.querySelector('.table-wrapper').style.marginTop = '60px'
      document.getElementById('client_name').style.position = 'absolute'
  
      previous_message.style.opacity = '0'
      previous_message.style.zIndex = '-1'
      previous_message.style.position = 'absolute'
  
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

      document.querySelector('.table-wrapper').style.marginTop = '0px'
      document.getElementById('client_name').style.position = 'static'
  
      cell_phone.style.position = 'static'
      select_fila.style.position = 'static'
      msg.style.position = 'static'
      previous_message.style.position = 'static'
  
      file_example.style.opacity = '0'
      file_example.hidden = true
      previous_message.style.opacity = '1'
      previous_message.style.zIndex = '1'
  
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