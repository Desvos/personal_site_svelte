<script>
  import { browser } from "$app/environment";
  import {sleep} from "$lib/js-modules";

  let condition = false;

  async function showText() {
    condition = true;
    await sleep(3000);
    condition = false;
  }

  if(browser){}
  /* import { onMount } from 'svelte';

  onMount(async() => {
    //const mdb = import('$lib/assets/mdb-ui-kit/6.4.0/js/mdb.min.js')
  }) */
</script>

<div class="text-center">
    <h1>Coming soon...</h1>
    <a href="/">Back to home</a>
</div>

<button class="btn btn-primary" on:click={showText}>Trigger</button>

{#if condition}
  <div>
    Testo
  </div>
{/if}