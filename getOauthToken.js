async function getOauthToken(url) {

    return new Promise((resolve, reject) => {

        var clientId = 'a2c1a09f-5893-4123-9291-230c36c78a3e'
        var clientSecret = 'ZGT6coAewAxI7i-P4CgRKT6I5k57-B2eqAqvfnwKy2E'
        var url_geToken = 'https://login.sae1.pure.cloud/oauth/token'

        var encodedData = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

        const headers = {

            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodedData}`

        }

        const body = new URLSearchParams()
        
        body.append('grant_type', 'client_credentials')

        fetch( url_geToken, {

            method: 'POST',
            headers,
            body
            
        })
            
        .then(response => response.json())
            
        .then(data => { resolve(data.access_token) })

        .catch(error => {

            console.error(error);
            reject(error)

        });
    })
}

module.exports = { getOauthToken }