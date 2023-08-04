import { accessToken, userID } from '../getAccessToken.js';

export function getRoles() {

    return new Promise((resolve, reject) => {

        const headers = {

            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`

        }

        axios.get(`api/api/v2/users/${userID}/roles`, {headers})

        .then(data => {

            const roles = data.data.roles

            for ( let i = 0; i < roles.length; i++) {

                if ( roles[i].name === 'PERMISSION_HSM' ) {
                    
                    var permission = true
                    break
                    
                } else { var permission = false }
            }

            resolve(permission)

        })

        .catch((err) => {

            console.log("There was a failure calling getUserRoles");
            console.error(err);
            reject(err)

        });
    })
}