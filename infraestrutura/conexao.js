const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Aruanda22',
    database: 'agenda-petshop'
})

module.exports = conexao