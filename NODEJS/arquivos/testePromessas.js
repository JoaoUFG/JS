import chalk from "chalk";
import IOStream from "fs";

 function ler(){

let x=  IOStream.readFileSync("./materiais/texto.md","utf-8")
console.log("--> inside funciotn"+chalk.blue(x))
return x;
}
console.log(ler())

async function ler2(){

  let x=  await IOStream.readFileSync("./materiais/texto.md","utf-8")
  console.log("--> inside funciotn"+chalk.blue(x))
  return x;
  }
  console.log(ler2())