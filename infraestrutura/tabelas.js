// banco de dados

class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentosidosos60 
            (nome text,
            cpf varchar(15),
            dataDeNascimento text,
            idade text,
            tel text,
            tel2 text,
            logradouro text,
            numero text,
            bairro text,
            municipio text,
            estado text,
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