<script lang="ts">
    import Botao from "./Botao.svelte";
    import Linha from "./Linha.svelte";
    import Tela from "./Tela.svelte";
    import CalculadoraModel from "../model/CalculadoraModel";

    let calc = new CalculadoraModel();

    const numeroDigitado = num => calc = calc.numeroDigitado(num);
</script>

<div class="calculadora">
    <Tela valor={calc.valor} />
    <Linha>
        <Botao destaque triplo texto="AC" />
        <Botao operacao texto="/" />
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numeroDigitado} />
        <Botao texto="8" onClick={numeroDigitado }/>
        <Botao texto="9" onClick={numeroDigitado }/>
        <Botao operacao texto="*" />
    </Linha>
    <Linha>
        <Botao texto="4" onClick={numeroDigitado } />
        <Botao texto="5" onClick={numeroDigitado } />
        <Botao texto="6" onClick={numeroDigitado }/>
        <Botao operacao texto="+" />
    </Linha>
    <Linha>
        <Botao texto="1" onClick={numeroDigitado }/>
        <Botao texto="2" onClick={numeroDigitado }/>
        <Botao texto="3" onClick={numeroDigitado }/>
        <Botao operacao texto="-" />
    </Linha>
    
    <Linha>
        <Botao duplo texto="0" onClick={numeroDigitado }/>
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