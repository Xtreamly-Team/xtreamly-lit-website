<script lang="ts">
    import { onMount, type Snippet } from "svelte";

    let metrics = $state({
        tvl: "$100",
        transactionVolume: "$76",
        totalWalletsCreated: "3",
        apy: "%83.12",
        supportedTokens: 3,
        supportedChains: 6,
        blocksProcessed: 0,
    });

    onMount(async () => {});
</script>

{@render MetricsGrid()}

{#snippet MetricsGrid()}
    <div class="px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {@render TVLMetric()}
            {@render VolumeMetric()}
            {@render UsersMetric()}
            {@render SupportedTokensMetric()}
            <!-- {@render SupportedChainsMetric()} -->
            {@render APYMetric()}
        </div>
    </div>
{/snippet}

{#snippet TVLMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div class="text-blue-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">Total Value Locked</p>
        <p class="text-3xl font-bold mt-1">{metrics.tvl}</p>
        <!-- <p class="text-green-500 mt-2">↑ 24.6% this month</p> -->
    </div>
{/snippet}

<!-- TODO: Change Icon -->
{#snippet SupportedTokensMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <!-- <div -->
        <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <div class="text-blue-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">Supported Tokens</p>
        <p class="text-3xl font-bold mt-1">{metrics.supportedTokens}</p>
        <!-- <p class="text-green-500 mt-2">↑ 13 this month</p> -->
    </div>
{/snippet}

{#snippet UsersMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <!-- <div -->
        <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <div class="text-green-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">Active Wallets</p>
        <p class="text-3xl font-bold mt-1" id="userCount">
            {metrics.totalWalletsCreated}
        </p>
        <!-- <p class="text-green-500 mt-2">↑ 18.3% this month</p> -->
    </div>
{/snippet}

{#snippet BlocksMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <!-- <div -->
        <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <div class="text-purple-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">Blocks Processed (in 24Hrs)</p>
        <p class="text-3xl font-bold mt-1">
            {23123123}
        </p>
        <!-- <p class="text-green-500 mt-2">↑ 2.1% this month</p> -->
    </div>
{/snippet}

{#snippet APYMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <!-- <div -->
        <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <div class="text-purple-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">APY</p>
        <p class="text-3xl font-bold mt-1">{metrics.apy}</p>
        <!-- <p class="text-green-500 mt-2">↑ 2.1% this month</p> -->
    </div>
{/snippet}

{#snippet SupportedChainsMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <!-- <div -->
        <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <div class="text-purple-800 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 120 120"
            >
                <!-- Circular background -->
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="#7037ae"
                    stroke="#e2e8f0"
                    stroke-width="1"
                />

                <!-- Connected nodes representing decentralization -->
                <circle cx="60" cy="35" r="4" fill="#00d4ff" />
                <circle cx="45" cy="50" r="4" fill="#00d4ff" />
                <circle cx="75" cy="50" r="4" fill="#00d4ff" />
                <circle cx="40" cy="70" r="4" fill="#00d4ff" />
                <circle cx="60" cy="75" r="4" fill="#00d4ff" />
                <circle cx="80" cy="70" r="4" fill="#00d4ff" />

                <!-- Connection lines forming network -->
                <line
                    x1="60"
                    y1="35"
                    x2="45"
                    y2="50"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="60"
                    y1="35"
                    x2="75"
                    y2="50"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="45"
                    y1="50"
                    x2="40"
                    y2="70"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="75"
                    y1="50"
                    x2="80"
                    y2="70"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="45"
                    y1="50"
                    x2="60"
                    y2="75"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="75"
                    y1="50"
                    x2="60"
                    y2="75"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="40"
                    y1="70"
                    x2="60"
                    y2="75"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
                <line
                    x1="80"
                    y1="70"
                    x2="60"
                    y2="75"
                    stroke="#00d4ff"
                    stroke-width="1.5"
                    opacity="0.7"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">Chains Supported</p>
        <p class="text-3xl font-bold mt-1">{metrics.supportedChains}</p>
        <!-- <p class="text-green-500 mt-2">↑ 2.1% this month</p> -->
    </div>
{/snippet}

{#snippet VolumeMetric()}
    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div class="text-yellow-500 mb-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </div>
        <p class="text-gray-400 font-medium">24h Volume</p>
        <p class="text-3xl font-bold mt-1">
            <span id="transactionVolume">{metrics.transactionVolume}</span>
        </p>
        <!-- <p class="text-green-500 mt-2">↑ 32.7% this month</p> -->
    </div>
{/snippet}
