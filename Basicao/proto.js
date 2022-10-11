

class Colecionador{
    nome;
    colecao;
    constructor(nome,colecao){
        this.nome = nome;
        this.colecao = colecao;


    }
    adicionarNumero(n4){


        this.colecao.push(n4);
        }
}
let joao = new Colecionador("joao",[1,2]);

let funcao = Colecionador.prototype.adicionarNumero.bind(joao);

funcao(-9999);
console.log(joao);

