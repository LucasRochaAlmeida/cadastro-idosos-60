//config do servidor
const mysql = require('mysql2')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Atendimento = require('./models/atendimentos')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require('./infraestrutura/conexao')
const { dirname } = require('path')

const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(express.static('public'))


conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else{

        server.get('/', (req, res)=> {
            return res.sendFile(path.join(__dirname, 'public', 'pagina.html'))
        })
        
        server.post('/', (req, res) => {
            const atendimento = req.body
    
            Atendimento.adiciona(atendimento, res)
            
        } )

        Tabelas.init(conexao)
        
        server.listen(3000)
    }

})