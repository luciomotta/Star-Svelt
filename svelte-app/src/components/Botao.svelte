<script lang="ts">
    export let texto: string = "Clique Aqui";
    export let duplo: boolean = false
    export let triplo: boolean = false
    export let operacao: boolean = false
    export let destaque: boolean = false
    export let onClick: (valor: string) => void = () => {};


</script>

<button  class="botao" 
    on:click={() => onClick(texto)}
    class:triplo class:duplo class:operacao class:destaque>
    {texto}
</button>

<style>
    .botao{
        flex-basis: 25%;
        margin: 0%;
        border: 1px solid var(--cor-fundo);
    }

    .duplo {
        flex-basis: 50%;
    }

    .triplo {
        flex-basis: 75%;
    }

    .operacao {
        background-color: #fa8231;
        color: white;
    }

    .destaque {
        background-color: #4cd137;
        color: white;
    }
    
</style>