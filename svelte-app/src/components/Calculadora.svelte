<script lang="ts">
    import Botao from "./Botao.svelte";
    import Linha from "./Linha.svelte";
    import Tela from "./Tela.svelte";


    class Model {
        valor: string;
        constructor(valor: string = '0'){
            this.valor = valor;
        }

        inc() {
            return new Model( this.valor = (parseInt(this.valor) + 1).toString());
        }
    }

    let obj= new Model();

    // Função para lidar com o clique nos botões numéricos
    function numDigitado() {
        obj = obj.inc();
    }
</script>

<div class="calculadora">
    <Tela valor={obj.valor} />
    <Linha>
        <Botao destaque triplo texto="AC" />
        <Botao operacao texto="/" />
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numDigitado} />
        <Botao texto="8" onClick={numDigitado}/>
        <Botao texto="9" onClick={numDigitado}/>
        <Botao operacao texto="*" />
    </Linha>
    <Linha>
        <Botao texto="4" onClick={numDigitado} />
        <Botao texto="5" onClick={numDigitado} />
        <Botao texto="6" onClick={numDigitado}/>
        <Botao operacao texto="+" />
    </Linha>
    <Linha>
        <Botao texto="1" onClick={numDigitado}/>
        <Botao texto="2" onClick={numDigitado}/>
        <Botao texto="3" onClick={numDigitado}/>
        <Botao operacao texto="-" />
    </Linha>
    
    <Linha>
        <Botao duplo texto="0" onClick={numDigitado}/>
        <Botao texto="," />
        <Botao destaque texto="=" />
    </Linha>
    

</div>


<style>
    .calculadora {
        width: 150px;
        height: 220px;
        background-color: var(--cor-fundo);
        padding: 10px;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
    }
</style>