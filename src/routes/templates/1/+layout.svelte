<script>
    import pagesList from "$lib/pagesList";
    import socials from "$lib/socials";
    import { fly } from 'svelte/transition'

    export let data

    const TEMPLATE_ROOT = "/templates/1"
</script>

<div class="bg-t1">
    <div class="d-flex justify-content-center bgr-t1 main-conteiner">
        <div class="col-12 col-lg-9 sub-container">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <div class="logo-t1">
                        <h4>Antonio De Vivo</h4>
                    </div>
                    <!-- Collapsible wrapper -->

                    <!-- Right elements -->
                    <div class="app-bar-links-expanded">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {#each pagesList as page}
                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        href={TEMPLATE_ROOT + "/" + page.href}
                                        >{page.name}</a
                                    >
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="app-bar-links-bread">
                        <div class="dropdown">
                            <button
                                type="button"
                                data-mdb-toggle="dropdown"
                                class="dropdown-toggle"
                            >
                                <i class="fa-solid fa-bars"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                {#each pagesList as page}
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href={TEMPLATE_ROOT + "/" + page.href}
                                            >{page.name}</a
                                        >
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar -->

            {#key data.url}
                <div class="content-container" in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 300, duration: 300 }}>
                    <slot />
                </div>
            {/key}

            <div class="footer-t1">
                {#each socials as social}
                    <a href={social.link} target="_blank">
                        <button
                            type="button"
                            class="btn btn-outline-secondary btn-floating"
                            data-mdb-ripple-color="dark"
                            text-white
                        >
                            <i class={social.icon} />
                        </button>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    @import "/template-1.css";
</style>
