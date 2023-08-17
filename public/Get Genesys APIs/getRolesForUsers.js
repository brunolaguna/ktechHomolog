import { accessToken, userID } from '../getAccessToken.js';
import { regionArray } from '../setCloudRegion.js';

const headers = {

    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`

}

axios.get(`${regionArray[1]}/api/v2/users/${userID}/roles`, {headers})

    .then(data => {

        const roles = data.data.roles

        for ( let i = 0; i < roles.length; i++) 
        {
            if ( roles[i].name === 'PERMISSION_HSM' ) 
            {    
                var toggle = document.querySelector('.toggle').style
                document.querySelector('.table-wrapper').style.height = '300px'
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