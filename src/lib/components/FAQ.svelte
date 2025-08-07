<script lang="ts">
</script>

{@render FAQSnippet()}

{#snippet FAQSnippet()}
    <!-- FAQ Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-12">
            <!-- <div -->
            <!--     class="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000" -->
            <!-- > -->
            <h2 class="text-3xl font-extrabold sm:text-4xl">
                Frequently Asked Questions
            </h2>
            <p class="mt-4 text-xl text-gray-400">
                Everything you need to know about DeFiSocket
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- <div -->
            <!--     class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll opacity-0 transition-all duration-1000" -->
            <!-- > -->
            <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 class="text-xl font-bold mb-3">
                    Do I need to know coding?
                </h3>
                <p class="text-gray-300">
                    To create streams you don't, since it's done using our web
                    dashboard. <br /><br /> For consumption, you need to have basic
                    understanding of how to connect to a Websocket url. There are
                    guides in dashboard while at the same time you can use ChatGPT
                    to build one easily.
                </p>
            </div>

            <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 class="text-xl font-bold mb-3">What are streams?</h3>
                <p class="text-gray-300">
                    Streams are the groups of events you want to listen to from
                    our collection of events. It's like your order from our
                    menu. <br /> <br />You can create multiple streams using the
                    dashboard. Each stream would be associated with a Websocket
                    url you can consume using any Websocket client in your app.
                </p>
            </div>

            <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 class="text-xl font-bold mb-3">How about pricing?</h3>
                <p class="text-gray-300">
                    For now (in Beta) it's completely free. <br /> <br />After
                    launch, there will be a free tier for testing and light use
                    cases. At the same time plans will be announced for normal
                    use (e.g. Developer) and Enterprise.
                </p>
            </div>

            <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 class="text-xl font-bold mb-3">
                    Which blockchains do you support?
                </h3>
                <p class="text-gray-300">
                    We currently support Ethereum L1 and most used L2s including
                    Base, Arbitrum, Optimism, Polygon, Linea and more. <br />
                    <br /> We're constantly adding new L2 chains and in near future
                    we're planning to add EVM compatible ones such as Tron as well
                    as Solana
                </p>
            </div>
        </div>

        <!-- <div -->
        <!--     class="text-center mt-10 animate-on-scroll opacity-0 transition-all duration-1000" -->
        <!-- > -->
        <!-- <div class="text-center mt-10"> -->
        <!--     <a -->
        <!--         href="#" -->
        <!--         class="inline-flex items-center text-blue-500 hover:text-blue-400" -->
        <!--     > -->
        <!--         View all FAQs -->
        <!--         <svg -->
        <!--             xmlns="http://www.w3.org/2000/svg" -->
        <!--             class="h-5 w-5 ml-1" -->
        <!--             viewBox="0 0 20 20" -->
        <!--             fill="currentColor" -->
        <!--         > -->
        <!--             <path -->
        <!--                 fill-rule="evenodd" -->
        <!--                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" -->
        <!--                 clip-rule="evenodd" -->
        <!--             /> -->
        <!--         </svg> -->
        <!--     </a> -->
        <!-- </div> -->
    </div>
{/snippet}
