const express = require('express');
const { apiProxy } = require('./createProxy.js')
const { queryConversationDetails } = require("./queryConversationDetails.js")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', apiProxy);

app.use(express.urlencoded({ extended: true }))

// Configurar o diretório para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

app.post('/verifyClient', async (req, res) =>
{    
    const clientInteracting = await queryConversationDetails(req.body.Telefone, req.body.AccessToken)

    res.status(200).json({ client: clientInteracting })
})

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});