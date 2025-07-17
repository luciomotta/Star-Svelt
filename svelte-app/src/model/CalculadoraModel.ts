const nao_Limpar_Tela = false; // Variável para não limpar a tela

export default class CalculadoraModel {
    #valor: string = " ";
    #acumulador: number;
    #limparTela: boolean;
    #operacao: string;

    constructor(valor: string = null, acumulador: number = null, operacao: string = null, limparTela = false) { 
        //Inicializando todos os atributos e definindo os  valores iniciais Construtor(VARIÁVEL:VALOR)
        this.#valor = valor
        this.#acumulador = acumulador
        this.#limparTela = limparTela
        this.#operacao = operacao
    }

    get valor() { //chamar valor como VAR e não Function [getValor()]|| depois um replace para trocar . em , para exibir o valor corretamente
        return this.#valor.replace('.', ',') || 0

    }

    numeroDigitado(novoValor: string) {
        console.log('Valor digitado:', novoValor);
        return new CalculadoraModel(
        (this.#limparTela || !this.#valor) ? novoValor: this.#valor + novoValor,
        this.#acumulador,
        this.#operacao,
        nao_Limpar_Tela
        )
    }


}


