import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Arquivooo indevido"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding);
        console.log(chalk.blue(texto));
    }catch(e){
        trataErro(e);
    }
}




/*
function pegaArquivo(caminho){
    const utf = "utf-8";
    //let textoRetorno = "";
     fs.readFile(caminho,utf,(erro, texto)=>{
        if(erro){
            console.log(erro)
            throw new Error(chalk.red(erro.code,"Arquivo indevido"));
        }
         console.log(chalk.green(texto)); 
    });
}


function pegaArquivo(caminho){
    const encoding = "utf-8";
    fs.promises.readFile(caminho, encoding)
    .then(texto=>console.log(chalk.blue(texto)),
    ).catch(trataErro);
}
*/

pegaArquivo('./materiais/texto.md');

//\[[^[\]]*?\]
























