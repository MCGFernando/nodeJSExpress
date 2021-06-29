module.exports = function(app){
    app.get('/formulario_inclusao',function(req, res){
        //res.send('<html><body>Portal de Noticias</body></html>');
        res.render('admin/form_add_noticia')
    });
}

