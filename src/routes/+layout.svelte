<script>
    import { page } from "$app/stores";
    import templatesList from "$lib/templatesList";

    let now = new Date();
    let year = now.getFullYear();
</script>

<slot />

{#if !$page.error}
<footer class="footer bg-dark text-center text-white">

    <div class="container p-2">
        {#each templatesList as template}
            <a href={template.href}>
                <button
                    type="button"
                    class="btn btn-outline-light btn-rounded btn-sm"
                    text-white
                >
                    {template.name}
                </button>
            </a>
        {/each}
    </div>

    <div
        class="copyright-container text-center"
    >
        &copy; Copyright Antonio De Vivo {year} - Builded with
        <b><a class="text-white" href="https://svelte.dev/" target="_blank">Svelte</a></b> -
        <b><a class="text-white" href="https://kit.svelte.dev/" target="_blank">Svelte Kit</a></b> -
        <b><a class="text-white" href="https://getbootstrap.com/" target="_blank">Bootstrap</a></b> -
        <b><a class="text-white" href="https://mdbootstrap.com/" target="_blank">MDB</a></b>
    </div>
</footer>

{/if}

<style>

footer.footer{
    position: fixed;
    bottom: 0; 
    width: 100%;
}

footer .copyright-container {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
