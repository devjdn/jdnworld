<script lang="ts">
    import { RiArrowRightUpLongLine } from "svelte-remixicon";

    let { title, year, url }: { title: string; year: string; url: string } =
        $props();
</script>

<section
    class="px-6 lg:px-12 flex flex-col md:grid md:grid-cols-2 items-start gap-6"
>
    <div class="space-y-1.5 md:space-y-3">
        <p class="font-medium">Project</p>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl uppercase font-condensed">
            {title}
        </h1>
    </div>

    <div class="flex flex-col w-full md:grid md:grid-cols-2 gap-6">
        <div class="space-y-1.5 md:space-y-3">
            <p class="font-medium">Year</p>
            <span
                class="text-5xl lg:text-6xl xl:text-7xl font-condensed tracking-tighter uppercase"
            >
                {year}
            </span>
        </div>

        <div class="space-y-1.5 md:space-y-3 md:place-self-end">
            <p class="font-medium">Website</p>
            <a
                href={url}
                target="_blank"
                class="inline-flex items-center group"
            >
                <span
                    class="text-5xl lg:text-6xl xl:text-7xl font-condensed tracking-tight uppercase"
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
