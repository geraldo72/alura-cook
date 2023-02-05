<script lang="ts">
    import Titulo from "$components/compartilhados/Titulo.svelte";

    import categorias from "$lib/json/categorias.json";
    import Categoria from "$components/paginas/index/Categoria.svelte";

    import { ingredientes } from "$lib/stores/minhaLista";
    import { beforeNavigate } from "$app/navigation";
    import TagLink from "$components/compartilhados/TagLink.svelte";

    $: listaVazia = $ingredientes.length === 0;

    beforeNavigate((nav) => {
        if (listaVazia && nav.to?.url.pathname === "/receitas") {
            nav.cancel();
        }
    });
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

<main>
    <Titulo tag="h1">Ingredientes</Titulo>
    <div class="info">
        <p>
            Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:
        </p>
        <p>
            *Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </div>
    <ul class="categorias">
        {#each categorias as categoria (categoria.nome)}
            <Categoria {categoria} />
        {/each}
    </ul>

    <div class="buscar-receitas">
        <TagLink href="/receitas" desabilitada={listaVazia}
            >Buscar Receitas</TagLink
        >
    </div>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }
    .categorias {
        margin-bottom: 4.6875rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
    .buscar-receitas {
        display: flex;
        justify-content: center;
    }
</style>
