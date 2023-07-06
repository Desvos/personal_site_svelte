<script>
    import { page } from "$app/stores";
    import { fly } from 'svelte/transition';
    import templatesList from "$lib/templatesList";
    import { toast } from "$lib/stores/toast";

    let now = new Date();
    let year = now.getFullYear();

    let thisToast;
    toast.subscribe((value) => {
		thisToast = value;
	});
</script>

{#if thisToast.show }
    <div class="p-toast {thisToast.type}" in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 300, duration: 300 }}>
        <div class="p-toast-container">
            <div class="p-toast-title">
                {thisToast.title}
            </div>
            <div class="p-toast-message">
                {thisToast.message}
            </div>
        </div>
    </div>
{/if}

<slot />

{#if !$page.error}
<div class="footer">
    <div class="show-button"><i class="fa-solid fa-chevron-up fa-2xl"></i></div>
    <div class="footer_center">
        <div class="container p-2">
            {#each templatesList as template}
                <a href={"/templates"+template.href}>
                    <button
                        type="button"
                        class="btn btn-outline-light btn-rounded btn-sm"
                        text-white
                    >
                        {template.name}
                    </button>
                </a>
                &nbsp;
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
        <br>
    </div>
  </div>
{/if}

<style>
    @import "/main.css";
</style>
