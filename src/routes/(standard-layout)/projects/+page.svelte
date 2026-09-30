<script lang="ts">
    import { reveal, staggerChildren } from "$lib/actions/motion";

    const sizes =
        "(min-width: 1024px) calc((100vw - 144px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc(100vw - 48px)";
</script>

<section class="col-span-full" use:reveal>
    <h1 class="text-5xl lg:text-6xl xl:text-7xl">
        Projects <sup>2</sup>
    </h1>
</section>

<section
    class="col-span-full grid grid-cols-subgrid gap-y-gutter"
    use:reveal
    use:staggerChildren={{ gap: 0.1 }}
>
    <a
        href="/projects/stargazer"
        class="col-span-full md:col-span-6 lg:col-span-4"
    >
        <article class="flex flex-col gap-3">
            <div class="overflow-hidden aspect-4/3 bg-surface">
                <enhanced:img
                    src="$lib/assets/stargazer-hero-preview.webp"
                    {sizes}
                    alt="Stargazer project preview"
                    loading="eager"
                    fetchpriority="high"
                    class="aspect-4/3 w-full object-cover"
                />
            </div>

            <div class="flex flex-col">
                <p>Stargazer</p>

                <p class="text-foreground-muted">2026</p>
            </div>
        </article>
    </a>

    <a
        href="/projects/toolbase"
        class="col-span-full md:col-span-6 lg:col-span-4"
    >
        <article class="flex flex-col gap-3">
            <div class="overflow-hidden bg-surface aspect-4/3">
                <enhanced:img
                    src="$lib/assets/toolbase-hero-preview.webp"
                    {sizes}
                    alt="ToolBase project preview"
                    loading="lazy"
                    decoding="async"
                    class="aspect-4/3 w-full object-cover"
                />
            </div>

            <div class="flex flex-col">
                <p>ToolBase</p>

                <p class="text-foreground-muted">2026</p>
            </div>
        </article>
    </a>

    <article
        class="col-span-full md:col-span-6 lg:col-span-4 flex flex-col gap-3"
    >
        <div class="overflow-hidden aspect-4/3 bg-surface"></div>

        <div class="flex flex-col">
            <p>Pass the Aux</p>

            <p class="text-foreground-muted">Coming soon</p>
        </div>
    </article>
</section>
