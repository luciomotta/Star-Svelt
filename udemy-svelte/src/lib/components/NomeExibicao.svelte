<script lang="ts">
    let firstName = $state('Lúcio');
    let lastName = $state('Motta');
    let fullName = $derived.by(() => {
        return `${firstName} ${lastName}`
    });

    $effect(() => {
        if(username || fullName) {
            console.log(`Nome de usuário: ${username || fullName}`);
        }
    })
    let username = $state()
// URL válida para imagem de calculadora
    let src = 'https://picsum.photos/250/300';
    let bio = 'Olá, <b class="text-red-500">Mundo!</b> <a class="text-blue-600" href="https://www.udemy.com">Udemy</a>';
</script>

<div>
    <h1>Hello {fullName}</h1>
    <img src={src} alt={`foto do ${firstName}`} class="w-32 h-32">

    <!-- <input bind:value="{username}" type="text" placeholder="Digite seu nome de usuário" class="input"/> -->
    <label class="input validator">
    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2.5"
        fill="none"
        stroke="currentColor"
        >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        </g>
    </svg>
    <input
        bind:value="{username}"
        type="text"
        required
        placeholder="Nome de usuário"
        pattern="[A-Za-z][A-Za-z0-9\-.]*"
        minlength="3"
        maxlength="30"
        title="Apenas letras, números ou hífen"
    />
    </label>
    <p class="validator-hint">
        Deve ter de 3 a 30 caracteres
        <br />contendo apenas letras, números ou hífen
    </p>
    
    <input bind:value="{firstName}" type="text" placeholder="Digite seu nome" class="input input-primary"/>
    <input bind:value="{lastName}" type="text" placeholder="Digite seu sobrenome" class="input input-secondary"/>
    <h1>{username || fullName}</h1>
    <p>{@html bio}</p>
</div>



<style>
    h1 {
        color: rgb(0, 0, 0);
        font-size: 2em;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }


</style>




