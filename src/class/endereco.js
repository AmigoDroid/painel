class Endereco {
    constructor(uf,cep,cidade,bairro,rua,numero,complemento){
        this.uf = uf;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    }
    getJson(){
        return{
            uf:this.uf,
            cep:this.cep,
            cidade:this.cidade,
            bairro:this.bairro,
            rua:this.rua,
            numero:this.numero,
            complemento:this.complemento
        }
    }
}
export default Endereco