<script>
    import { browser } from "$app/environment";

    if (browser) {
        // to prevent error window is not defined, because it's SSR
        window.location.href = "/templates/1/";
    }
</script>

<div class="d-flex justify-center align-center" style="margin-top: 200px;">
    <div class="spinner-grow text-primary" style="width: 5rem; height: 5rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
</div>
