<script>
    import { AppBar, Button, Icon } from "svelte-materialify";
    import { mdiMenu } from "@mdi/js";
    import Grid from "svelte-grid-responsive";
</script>

<span class="bg" />
<div class="d-flex justify-center main-container">
    <div class="sub-container">
        <AppBar flat>
            <span slot="title">Title</span>
            <div style="flex-grow:1" />
            <Button text rounded><span style="text-decoration: none !important;">Work Experience</span></Button>


            <Button fab depressed>
                <Icon path={mdiMenu} />
            </Button>
        </AppBar>

        <slot />
        <Grid container gutter={12}>
            <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
            <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
            <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
            <Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
        </Grid>
    </div>
</div>

<style>
    @import "/template-1.css";
</style>
