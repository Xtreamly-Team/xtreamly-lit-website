<script lang="ts">
    import { type Snippet } from "svelte";

    let {
        icons,
        labels,
        tabs,
    }: {
        tabs: Snippet[];
        icons: Snippet[];
        labels: string[];
    } = $props();

    let myState: HTMLElement[] = $state(Array(tabs.length));

    export function clickOnFirstTab() {
        myState[0].click();
    }
</script>

<div class="tabs tabs-lift" role="radiogroup" id={"unique_group"}>
    {#each tabs as tab, i}
        <label class="tab">
            <input
                type="radio"
                name="my_tabs_4"
                id={`tab_{i}`}
                bind:this={myState[i]}
            />
            <div class="mx-2">
                {@render icons[i]()}
            </div>
            {labels[i]}
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-6">
            {@render tab()}
        </div>
    {/each}
</div>
