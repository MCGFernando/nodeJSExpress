//console.log("Criando um site de noticias")
var  express = require('express');
var app = express();

app.set('view engine','ejs'); //Informa ao Expresse que a nova view engine é o ejs localizado em node_modules
app.set('views', './app/views')
module.exports = app;