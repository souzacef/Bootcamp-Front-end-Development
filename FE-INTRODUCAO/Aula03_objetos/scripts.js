const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    cor: 'Branco'
}

console.log(carro.marca);
console.log(carro["cor"]);


const pessoa = {
    nome: 'Maria',
    sobrenome: 'Santos',
    fullName: function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa.fullName());
 

const pessoa2 = new Object;
pessoa2.nome = 'Carlos';
pessoa2.sobrenome = 'Souza';

console.log(pessoa2.nome + ' ' + pessoa2.sobrenome);
