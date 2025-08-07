<script lang="ts">
    import GenerateWallet from "../../routes/GenerateWallet.svelte";
</script>

{@render HeroSnippet()}

{#snippet PortfolioHeroRightWidget()}
    <div
        class="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl"
    >
        <div class="flex justify-between items-center mb-6">
            <div>
                <h3 class="text-xl font-bold">Your Portfolio</h3>
                <p class="text-gray-400">Connected: 0x8f...3e9d</p>
            </div>
            <div class="text-right">
                <p class="text-green-400 font-bold text-2xl">+16.4%</p>
                <p class="text-gray-400 text-sm">24h Change</p>
            </div>
        </div>
        <div class="space-y-4">
            <div
                class="p-4 bg-gray-900 rounded-xl flex justify-between items-center"
            >
                <div class="flex items-center">
                    <div
                        class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3"
                    >
                        <span class="font-bold">LP</span>
                    </div>
                    <div>
                        <p class="font-medium">Deposit</p>
                        <p class="text-sm text-gray-400">2025-08-05 17:44</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold">$100</p>
                    <!-- <p class="text-green-500">APY: 24.6%</p> -->
                </div>
            </div>
            <div
                class="p-4 bg-gray-900 rounded-xl flex justify-between items-center"
            >
                <div class="flex items-center">
                    <div
                        class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3"
                    >
                        <span class="font-bold">ST</span>
                    </div>
                    <div>
                        <p class="font-medium">Weekly Gain</p>
                        <p class="text-sm text-gray-400">2025-08-04 17:44</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold">$23</p>
                    <p class="text-green-500">APY: 18.2%</p>
                </div>
            </div>
        </div>
        <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-6 transition-colors duration-300"
        >
            Deposit More
        </button>
    </div>
{/snippet}

{#snippet HeroSnippet()}
    <div class="pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                    <h1
                        class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                    >
                        <span class="block">Trade Crypto</span>
                        <span class="block text-blue-500">Effortlessly</span>
                    </h1>
                    <div class="flex flex-col mt-6 gap-2">
                        <p class="text-xl text-gray-300 max-w-lg">
                            Automatic crypto trading, powered by Xtreamly AI
                            engine.
                        </p>
                        <p class="text-xl text-gray-300 max-w-lg">
                            Your Keys, Our Execution
                        </p>
                    </div>
                    <div class="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://app.defisocket.com"
                            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Create Wallet
                        </a>
                        <a
                            href="#"
                            class="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:bg-opacity-10 rounded-lg font-medium transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="">
                    <!-- <GenerateWallet /> -->
                    {@render PortfolioHeroRightWidget()}
                </div>
                <!-- <HeroEvent /> -->
            </div>
        </div>
    </div>
{/snippet}
