<script>
    import { MaterialApp, Footer, Button,  } from 'svelte-materialify';
    import { page } from '$app/stores';

    let now = new Date();
    let year = now.getFullYear();

    let links = [
        { 
            "name": "Template 1",
            "href": "/template-1/"
        },
    ]
</script>

<MaterialApp>
    <slot />

    {#if !$page.error}
        <Footer padless class="grey darken-2 theme--dark justify-center" style="position: fixed; bottom: 0; width: 100%;">
            <div>
                {#each links as link}
                    <Button rounded text size="xs"><a href="{link.href}" class="template_link">{link.name}</a></Button>
                {/each}
            </div>
            <div class="grey pa-1 text-center" style="width:100%">
                &copy; Copyright Antonio De Vivo {year} -
                Builded with 
                <b>Svelte</b> - 
                <b>Svelte Kit</b> - 
                <b>Svelte Materialify</b>
            </div>
        </Footer>
    {/if}
</MaterialApp>

<style>
.template_link { text-decoration: none; }
</style>