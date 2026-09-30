<script lang="ts">
    import { reveal, staggerChildren } from "$lib/actions/motion";

    const sizes =
        "(min-width: 1024px) calc((100vw - 144px) / 3), (min-width: 768px) calc((100vw - 72px) / 2), calc(100vw - 48px)";
</script>

<main class="pt-24 pb-36 md:pb-48 space-y-24">
    <section class="px-6 lg:px-12" use:reveal>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl">
            Projects <sup>2</sup>
        </h1>
    </section>

    <section
        class="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        use:reveal
        use:staggerChildren={{ gap: 0.1 }}
    >
        <a href="/projects/stargazer">
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

        <a href="/projects/toolbase">
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

        <article class="flex flex-col gap-3">
            <div class="overflow-hidden aspect-4/3 bg-surface"></div>

            <div class="flex flex-col">
                <p>Pass the Aux</p>

                <p class="text-foreground-muted">Coming soon</p>
            </div>
        </article>
    </section>
</main>
