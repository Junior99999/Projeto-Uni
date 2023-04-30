const express = require('express');
const session =  require('express-session');

const app = express();

//CONFIGURÇÃO DO SISTEMA\\

app.get('/',  function(req,res){
        res.send('Olá mundo')
})

app.listen(8888, function(){
    console.log("Conexão Inicializada")
})