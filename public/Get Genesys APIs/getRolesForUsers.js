import { accessToken, userID } from '../getAccessToken.js';

const headers = {

    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`

}

axios.get(`api/api/v2/users/${userID}/roles`, {headers})

    .then(data => {

        const roles = data.data.roles

        for ( let i = 0; i < roles.length; i++) {

            if ( roles[i].name === 'PERMISSION_HSM' ) {
                
                var toggle = document.querySelector('.toggle').style
                toggle.position = 'relative'
                toggle.opacity = '1' 
                toggle.zIndex = '0'
                return
                
            }

        }

    })

    .catch((err) => {

        console.log("There was a failure calling getUserRoles");
        console.error(err);
        reject(err)
        
    });