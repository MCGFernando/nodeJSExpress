var dbConnection = require('../../config/dbConnection')
module.exports = function (app) {
    
    var conn = dbConnection()
    app.get('/noticias', function (req, res) {
        //sem o ejs
        //res.send('<html><body>Noticias de Tecnologia</body></html>');
        //com o ejs

        conn.query("SELECT * FROM noticia", function (error, result) {
            //res.send(result);
            res.render('noticias/noticias', {noticias:result});
        })
        

    });
}
