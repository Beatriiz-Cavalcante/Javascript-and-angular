//importação

/* Uma sala contem 5 alunos e para cada aluno foi sorteado um numro de 1 -100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado
Dados de entrada:
5
50
10
98
23
Saída:
98
*/

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let maior = 0;
for (let i =0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado>maior){
        maior = numerosSorteado;
    }
}
console.log(maior);