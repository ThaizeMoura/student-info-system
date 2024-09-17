//Importação do Express
const express = require ('express');
const app = express();

//Middleware de JSON
app.use (express.json());

//Rota GET
app.get('/apijson', (req,res) => {
    res.json({message : 'API pronta para receber dados'});
});

//Rota POST 
app.post('/apijson', (req,res) => {
    const data = req.body;
    res.json({receivedData: data});
});

//Definindo e inicializando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

