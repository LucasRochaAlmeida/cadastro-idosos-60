const conexao = require('../infraestrutura/conexao')
const path = require('path')

class Atendimento{
    adiciona(atendimento, res){
        

        const sql = 'INSERT INTO atendimentosidosos60 SET ?'

        conexao.query(sql, atendimento,(erro, resultados) => {
            if(erro){
                res.send('cpf já cadastrado!')
                console.log(erro)
            } else{
            res.sendFile(path.join(__dirname,'fimcadastro.html'))
            console.log(resultados)
        }
        } )
    }

    lista(res){
        const sql = 'SELECT cpf FROM atendimentosidosos60'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
        }

        } )
    }
}

module.exports = new Atendimento