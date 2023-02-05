<script lang="ts">
    import { ingredientes } from "$lib/stores/minhaLista";
    import Tag from "$components/compartilhados/Tag.svelte";

    export let ingrediente: string;

    $: selecionado = $ingredientes.includes(ingrediente);

    function aoClicar() {
        if (!selecionado) {
            ingredientes.adicionarIngrediente(ingrediente);
        } else {
            ingredientes.removerIngrediente(ingrediente);
        }
    }
</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
    button {
        cursor: pointer;
    }
</style>
