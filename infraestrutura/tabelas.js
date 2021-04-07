// banco de dados

class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentosidosos60 
            (cpf varchar(15),
            PRIMARY KEY(cpf))`
        

        this.conexao.query( sql, erro => {
            if(erro){
                console.log(erro)
            } else{
                console.log('Tabela Atendimentos criada com sucesso')
            }
        } )
    }
}

module.exports = new Tabelas