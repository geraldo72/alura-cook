<script>
    import "../app.css";

    import Cabecalho from "$components/paginas/layout/Cabecalho.svelte";
    import MinhaLista from "$components/paginas/layout/MinhaLista.svelte";
    import Rodape from "$components/paginas/layout/Rodape.svelte";

    import { ingredientes } from "$lib/stores/minhaLista";
</script>

<div class="container-principal">
    <Cabecalho />
    <div class="estilo-principal">
        {#if $ingredientes.length}
            <div class="minha-lista-container">
                <MinhaLista />

                <div class="divisoria" />
            </div>
        {/if}
        <slot />
    </div>
    <Rodape />
</div>

<style>
    .minha-lista-container {
        margin-bottom: 2rem;
    }
    .divisoria {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }
    .container-principal {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .estilo-principal {
        text-align: center;
        padding: 0 5vw 3.375rem;
        flex: 1;
    }
</style>
