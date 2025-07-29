<script lang="ts">
    import { type Snippet } from "svelte";
    import type { AsyncCallback, Callback } from "$lib/utils";

    let modal: HTMLDialogElement;

    interface Props {
        size?: "small" | "medium" | "large";
        opener: Snippet;
        modalContent: Snippet<[Callback]>;
        onOpen: AsyncCallback;
        disabled?: boolean;
    }

    let {
        size = "large",
        opener,
        modalContent,
        onOpen = async () => {},
        disabled = false,
    }: Props = $props();

    function closeModal() {
        modal.close();
    }

    export async function openModal() {
        await onOpen();
        modal.showModal();
    }
</script>

<!-- Open the modal using ID.showModal() method -->
{#if disabled}
    <a class="flex flex-row items-center cursor-not-allowed">
        {@render opener()}
    </a>
{:else}
    <a
        class="flex flex-row items-center cursor-pointer"
        onclick={async () => {
            await openModal();
        }}
    >
        {@render opener()}
    </a>
{/if}
<dialog class="modal" bind:this={modal}>
    {#if size === "small"}
        <div class="modal-box w-4/12 max-w-5xl overflow-y-scroll">
            {@render modalContent(closeModal)}
        </div>
    {:else if size === "medium"}
        <div class="modal-box w-7/12 max-w-5xl overflow-y-scroll">
            {@render modalContent(closeModal)}
        </div>
    {:else}
        <div class="modal-box w-9/12 max-w-5xl overflow-y-scroll">
            {@render modalContent(closeModal)}
        </div>
    {/if}
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
