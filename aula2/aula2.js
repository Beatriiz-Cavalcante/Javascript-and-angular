//Função escreva meu nome
function Nomear(nome) {
    return nome;
}


//função verifica idade

function VerificaIdade(idade){
    if(idade>=18){
        console.log(`${Nomear('Beatriz')}. Você é maior de idade`);
    } else {
        console.log(`${Nomear('Beatriz')}. Você é menor de idade`);
    }
}
VerificaIdade(18);

/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100;
const formaPagamento = 'Crédito';

function aplicarDesconto(preco, desconto) {
    const precoComDesconto = preco - (preco * desconto);
    return precoComDesconto;
}
function aplicarjuros(preco, juros) {
    const precoComJuros = preco + (preco * juros);
    return precoComJuros;
}

if (formaPagamento == 'Débito'){
    console.log(aplicarDesconto(preco, 0.1));
} else if(formaPagamento == 'Dinheiro' || formaPagamento == 'Pix') {
    console.log(aplicarDesconto(preco, 0.15));
} else if(formaPagamento == 'Crédito<2'){
    console.log(`${preco}`);
} else {
    console.log(aplicarjuros(preco, 0.1));
}
