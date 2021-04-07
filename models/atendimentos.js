const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento, res){
        

        const sql = 'INSERT INTO atendimentosidosos60 SET ?'

        conexao.query(sql, atendimento,(erro, resultados) => {
            if(erro){
                res.send('cpf já cadastrado!')
            } else{
            res.send('<a href="http://vgpcontraacovid.ddns.net:2002/">Tudo certo! Clique aqui para continuar o cadastro!</a>')
        }
        } )
    }
}

module.exports = new Atendimento