<script>
    import Receita from "$components/paginas/receitas/Receita.svelte";
    import Titulo from "$components/compartilhados/Titulo.svelte";

    import receitas from "$lib/json/receitas.json";

    import { ingredientes } from "$lib/stores/minhaLista";
    import TagLink from "$components/compartilhados/TagLink.svelte";

    $: receitasFiltradas = receitas.filter((receita) => {
        return receita.ingredientes.every((ingrediente) => {
            return $ingredientes.includes(ingrediente);
        });
    });
</script>

<svelte:head>
    <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
    <Titulo tag="h1">Receitas</Titulo>

    <div class="info">
        {#if receitasFiltradas.length}
            <p class="verde">
                Resultados encontrados: {receitasFiltradas.length}
            </p>
            <p>
                Veja as opções de receitas que encontramos com os ingredientes
                que você tem por aí
            </p>
        {:else}
            <p>Não encontramos nenhuma receita com os seus ingredientes :(</p>
        {/if}
    </div>

    {#if receitasFiltradas.length}
        <ul class="receitas">
            {#each receitasFiltradas as receita (receita.nome)}
                <li><Receita {receita} /></li>
            {/each}
        </ul>
    {/if}

    <div class="editar-lista">
        <TagLink href="/">Editar Lista</TagLink>
    </div>
</main>

<style>
    .editar-lista {
        display: flex;
        justify-content: center;
    }
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .info > p.verde {
        color: var(--verde);
    }

    .receitas {
        text-align: start;
        margin-bottom: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
</style>
