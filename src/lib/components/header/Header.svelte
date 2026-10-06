<script>
    import { RiArrowRightUpLongLine } from "svelte-remixicon";
</script>

<header
    class="col-span-full grid grid-cols-subgrid items-center py-gutter isolate z-10 text-lg"
>
    <a
        href="/"
        class="col-span-full lg:col-span-6 w-fit"
        aria-label="Return home link containing wordmark jdn.world logo"
    >
        <span class="font-medium tracking-tight">jdn.world</span>
    </a>

    <nav
        class="hidden lg:grid lg:col-span-6 lg:col-start-7 lg:grid-cols-subgrid"
    >
        <ul
            class="col-span-full grid grid-cols-subgrid font-medium tracking-[-0.02em]"
        >
            <li class="col-span-2"><a href="/projects">Projects</a></li>
            <li class="col-span-2"><a href="/about">About</a></li>
            <li class="col-span-2">
                <a
                    href="https://github.com/devjdn"
                    class="inline-flex group items-center gap-0.5"
                    target="_blank"
                >
                    <span>GitHub</span>
                    <RiArrowRightUpLongLine
                        class="group-hover:rotate-45 transition-transform duration-300"
                    />
                </a>
            </li>
        </ul>
    </nav>
</header>
