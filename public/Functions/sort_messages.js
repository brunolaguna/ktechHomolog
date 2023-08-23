var msg = document.getElementById('mensagem')

export function getOrgTemplates(template_hsm)
{
    let sort_templates = []

    for ( let i = 0; i < template_hsm.length; i++ ) { sort_templates[i] = template_hsm[i].elementname }

    for (let i = 0; i < sort_templates.sort().length; i++) 
    {
        const elementName_opt = document.createElement('option')
        elementName_opt.value = sort_templates[i]
        elementName_opt.text = sort_templates[i]
        msg.appendChild(elementName_opt)
    }
}

export { msg }