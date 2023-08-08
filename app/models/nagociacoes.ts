import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacioes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacioes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacioes;
    }

};

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    
})