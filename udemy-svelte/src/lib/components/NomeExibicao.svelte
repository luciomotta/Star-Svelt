<script lang="ts">
    let firstName = $state('Lúcio');
    let lastName = $state('Motta');
    let fullName = $derived.by(() => {
        console.log(`Calculando derived => Nome Completo `); // #não e uma boa prativa
        return `${firstName} ${lastName}`;
    });

    $effect(() => {
        if(username || fullName) {
            console.log(`Nome Completo ou do usuário: ${username || fullName}`);
        }
    })
    let username = $state()
    
    // URL válida para imagem de calculadora
    let src = 'https://picsum.photos/250/300';
    let bio = 'Olá, <b class="text-red-500">Mundo!</b> <a class="text-blue-600" href="https://www.udemy.com">Udemy</a>';
    
    import Alert from './Alert.svelte';
    
    let showAlert = $state(false); // Adicionado estado para o alerta

    function mostrarAlert () {
        showAlert = true;
        setTimeout(() => {
            showAlert = false;
        }, 3000);
    }



</script>

<div class="body-content grid grid-cols-3 gap-4">

    <div class="hero bg-base-200  flex items-center justify-center col-span-2">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={src} alt="Imagem aleatoria!!" class="max-w-sm rounded-lg shadow-2xl"/>
            <div>
                <h1 class="text-5xl font-bold">Hello {fullName}</h1>
                <input bind:value={firstName} type="text" placeholder="Digite seu nome" class="input input-primary"/>
                <input bind:value={lastName} type="text" placeholder="Digite seu sobrenome" class="input input-secondary"/>
                
                <div class="flex items-center ">
                    <p class="text-center m-4">{@html bio}</p>
                    <button class="btn btn-outline btn-info" onclick={() => {
                        console.clear();
                        console.log(`Nome Completo: ${fullName}`);
                        console.info(`Nome de usuário: ${username}`);
                        mostrarAlert();
                    }}>
                        Exibir nomes
                    </button>
                    <Alert
                        title="Mensagem de Alerta"
                        message="Abra o console para visualizar!"
                        show={showAlert}
                        onClose={() => showAlert = false}
                    />
                                        
                </div>

                <fieldset class="fieldset">
                <legend class="fieldset-legend">Edite a var derivada [fullName]</legend>
                <input type="text" bind:value={fullName} placeholder="Mudar valor derivado..." class="input input-xs" />
                </fieldset>
            </div>
        </div>
    </div>
    <!-- Imagem explicando esse Tutorial -->
    <div class="flex justify-center min-h-[80vh] items-center col-start-3 overflow-hidden" > 
        <img src="/Efeitos_PAG1.png" alt="Imagem explicativa do tutorial" class="max-w-full max-h-[60vh] rounded-lg shadow-2xl "/>
    </div>
    <!--  -->
    <div class="flex w-full flex-col lg:flex-row flex items-center justify-center col-span-2">
        <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center justife-content ">
            <label class="input validator  w-[70%] mt-[5%]">
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
                    bind:value={username}
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
                <br />contendo apenas letras, números, ponto ou hífen
            </p>
        </div>
        <div class="divider lg:divider-horizontal divider-info">=</div>
        <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">
            <h1>{username || fullName}</h1>
        </div>
    </div>
    <!-- explicando Div a cima -->
    <div class="flex justify-center items-center col-start-3">
        <p class="text-center">
            <span class="text-2xl font-bold">Efeitos do USERNAME</span>
            <br />
            <span class="text-lg">Veja como usar os efeitos reativos do Svelte</span>
            <br />
            <span class="text-lg mr-40">+ info no Console.log()...</span>
        </p>
    </div>
    <!--  -->

</div>

<style>
    h1 {
        color: rgb(0, 0, 0);
        font-size: 2em;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

</style>




