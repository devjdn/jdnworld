<script lang="ts">
    import { Button } from "$lib/components/ui/button";
</script>

<main class="pt-24 pb-48 space-y-24">
    <section class="px-6 lg:px-0 max-w-5xl flex-1 mx-auto w-full">
        <h1 class="font-medium text-3xl">Projects</h1>
    </section>

    <section
        class="px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 max-w-5xl flex-1 mx-auto w-full"
    >
        <a href="/projects/stargazer" class="group">
            <article class="flex flex-col gap-3 bg-surface rounded-xl pb-3">
                <div class="overflow-hidden rounded-xl">
                    <img
                        src="/images/stargazer-preview.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="flex justify-between items-center gap-3 px-3">
                    <h2 class="md:text-lg font-medium">
                        <span class="text-foreground-muted">01</span>
                        Stargazer
                    </h2>

                    <p class="text-sm text-foreground-muted">2026</p>
                </div>
            </article>
        </a>

        <a href="/projects/toolbase">
            <article class="flex flex-col gap-3 bg-surface rounded-xl pb-3">
                <div class="overflow-hidden rounded-xl">
                    <img
                        src="/images/toolbase-preview.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="flex justify-between gap-3 items-center px-3">
                    <h2 class="md:text-lg font-medium">
                        <span class="text-foreground-muted">02</span>
                        ToolBase
                    </h2>

                    <p class="text-sm text-foreground-muted">2026</p>
                </div>
            </article>
        </a>

        <article class="flex flex-col gap-3 bg-surface rounded-xl pb-3">
            <div
                class="overflow-hidden aspect-4/3 bg-surface-raised rounded-xl"
            ></div>
            <div class="flex justify-between gap-3 items-center px-3">
                <h2 class="md:text-lg font-medium">
                    <span class="text-foreground-muted">03</span>
                    JamesMap
                </h2>

                <p class="text-sm text-foreground-subtle">Coming Soon</p>
            </div>
        </article>
    </section>
</main>
