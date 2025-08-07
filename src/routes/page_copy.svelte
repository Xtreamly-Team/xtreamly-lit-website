<script lang="ts">
    import { browser, building, dev, version } from "$app/environment";
    import CopyClipboardButton from "$lib/components/common/CopyClipboardButton.svelte";
    import { ethers } from "ethers";
    let { data } = $props();

    interface GeneratedWallet {
        pkpSessionSigs: string;
        pkpAddress: string;
        publicKey: string;
        id: string;
    }

    interface GeneratedPrivateKey {
        privateKey: string;
        memo: string;
        id: string;
    }

    const placeholderGeneratedWallet = {
        pkpSessionSigs: "",
        pkpAddress: "0x82342786019C6F51aF7410F17ff5eB5300A46F43",
        publicKey:
            "0x0478daf71a1a36604a7f4e38d97da87ebcf1b8331c1262ba6db82850450dbc587788a9a459485697fd52a4b977cb22c9084f90aad1eb47a5d8fae287a0d64e681e",
        id: "8c012058-87dc-463a-9fef-a05ba43354af",
    };

    const placeholderPrivateKey = {
        privateKey:
            "0x4c0883a69102937d6231471b5f2b8e6c7f8d9e1b2c3d4e5f6a7b8c9d0e1f2a3b",
        memo: "This is a placeholder private key for testing purposes.",
        id: "8c012058-87dc-463a-9fef-a05ba43354af",
    };

    let generatedWallet: GeneratedWallet | undefined = $state(
        placeholderGeneratedWallet,
    );

    let generatedPrivateKey: GeneratedPrivateKey | undefined = $state(
        placeholderPrivateKey,
    );

    let walletAddress = $derived.by(() => {
        if (generatedWallet) {
            return ethers.utils.computeAddress(generatedWallet.publicKey);
        }
    });

    let userSteps:
        | "intro"
        | "generatedWallet"
        | "generatedPrivateKey"
        | "deposited" = $state("intro");

    async function generateWallet() {
        if (browser) {
            const res = await callGenerateWallet();
            generatedWallet = res;
            userSteps = "generatedWallet";
        }
    }

    async function generatePrivateKey() {
        if (browser) {
            const res = await callGetPrivateKey();
            generatedPrivateKey = res;
            userSteps = "generatedPrivateKey";
        }
    }

    function getAddressFromPublicKey() {
        const address = ethers.utils.computeAddress(generatedWallet!.publicKey);
    }

    async function callGenerateWallet() {
        // TODO: Replace Alpha Dale with the actual user nickname
        const res = await fetch("/api/generate_wallet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nickname: "Alpha Dale" }),
        });

        const data = await res.json();
        const generatedAccount: GeneratedWallet = JSON.parse(data.message);
        console.log(generatedAccount.id);
        return generatedAccount;
    }

    async function callGetPrivateKey() {
        const res = await fetch("/api/generate_privkey", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: generatedWallet!.id,
                pkpSessionSigs: generatedWallet!.pkpSessionSigs,
            }),
        });

        const data = await res.json();
        const generatedPrivateKey: GeneratedPrivateKey = JSON.parse(
            data.message,
        );
        console.log(generatedPrivateKey.memo);
        return generatedPrivateKey;
    }
</script>

<div class="h-full flex flex-col justify-center items-center content-center">
    <div
        class="p-4 min-w-80 flex flex-col justify-center border rounded-lg gap-4"
    >
        {#if userSteps === "intro"}
            <button class="btn btn-primary" onclick={generateWallet}>
                Generate Wallet
            </button>
        {:else if userSteps === "generatedWallet"}
            {@render copyableSpan(
                `Wallet Address: ${walletAddress!.slice(0, 24)}...`,
                walletAddress!,
            )}
            {@render copyableSpan(
                `Wallet Public Key: ${generatedWallet!.publicKey.slice(0, 24)}...`,
                generatedWallet!.publicKey,
            )}
            {@render copyableSpan(
                `Wallet id: ${generatedWallet!.id}`,
                generatedWallet!.id,
            )}
            <button class="btn btn-warning" onclick={generatePrivateKey}>
                Get Private Key
            </button>
        {:else if userSteps === "generatedPrivateKey"}
            {@render copyableSpan(
                `Wallet Address: ${walletAddress!.slice(0, 24)}...`,
                walletAddress!,
            )}
            {@render copyableSpan(
                `Wallet Public Key: ${generatedWallet!.publicKey.slice(0, 24)}...`,
                generatedWallet!.publicKey,
            )}
            {@render copyableSpan(
                `Wallet id: ${generatedWallet!.id}`,
                generatedWallet!.id,
            )}
            {@render copyableSpan(
                `Wallet name: ${generatedPrivateKey!.memo}`,
                generatedPrivateKey!.memo,
            )}
            {@render copyableSpanWarning(
                `Wallet Private Key: ${generatedPrivateKey!.privateKey}`,
                generatedPrivateKey!.privateKey,
            )}
            <span class="text-sm text-error">
                Make sure to copy the private key and store it securely.
            </span>
            <button class="btn btn-warning" onclick={() => {}}>
                Deposit
            </button>
        {:else if userSteps === "deposited"}
            <span class="text-lg font-semibold text-green-300">
                Your wallet has been successfully deposited.
            </span>
            {@render copyableSpan(
                `Wallet Address: ${walletAddress!.slice(0, 24)}...`,
                walletAddress!,
            )}
            {@render copyableSpan(
                `Wallet Public Key: ${generatedWallet!.publicKey.slice(0, 24)}...`,
                generatedWallet!.publicKey,
            )}
            {@render copyableSpan(
                `Wallet id: ${generatedWallet!.id}`,
                generatedWallet!.id,
            )}
            {@render copyableSpan(
                `Wallet name: ${generatedPrivateKey!.memo}`,
                generatedPrivateKey!.memo,
            )}
            {@render copyableSpanWarning(
                `Wallet Private Key: ${generatedPrivateKey!.privateKey}`,
                generatedPrivateKey!.privateKey,
            )}
            <span class="text-sm text-error">
                Make sure to copy the private key and store it securely.
            </span>
        {/if}
    </div>
</div>

{#snippet copyableSpan(text: string, copyableText: string)}
    <div class="flex flex-row gap-1">
        <span class="text-sm me-auto">
            {text}
        </span>
        <CopyClipboardButton text={copyableText} />
    </div>
{/snippet}

{#snippet copyableSpanWarning(text: string, copyableText: string)}
    <div class="flex flex-row gap-1 text-green-400">
        <span class="text-xs me-auto">
            {text}
        </span>
        <CopyClipboardButton text={copyableText} />
    </div>
{/snippet}
