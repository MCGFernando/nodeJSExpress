var app = require('./config/server')
var rotanoticias = require('./app/routes/noticias')
var rotahome = require('./app/routes/home')
var rotaforminclusaonoticias = require('./app/routes/formulario_inclusao_noticias')

rotanoticias(app)
rotahome(app)
rotaforminclusaonoticias(app)

app.listen(3000, function(){
    console.log("Servidor rodando pelo express");
})
