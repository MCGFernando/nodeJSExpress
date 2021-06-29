var mysql = require('mysql')
module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'marodcgf07',
        database: 'portal_noticias'
    })
}
