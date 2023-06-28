<script>
    import { ProgressCircular } from 'svelte-materialify';
    import { browser } from "$app/environment";

    if (browser) {
        // to prevent error window is not defined, because it's SSR
        window.location.href = "/templates/1/";
    }
</script>

<div class="d-flex justify-center align-center" style="margin-top: 200px;">
    <ProgressCircular size={70} width={7} indeterminate color="indigo" />
</div>
