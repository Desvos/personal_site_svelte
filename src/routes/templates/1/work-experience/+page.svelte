<script>
    import MarkdownFileViewer from '$lib/components/MarkdownFileViewer.svelte';

    let filePath = "/markdown/work-experience.md"
</script>

<MarkdownFileViewer bind:markdownFilePath={filePath} />