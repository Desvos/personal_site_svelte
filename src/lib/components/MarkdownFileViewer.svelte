<script>
    import showdown from "showdown"
    import { onMount } from 'svelte';
    import loadMarkdownFile from "$lib/mdFileLoader";
	
    export let markdownFilePath = '';

    let result = '';

	let markdownConverter = new showdown.Converter()
    
    onMount(async () => {
        loadMarkdownFile(markdownFilePath).then(text => {
            result = markdownConverter.makeHtml(text);
        });
    });
	
    
</script>

<div class="markdown-container">
    {@html result}
</div>