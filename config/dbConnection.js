var mysql = require('mysql')
module.exports = function(){
    return mysql.createConnection({
        host: '192.168.100.25',
        port:3306,
        user: 'root',
        password: 'mypass',
        database: 'portal_noticias'
    })
}
