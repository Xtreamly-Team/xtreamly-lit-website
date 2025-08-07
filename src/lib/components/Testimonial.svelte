<script lang="ts">
    let testimonials = [
        {
            quote: "This DeFi platform has revolutionized how I manage my digital assets. The yields are consistently higher than any competitor.",
            author: "Alex Chen, Crypto Investor",
        },
        {
            quote: "The security and transparency of this protocol gave me the confidence to finally enter DeFi. Best decision I've made this year.",
            author: "Sarah Johnson, New to DeFi",
        },
        {
            quote: "As an institutional investor, we value the reliability and robustness of this platform. It's set a new standard in the industry.",
            author: "Michael Rodriguez, Fund Manager",
        },
    ];
</script>

{@render TestimonialSnippet()}
{#snippet TestimonialSnippet()}
    <!-- Testimonials Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-12">
            <!-- <div -->
            <!--     class="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000" -->
            <!-- > -->
            <h2 class="text-3xl font-extrabold sm:text-4xl">
                What Our Users Say
            </h2>
            <p class="mt-4 text-xl text-gray-400">
                Join thousands of satisfied users already benefiting from our
                platform
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each testimonials as testimonial, i}
                <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <!-- <div -->
                    <!--     class="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll opacity-0 transition-all duration-1000" -->
                    <!-- > -->
                    <div class="flex mb-4">
                        {#each Array(5) as _, j}
                            <svg
                                class="h-5 w-5 text-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        {/each}
                    </div>
                    <p class="text-gray-300 italic mb-4">
                        "{testimonial.quote}"
                    </p>
                    <p class="text-gray-400 font-medium">
                        {testimonial.author}
                    </p>
                </div>
            {/each}
        </div>
    </div>
{/snippet}
