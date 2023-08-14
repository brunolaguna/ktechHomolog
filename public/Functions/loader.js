export function loaderON(button_sendHSM)
{
    button_sendHSM.innerHTML = `<div class="loader"></div>`
    button_sendHSM.disabled = true
    document.getElementById('sendHSM').disabled = true
}

export function loaderOFF(button_sendHSM)
{
    button_sendHSM.disabled = false
    button_sendHSM.innerHTML = 'Enviar HSM'
    document.getElementById('sendHSM').disabled = false
}