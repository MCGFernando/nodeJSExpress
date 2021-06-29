
module.exports = function(app){
    app.get('/',function(req, res){
    //res.send('<html><body>Portal de Noticias</body></html>');
    res.render('home/index')
});
}