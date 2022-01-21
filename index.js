const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const {salvarSeguro, listarSeguros} = require('./seguro-services');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);
app.use(cors);
app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);


const HOST='localhost';
const PORT=9000;

const httpServer = app.listen(PORT,HOST, ()=> { 
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});