// ARROW FUNCTIONS

// FUNCAO TRADICIONAL

function soma(num1, num2) {
    return num1 + num2;
}

let somaAF = (num1, num2) => num1 + num2;


console.log(soma(2,2));
console.log(somaAF(1,2));

let dobra = num => num * 2;
console.log(dobra(5));

let saudacao = () => console.log("Olá!");
saudacao();