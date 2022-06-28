/* Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8 de altura e seu IMC é de 25, Luiz Otávio nasceu em 1992
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'
const idade = 33;
const peso = 84;
const altura = 1.80; //Metros

let anoAtual = 2022 
const nasc = anoAtual - idade;

let IMC = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa ', peso,'kg tem', altura,'M de altura e seu IMC é de ' ,IMC, nome, 'nasceu em', nasc);