<script lang="ts">
    import { RiArrowRightUpLongLine } from "svelte-remixicon";
    import { reveal } from "$lib/actions/motion";

    let { title, year, url }: { title: string; year: string; url: string } =
        $props();
</script>

<section
    class="col-span-full grid grid-cols-subgrid items-start gap-y-gutter"
    use:reveal
>
    <div class="col-span-full md:col-span-6 space-y-1.5 md:space-y-3">
        <p class="font-medium">Project</p>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl">
            {title}
        </h1>
    </div>

    <div
        class="col-span-full md:col-span-6 md:col-start-7 grid grid-cols-subgrid gap-y-gutter"
    >
        <div class="col-span-full md:col-span-3 space-y-1.5 md:space-y-3">
            <p class="font-medium">Year</p>
            <span
                class="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.04em]"
            >
                {year}
            </span>
        </div>

        <div
            class="col-span-full md:col-span-3 space-y-1.5 md:space-y-3 md:place-self-end"
        >
            <p class="font-medium">Website</p>
            <a
                href={url}
                target="_blank"
                class="inline-flex items-center group"
            >
                <span
                    class="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.04em]"
                >
                    Visit
                </span>
                <RiArrowRightUpLongLine
                    class="text-5xl lg:text-6xl xl:text-7xl group-hover:rotate-45 transition-transform duration-300"
                    stroke-width="8"
                />
            </a>
        </div>
    </div>
</section>
