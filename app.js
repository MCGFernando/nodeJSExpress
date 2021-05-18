//console.log("Criando um site de noticias")
var  express = require('express');
var  msg = require('./mod_teste')();
var app = express();

app.set('view engine','ejs'); //Informa ao Expresse que a nova view engine é o ejs localizado em node_modules

app.get('/',function(req, res){
    //res.send('<html><body>Portal de Noticias</body></html>');
    res.render('home/index')
});
app.get('/formulario_inclusao',function(req, res){
    //res.send('<html><body>Portal de Noticias</body></html>');
    res.render('admin/form_add_noticia')
});
app.get('/noticias',function(req, res){
    //sem o ejs
    //res.send('<html><body>Noticias de Tecnologia</body></html>');
    //com o ejs
    res.render('noticias/noticias');

});
app.listen(3000, function(){
    console.log(msg);
})
