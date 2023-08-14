import { template_hsm } from "./Kloe Broker/messages.js"

let sort_templates = []

for ( let i = 0; i < template_hsm.length; i++ ) { sort_templates[i] = template_hsm[i].elementname }

let msg = document.getElementById('mensagem')

for (let i = 0; i < sort_templates.sort().length; i++) 
{
    const elementName_opt = document.createElement('option')
    elementName_opt.value = sort_templates[i]
    elementName_opt.text = sort_templates[i]
    msg.appendChild(elementName_opt)
}

export { template_hsm, msg }