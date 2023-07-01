<script>
    import MarkdownFileViewer from '$lib/components/MarkdownFileViewer.svelte';

    let filePath = "/markdown/portfolio.md"
</script>

<MarkdownFileViewer bind:markdownFilePath={filePath} />