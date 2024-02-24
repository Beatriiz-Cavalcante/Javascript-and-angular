// objeto
const Beatriz = {
    nome: 'Beatriz Menezes',
    idade: 22,

    descrever: function() {
        console.log(`Meu nome pe ${this.nome} e eu tenho ${this.idade} anos`);
    }
};
Beatriz.descrever();

//classes

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        /*construtores servem para garantir que as classes sejam instaciadas com
        as propriedades "obrigatórias"
        */
    }

    descrever() {  //na sintaxe da classe não precisa colocar o function para declarar o método
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

//instância 
const pessoa1 = new Pessoa();
pessoa1.nome = 'Bia';
pessoa1.idade = 22;
console.log(pessoa1);
pessoa1.descrever();

//classe é a definição e instância é a ocorrência

//trabalhando com classes em funções

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const pessoaNomeVariavelNaoImporta = new Pessoa('Clara', 30);
const pessoa2 = new Pessoa('Valda', 50);

compararPessoas(pessoaNomeVariavelNaoImporta, pessoa2);