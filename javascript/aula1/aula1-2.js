/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.35;
const precoGasolina = 6;
const combustivelUtilizado = 'El';
const kmporLitros = 12;
const distanciaemkm = 100;
const consumo = distanciaemkm / kmporLitros;
//let valortotal = consumo * precoCombustivel;

if (combustivelUtilizado == 'Gasolina') {
    let valortotal = consumo * precoGasolina;
    console.log(valortotal.toFixed(2));
} else if (combustivelUtilizado == 'Etanol') {
    let valortotal = consumo * precoEtanol;
    console.log(valortotal.toFixed(2));
} else {
    console.log('Combustível inválido');
}
