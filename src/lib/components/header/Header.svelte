<header class="sticky inset-0">
    <div
        id="header-blur-backdrop"
        class="pointer-events-none absolute grid inset-0"
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

        <nav class="hidden">
            <ul
                class="flex items-center gap-4 font-book text-sm *:transition-colors *:duration-250 text-muted-foreground *:hover:text-foreground"
            >
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Music</a></li>
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
