import { writable } from "svelte/store";

const { set, subscribe, update } = writable<string[]>([]);

export const ingredientes = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente: string) {
        update((va) => [...va, ingrediente])
    },
    removerIngrediente(ingrediente: string) {
        update((va) =>
            va.filter((item) => item !== ingrediente))
    }
}