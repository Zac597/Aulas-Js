// String, Number, undefined, null, boolean, symbol

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> não aponta para local  nenhum
let sobreNomeAluno = null; // Nulo -> não aponta para local nenhum
const aprovado = true; // boolean = true, false (lógico)

const a = [1, 2];
const b = a;

console.log(a, b)

b.push(3);
console.log(a, b)