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
}

module.exports = new Atendimento