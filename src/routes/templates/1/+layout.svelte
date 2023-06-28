<script>
    import { AppBar, Button, Icon, Menu, ListItem } from "svelte-materialify";
    import { mdiMenu } from "@mdi/js";
    import pagesList from "$lib/pagesList";
    import socials from "$lib/socials";

</script>

<span class="bg" />
<div class="d-flex justify-center main-container">
    <div class="sub-container">
        <AppBar flat>
            <span slot="title">Title</span>
            <div style="flex-grow:1" />

            <div class="app-bar-links-expanded">
                {#each pagesList as page}
                    <Button text rounded>
                        <a style="text-decoration: none;" href={"/templates/1"+page.link}>{page.name}</a>
                    </Button>
                {/each}
            </div>

            <div class="app-bar-links-bread">
                <Menu right>
                    <div slot="activator">
                        <Button fab depressed>
                            <Icon path={mdiMenu} />
                        </Button>
                    </div>
                    {#each pagesList as page}
                        <ListItem>
                            <a style="text-decoration: none;" href={"/templates/1"+page.link}>{page.name}</a>
                        </ListItem>
                    {/each}
                </Menu>
            </div>
        </AppBar>

        <div class="content-container">
            <slot />
        </div>
        
        <div class="footer">
            {#each socials as social}
                <Button fab depressed>
                    <a href={social.link} target="_blank"><Icon class="mdi mdi-home" /></a>
                </Button>
            {/each}
        </div>
    </div>
</div>

<style>
    @import "/template-1.css";
</style>
