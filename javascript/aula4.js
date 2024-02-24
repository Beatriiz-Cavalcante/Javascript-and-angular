//arrays e estrutura de repetição

//Lista de exercício
//Crie um programa que dado um número imprima a sua tabuada.

const numero = 5;
for(let i =1; i <= 10; i++){
    console.log(i*numero);
}

//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 == 0) {
        console.log(numero);
    }
}

//Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosPares = [];
for (let i = 10; i <= 50; i++) {
    if(i%2 ==0){
        numerosPares.push(i); //push é um método para adicionar elementons no fim de um array
    }
}
console.log(numerosPares);

// Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Beatriz', 'Vitoria', 'Valda', 'Mana'];
const inicial = 'V';

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    if (nome.startsWith(inicial)) {
        //startsWith é um método que verfica strings através de uma condição
        console.log(nome);
    }
}

/*Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]*/

const medias = [2, 7, 3, 8, 10, 4];
for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if(media<5){
        console.log(media);
    }    
}

/*Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

const notas = [2, 7, 3, 8, 18, 4];
let maiorNota = notas[0];
for(let i=0; i< notas.length; i++){
    if(notas[i] > maiorNota){
        maiorNota = notas[i];
    }
}
console.log(maiorNota);