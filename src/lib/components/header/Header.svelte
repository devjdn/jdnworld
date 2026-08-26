<script>
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
</script>

<header
    class="sticky inset-0"
    style="background-color: oklch(from var(--background) l c h / 0.01);"
>
    <div
        id="header-blur-backdrop"
        class="pointer-events-none absolute grid h-16 inset-0"
        aria-hidden="true"
    >
        <span
            class="blur-span"
            style="backdrop-filter: blur(1px);  -webkit-backdrop-filter: blur(1px);  mask: linear-gradient(0deg, transparent, var(--background) 8%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(1px);  -webkit-backdrop-filter: blur(1px);  mask: linear-gradient(0deg, transparent, var(--background) 8%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(4px);  mask: linear-gradient(0deg, transparent 8%, var(--background) 16%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(8px);  mask: linear-gradient(0deg, transparent 16%, var(--background) 24%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(16px);  mask: linear-gradient(0deg, transparent 24%, var(--background) 36%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(24px); mask: linear-gradient(0deg, transparent 36%, var(--background) 48%);"
        ></span>
        <span
            class="blur-span"
            style="backdrop-filter: blur(32px); mask: linear-gradient(0deg, transparent 48%, var(--background) 60%);"
        ></span>
    </div>

    <div
        class="h-12 not-lg:px-6 isolate z-10 max-w-5xl mx-auto w-full flex items-center justify-between gap-8"
    >
        <a href="/" class="font-medium tracking-tight">
            <span class="">jdn.world</span>
        </a>

        <nav class="not-md:hidden">
            <ul
                class="flex items-center gap-4 text-sm *:transition-colors *:duration-250 text-muted-foreground *:hover:text-foreground"
            >
                <li><a href="/about">About</a></li>
                <!-- <li><a href="/projects">Projects</a></li>
                <li><a href="/music">Music</a></li> -->
                <li>
                    <a
                        href="https://github.com/devjdn"
                        target="_blank"
                        class="inline-flex gap-1 items-center"
                    >
                        GitHub
                        <ArrowUpRight class="size-4" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
    .blur-span {
        grid-area: 1 / 1;
        transform: translateZ(0);
        backface-visibility: hidden;
    }
</style>
