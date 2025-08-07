<script lang="ts">
</script>

{@render ProductsSnippet()}
{#snippet ProductsSnippet()}
    <!-- Products Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-12">
            <!-- <div -->
            <!--     class="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000" -->
            <!-- > -->
            <h2 class="text-3xl font-extrabold sm:text-4xl">Our Products</h2>
            <p class="mt-4 text-xl text-gray-400">
                Complete DeFi ecosystem for all your needs
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- <div -->
            <!--     class="relative group animate-on-scroll opacity-0 transition-all duration-1000" -->
            <!-- > -->
            <div class="relative group">
                <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"
                ></div>
                <div
                    class="relative bg-gray-800 rounded-lg p-6 h-full flex flex-col"
                >
                    <div
                        class="h-14 w-14 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8 text-blue-500"
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
                    <h3 class="text-xl font-bold mb-2">Liquidity Pools</h3>
                    <p class="text-gray-400 mb-4 flex-grow">
                        Provide liquidity to our optimized pools and earn
                        transaction fees plus additional yield from our
                        incentive programs.
                    </p>
                    <p class="text-green-500 font-bold">Up to 28% APY</p>
                    <a
                        href="#"
                        class="mt-4 inline-flex items-center text-blue-500 hover:text-blue-400"
                    >
                        Learn more
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
{/snippet}
