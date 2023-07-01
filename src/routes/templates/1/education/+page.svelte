<script>
    import MarkdownFileViewer from '$lib/components/MarkdownFileViewer.svelte';

    let filePath = "/markdown/education.md"
</script>

<MarkdownFileViewer bind:markdownFilePath={filePath} />