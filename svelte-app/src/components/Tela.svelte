
<script lang="ts">
    export let valor: string
    

    $: tamFonte  = valor.length >  20 ? 'pequena' : `S-${valor.length}`
</script>

<div class={`tela ${tamFonte}`}>
    <span>{valor}</span>
</div>

<style>
    .tela {
        display: flex;
        flex: 1;
        background-color: aliceblue;
        align-items: center;
        justify-content: end;
        padding: 0px 5px;
        overflow: hidden;
        font-size: 1.7rem;
        margin: 2px 1px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .S-10 { font-size: 1.4rem; } 
    .S-11 { font-size: 1.2rem; } 
    .S-12 { font-size: 1.1rem; } 
    .S-13 { font-size: 1.0rem; } 
    .S-14 { font-size: 0.9rem; } 
    .S-15 { font-size: 0.8rem; } 
    .S-16 { font-size: 0.7rem; } 
    .S-17 { font-size: 0.6rem; } 
    .S-18 { font-size: 0.5rem; } 
    .S-19 { font-size: 0.4rem; } 
    .S-20 { font-size: 0.35rem; }

    .pequena {font-size: 0.3rem;}
</style>