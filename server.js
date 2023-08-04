const express = require('express');
const { error } = require('console')

const { sae1_apiProxy } = require('./createProxy.js')
const { getOauthToken } = require('./getOauthToken.js')
const { sendWorkFlow } = require("./sendWF.js")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/apiSae1', sae1_apiProxy);

app.use(express.urlencoded({ extended: true }))

// Configurar o diretório para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

app.post('/accessToken', async (req, res) => {

    //app.set('accessToken', req.body.token)

    const newToken = await getOauthToken(req.body.pathName)
    
    res.json({ accessToken: newToken })

})

app.post('/sendWF', async (req, res) => {

    const values = req.body
    //const oauthToken = req.body[8]

    console.log(values)

    const status = await sendWorkFlow(values)
    console.log(status)

    if ( status == 200 ) { res.status(200).json(status) } 
    else if ( status == 409 ) { res.status(409).json(status) } 
    else {

        console.log("Status desconhecido")
        throw error("Status desconhecido")

    }

})

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});