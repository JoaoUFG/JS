function Cliente(nome, cpf, email, saldo){
this.nome = nome;
this.cpf = cpf;
this.email = email;
this.saldo = saldo;
this.depositar = function (valor){
    this.saldo+=valor;
}

}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    
    Cliente.call(this,nome,cpf,email,saldo );
    this.saldoPoup = saldoPoup;


}

const ju = new ClientePoupanca("Ju","555888447771","ju@hotmail.com",100,1032.1); 

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup+= valor;
}

console.log(Object.getOwnPropertyDescriptor(ju,"nome"));