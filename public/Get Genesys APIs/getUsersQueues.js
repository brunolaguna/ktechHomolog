import { accessToken, userID, api } from './getAccessToken.js';

var select_fila

axios.get(`${api}/api/v2/users/${userID}/queues`, { headers: { Authorization: `Bearer ${accessToken}` } })
  
    .then(response =>{
  
        select_fila = document.getElementById('fila')
        //const queueKeyString = ['whatsapp', 'homolog']
        let queue = response.data.entities
        let y = 0

        for ( let i = 0; i < queue.length; i++ ) {

            //while ( y != queueKeyString.length ) {
                
                if ( queue[i].name.toLowerCase().indexOf('whatsapp') !== -1 || queue[i].name.toLowerCase().indexOf('homolog') !== -1 ) {

                    const optionElement = document.createElement('option')
                    optionElement.text = queue[i].name
                    select_fila.appendChild(optionElement)
                    break

                } else { y++ }
            //}

            y = 0

        }

    })

    .catch(error =>{
        
        alert('O serviço não está disponível no momento!')
        console.error(error)
        
    })

export { select_fila }