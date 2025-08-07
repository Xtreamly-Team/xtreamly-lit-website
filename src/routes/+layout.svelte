<script lang="ts">
    import "../app.css";

    import Footer from "$lib/components/Footer.svelte";

    let { children } = $props();
</script>

<nav class="navbar bg-base-200 shadow-sm z-100 px-4 sm:px-6 lg:px-8">
    <div class="flex-1 py-2">
        <a class="flex-shrink-0" href="/">
            <span class="text-blue-500 font-bold text-xl">Xtreamly Lit</span>
        </a>
        <p class="mt-0 text-sm text-gray-400">Automated AI trading</p>
        <!-- <a class="btn btn-ghost text-xl" href="/">DeFi Socket</a> -->
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1"></ul>
    </div>
</nav>
<!-- <div -->
<!--     class="flex flex-col px-4 h-8 bg-base-300 text-xs text-center items-center justify-center" -->
<!-- > -->
<!--     <span class="py-auto text-neutral-300" -->
<!--         >In Beta: don't put more than $100 for testing</span -->
<!--     > -->
<!-- </div> -->
<div class="h-full flex flex-col p-4 sm:p-6 lg:p-8">
    {@render children()}
</div>
<Footer />
