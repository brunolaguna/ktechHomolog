const express = require('express');
const path = require('path');
const { apiProxy, sae1ApiProxy } = require('./createProxy.js')
const { queryConversationDetails } = require("./queryConversationDetails.js")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', apiProxy);
app.use('/apiSae1', sae1ApiProxy);

app.use(express.urlencoded({ extended: true }))

// Configurar o diretório para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

app.get("/LeroyMerlin", (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get("/Sirio-Libanes", (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get("/Sephora", (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get("/Ktech", (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.post('/verifyClient', async (req, res) =>
{
    //const setGenesysRegion = await get
    const clientInteracting = await queryConversationDetails(req.body.Telefone, req.body.AccessToken, req.body.pathName)

    res.status(200).json({ client: clientInteracting })
})

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});