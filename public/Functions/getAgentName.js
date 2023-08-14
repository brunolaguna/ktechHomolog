import { agentName } from "../getAccessToken.js";

export async function automaticAgentName()
{
    const agentName_input = document.getElementById('Agente')

    if ( agentName_input )
    {
        agentName_input.value = agentName
        //agentName_input.disabled = true
        agentName_input.style.color = 'black'
    }
}