import chalk from 'chalk';
import fs from 'fs';

function pegaArquivo(caminho){
   
    const utf = "utf-8";
    //let textoRetorno = "";
     return fs.readFileSync(caminho,utf,(_, texto)=>{
        
         //console.log(chalk.green(texto));
         //textoRetorno = texto;
    });

  
}

let x = pegaArquivo('./materiais/texto.md').split("(https://");

console.log(x.length);























