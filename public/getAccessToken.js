const hostname = window.location.hostname
console.log(hostname)

if ( hostname === 'ktechdigital-homolog-34fe4008c979.herokuapp.com' ) {

    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'ktechdigital-homolog-34fe4008c979.herokuapp.com'

} else if ( hostname === 'localhost' ) {

    var CLIENT_ID = 'f2bc5acb-0ff2-47ad-9b53-cedd33025c30';
    var ENVIRONMENT = 'mypurecloud.com';
    var redirect_uri = 'http://localhost:3000/'

}

export function getParameterByName(name) {

    name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}

if(window.location.hash) {

    var accessToken = getParameterByName('access_token');
    var userDatas = []
// verify below
    var userID = await $.ajax({
        url: `https://api.${ENVIRONMENT}/api/v2/users/me`,
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', `bearer ${accessToken}`);},
        success: function(data) {
            
            userDatas[0] = data.email
            userDatas[1] = data.id
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

export { accessToken, userID, email}