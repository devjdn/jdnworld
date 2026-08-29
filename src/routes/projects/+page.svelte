<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
</script>

<main class="pt-24 pb-48 space-y-24">
    <section class="px-6 lg:px-0 max-w-5xl flex-1 mx-auto w-full">
        <h1 class="text-2xl sm:text-3xl font-medium">Projects</h1>
    </section>

    <section
        class="px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 max-w-5xl flex-1 mx-auto w-full space-y-6"
    >
        <article class="flex flex-col gap-3">
            <div class="overflow-hidden rounded-xl">
                <img
                    src="/images/stargazer-preview.webp"
                    alt="Stargazer project preview"
                    class="aspect-4/3 object-cover"
                />
            </div>
            <div class="flex justify-between gap-3">
                <h2 class="font-medium md:text-lg">
                    <span class="text-foreground-muted">01</span>
                    Stargazer
                </h2>

                <Button variant="secondary" href="/projects/stargazer">
                    View Project
                </Button>
            </div>
        </article>

        <article class="flex flex-col gap-3">
            <div class="overflow-hidden rounded-xl">
                <img
                    src="/images/toolbase-preview.webp"
                    alt="ToolBase project preview"
                    class="aspect-4/3 object-cover"
                />
            </div>
            <div class="flex justify-between gap-3 items-center">
                <h2 class="font-medium md:text-lg">
                    <span class="text-foreground-muted">02</span>
                    ToolBase
                </h2>

                <Button variant="secondary" href="/projects/toolbase">
                    View Project
                </Button>
            </div>
        </article>
        <article class="flex flex-col gap-3">
            <div class="overflow-hidden aspect-4/3 bg-surface rounded-xl"></div>
            <div class="flex justify-between gap-3 items-center">
                <h2 class="font-medium md:text-lg">
                    <span class="text-foreground-muted">03</span>
                    JamesMap
                </h2>

                <Button variant="secondary" disabled>Coming Soon</Button>
            </div>
        </article>
    </section>
</main>
