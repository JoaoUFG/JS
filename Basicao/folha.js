let cliente = {
    nome : "joao",
    idade : 19,
    dataNasc :"01/01/1999",
    saldo: 100,
    dependente:[{
        nome: "sara",
        idade: 19,
        cpf : "0610851",
        dataNasc :"01/01/1990",
    }],
    depositar:function (valor){
        this.saldo+=valor;
    }
}
cliente.dependente.push({
    nome:"eeeeobait",
    idade:2022-1999,
    dataNasc: "01/01/1999"
})


function oferecerSeguro(obj){
    const chaves = Object.keys(obj);
    if(chaves.includes("dependente")){
        return obj["dependente"];
    }
}

const clientes = [cliente,cliente]


let listaDependentes = [...clientes[0].dependente,...clientes[1].dependente];
console.table(listaDependentes)


let guerreiro = {
    nome : "joao",
    classe : "paladino"
}

let espada = {
    dano : "12.5%",
    peso : "pesado"
}

let jogador = {...guerreiro,...espada}
console.table(jogador);



for(let iterator in jogador){
    console.log(`OBJ: ${jogador[iterator]}`);

}



//values
//entries
//keys


