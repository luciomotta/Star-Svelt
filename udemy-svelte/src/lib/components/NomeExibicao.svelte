<script lang="ts">
    let fistName = $state('Lúcio');
    let lastName = $state('Motta');
    let fullName = $state(`${fistName} ${lastName}`);
// URL válida para imagem de calculadora
    let src = 'https://picsum.photos/250/300';
    let bio = 'Olá, <b class="text-red-500">Mundo!</b> <a class="text-blue-600" href="https://www.udemy.com">Udemy</a>';
</script>

<div>
    <h1>Hello {fistName}</h1>
    <img src={src} alt={`foto do ${fistName}`} class="w-32 h-32">
    <p>{@html bio}</p>
</div>

<style>
    h1 {
        color: blue;
        font-size: 2em;
    }
</style>




