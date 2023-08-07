export class Negociacoes {
    constructor() {
        this.negociacioes = [];
    }
    adiciona(negociacao) {
        this.negociacioes.push(negociacao);
    }
    lista() {
        return this.negociacioes;
    }
}
;
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
});
