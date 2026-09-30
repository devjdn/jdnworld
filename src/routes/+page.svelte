<script lang="ts">
    import Icon from "@iconify/svelte";
    import { categories } from "$lib/constants";
</script>

<main class="pt-24 pb-36 md:pb-48 space-y-36">
    <section
        class="px-6 lg:px-12 grid md:grid-cols-12 grid-rows-2 gap-x-6 gap-y-12"
    >
        <h1
            class="text-5xl sm:text-[96px] lg:text-[124px] tracking-tighter font-medium md:col-span-full"
        >
            Hello browser,
        </h1>
        <p
            class="text-2xl lg:text-3xl tracking-[-0.04em] supports-text-pretty:text-pretty text-balance leading-[1.2] max-w-xl md:col-start-7 row-start-2 md:col-span-7 self-baseline-last"
        >
            Welcome to my corner of the web! I'm a jdn, frontend web developer
            from the UK with a love for effective, minimalist design.
        </p>
    </section>

    <section class="px-6 lg:px-12 space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <p
                class="text-2xl lg:text-3xl font-medium tracking-[-0.04em] text-foreground-muted"
            >
                01
            </p>
            <h2 class="md:col-start-2">Selected Work</h2>
        </div>

        <div class="flex flex-col md:grid md:grid-cols-2 gap-6">
            <article class="flex flex-col gap-3 pb-3">
                <div class="overflow-hidden">
                    <img
                        src="/images/stargazer-hero-preview.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>

                <div class="flex flex-col">
                    <p class="not-md:text-sm">Stargazer</p>

                    <p class="text-foreground-muted not-md:text-sm">
                        Browse the vast collection of NASA imagery and data.
                    </p>
                </div>
            </article>

            <article class="flex flex-col gap-3">
                <div class="overflow-hidden">
                    <img
                        src="/images/toolbase-hero-preview.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>

                <div class="flex flex-col">
                    <p class="not-md:text-sm">ToolBase</p>

                    <p class="text-foreground-muted not-md:text-sm">
                        Manage technologies within your developer workflow.
                    </p>
                </div>
            </article>
        </div>
    </section>

    <section class="space-y-12 px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <p
                class="text-2xl lg:text-3xl font-medium tracking-[-0.04em] text-foreground-muted"
            >
                02
            </p>
            <h2 class="md:col-start-2">Skills</h2>
        </div>
        <div class="grid grid-flow-row gap-x-6 gap-y-12">
            {#each categories as { label, skills }}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                    <p class="text-base">
                        {label}
                    </p>
                    <div class="flex flex-wrap gap-x-6 gap-y-3">
                        {#each skills as { name, icon, href }}
                            <a
                                {href}
                                target="_blank"
                                class="flex items-center gap-1.5 text-sm md:text-base tracking-[-0.02em] leading-[1.4] text-foreground-muted hover:text-foreground transition-colors"
                            >
                                <Icon {icon} width={16} height={16} />
                                {name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>
