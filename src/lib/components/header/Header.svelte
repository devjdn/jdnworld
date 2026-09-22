<script>
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
    import { page } from "$app/state";
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
        class="h-14 px-6 lg:px-12 isolate z-10 w-full flex items-center justify-between lg:grid lg:grid-cols-2 gap-3 text-lg"
    >
        <a href="/" class="font-medium tracking-tight">
            <span class="">jdn.world</span>
        </a>
        <nav class="hidden lg:block">
            <ul class="font-medium tracking-tight grid grid-cols-3">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li>
                    <a href="https://github.com/devjdn" target="_blank">
                        GitHub
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
