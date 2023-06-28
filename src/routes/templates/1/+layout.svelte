<script>
    import pagesList from "$lib/pagesList";
    import socials from "$lib/socials";
</script>

<span class="bg" />
<div class="d-flex justify-center main-container">
    <div class="sub-container">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg">
            <!-- Container wrapper -->
            <div class="container-fluid">
                <div>
                    <a class="text-reset me-3" href="#">
                        <i class="fas fa-shopping-cart" />
                    </a>
                </div>
                <!-- Collapsible wrapper -->

                <!-- Right elements -->
                <div class="app-bar-links-expanded">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {#each pagesList as page}
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href={"/templates/1" + page.link}
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
                            <i class="fas fa-bars" />
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            {#each pagesList as page}
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href={"/templates/1" + page.link}
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

        <div class="content-container">
            <slot />
        </div>

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

<style>
    @import "/template-1.css";
</style>
