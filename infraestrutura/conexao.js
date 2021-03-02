//conexão BD
const mysql = require('mysql2')


const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Xk2ag47HQ4luca$', //CpdVgp@2020
    database: 'cadastroidosos60'
})

module.exports = conexao