const objeto = { nome: "Carlos", idade: 38};
const novoObjeto = { ...objeto};

console.log(novoObjeto);

const objeto1 = { nome: "Ana", idade: 25};
const objeto2 = { cidade: "São Paulo", país: "Brasil"};
const resultado = { ...objeto1, ...objeto2};

console.log(resultado);

const objeto3 = { ...objeto1, profissão: "Programadora"};
console.log(objeto3);

const array1 = [1,2,3];
const array2 = [4,5,6];
const novoArray = [ ...array1, ...array2];

console.log(novoArray);
