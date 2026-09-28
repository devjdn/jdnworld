<script lang="ts">
    import { reveal, staggerChildren } from "$lib/actions/motion";
</script>

<main class="pt-24 pb-36 md:pb-48 space-y-24">
    <section class="px-6 lg:px-12" use:reveal>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-condensed">
            Projects
        </h1>
    </section>

    <section
        class="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        use:reveal
        use:staggerChildren={{ gap: 0.1 }}
    >
        <a href="/projects/stargazer" class="group">
            <article class="flex flex-col gap-3 pb-3">
                <div class="overflow-hidden">
                    <img
                        src="/images/stargazer-hero-preview.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>

                <div class="flex flex-col">
                    <p class="">Stargazer</p>

                    <p class="text-foreground-muted">2026</p>
                </div>
            </article>
        </a>

        <a href="/projects/toolbase">
            <article class="flex flex-col gap-3">
                <div class="overflow-hidden">
                    <img
                        src="/images/toolbase-hero-preview.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>

                <div class="flex flex-col">
                    <p class="">ToolBase</p>

                    <p class="text-foreground-muted">2026</p>
                </div>
            </article>
        </a>

        <article class="flex flex-col gap-3">
            <div class="overflow-hidden aspect-4/3 bg-surface"></div>

            <div class="flex flex-col">
                <p class="">Pass the Aux</p>

                <p class="text-foreground-muted">Coming soon</p>
            </div>
        </article>
    </section>
</main>
