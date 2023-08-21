import { getOrganzationName } from "./setCloudRegion.js";
import { leroyTemplates } from './Kloe Broker/Messages/leroyMessages.js'
import { sirioTemplates } from './Kloe Broker/Messages/sirioMessages.js'

const hostname = window.location.hostname
const pathName = window.location.pathname

if ( hostname === 'ktechdigital-homolog-34fe4008c979.herokuapp.com' && pathName === '/' ) 
{
    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'https://ktechdigital-homolog-34fe4008c979.herokuapp.com/'
    var template_hsm = leroyTemplates
    var x_api_key = "3KJwb3vLBM2g1d6vu5xlH58VhDgKrNY93ruVZzWv"
} 
else if ( hostname === 'ktechdigital-homolog-34fe4008c979.herokuapp.com' && pathName === '/LeroyMerlin' ) 
{
    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'https://ktechdigital-homolog-34fe4008c979.herokuapp.com/'
    var template_hsm = leroyTemplates
    var x_api_key = "3KJwb3vLBM2g1d6vu5xlH58VhDgKrNY93ruVZzWv"
} 
else if ( hostname === 'ktechdigital-homolog-34fe4008c979.herokuapp.com' && pathName === '/Sirio-Libanes' ) 
{
    var CLIENT_ID = '55352089-f643-4a78-8980-c4ff0e2314a8';
    var ENVIRONMENT = 'sae1.pure.cloud';
    var redirect_uri = 'https://ktechdigital-homolog-34fe4008c979.herokuapp.com/'
    var template_hsm = sirioTemplates
    var x_api_key = "yjGa6BVbfv8kE2tohOmS89QYIzYjm4jq8A6R5c1Y"
} 
else if ( hostname === 'prod-hsm-50ce2b2a6f45.herokuapp.com' && pathName === '/LeroyMerlin' )
{
    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'https://prod-hsm-50ce2b2a6f45.herokuapp.com/'
    var template_hsm = leroyTemplates
} 
else if ( hostname === 'localhost' && pathName === '/' ) 
{
    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'http://localhost:3000/'
    var template_hsm = leroyTemplates
    var x_api_key = "3KJwb3vLBM2g1d6vu5xlH58VhDgKrNY93ruVZzWv"
}
else if ( hostname === 'localhost' && pathName === '/LeroyMerlin' ) 
{
    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'http://localhost:3000/LeroyMerlin'
    var template_hsm = leroyTemplates
    var x_api_key = "3KJwb3vLBM2g1d6vu5xlH58VhDgKrNY93ruVZzWv"
}
else if ( hostname === 'localhost' && pathName === '/Sirio-Libanes' ) 
{
    var CLIENT_ID = '55352089-f643-4a78-8980-c4ff0e2314a8';
    var ENVIRONMENT = 'sae1.pure.cloud';
    var redirect_uri = 'http://localhost:3000/Sirio-Libanes'
    var template_hsm = sirioTemplates
    var x_api_key = "yjGa6BVbfv8kE2tohOmS89QYIzYjm4jq8A6R5c1Y"
}

export function getParameterByName(name) 
{
    name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if(window.location.hash) 
{
    var accessToken = getParameterByName('access_token');
    var userDatas = []
// verify below
    var userID = await $.ajax({
        url: `https://api.${ENVIRONMENT}/api/v2/users/me`,
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', `bearer ${accessToken}`);},
        success: function(data) 
        {
            var orgName = getOrganzationName(data.chat.jabberId)
            
            userDatas[0] = data.email
            userDatas[1] = data.id
            userDatas[2] = data.name
            userDatas[3] = orgName
            //userDatas[3] = data.chat.jabberId
            return userDatas

        }
    });

    location.hash=''

} else {

    var queryStringData = {

        response_type : "token",
        client_id : CLIENT_ID,
        redirect_uri : redirect_uri

    }

    window.location.replace(`https://login.${ENVIRONMENT}/oauth/authorize?` + jQuery.param(queryStringData));
    
}

var email = userDatas[0]
var userID = userDatas[1]
var agentName = userDatas[2]
var orgName = userDatas[3]

export { pathName, accessToken, userID, email, agentName, template_hsm, orgName, x_api_key}