// objeto
const Beatriz = {
    nome: 'Beatriz Menezes',
    idade: 22,

    descrever: function() {
        console.log(`Meu nome pe ${this.nome} e eu tenho ${this.idade} anos`);
    }
};
Beatriz.descrever();