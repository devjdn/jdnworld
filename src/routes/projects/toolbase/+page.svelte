<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
    import { RiArrowRightUpLongLine } from "svelte-remixicon";
</script>

<main class="pt-12 pb-36 md:pt-24 md:pb-48 space-y-12">
    <section
        class="px-6 lg:px-12 flex flex-col md:grid md:grid-cols-2 items-start gap-6"
    >
        <div class="space-y-1.5 md:space-y-3">
            <p class="font-medium">Project</p>
            <h1
                class="text-5xl lg:text-6xl xl:text-7xl uppercase font-condensed"
            >
                ToolBase
            </h1>
        </div>

        <div class="flex flex-col w-full md:grid md:grid-cols-2 gap-6">
            <div class="space-y-1.5 md:space-y-3">
                <p class="font-medium">Year</p>
                <span
                    class="text-5xl lg:text-6xl xl:text-7xl font-condensed tracking-tighter uppercase"
                >
                    2026 Q3
                </span>
            </div>

            <div class="space-y-1.5 md:space-y-3 md:place-self-end">
                <p class="font-medium">Website</p>
                <a
                    href="https://toolbase.jdn.world"
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

    <section
        class="px-6 lg:px-12 flex-1 flex flex-col md:grid md:grid-cols-[1.65fr_1fr] md:grid-rows-2 gap-1.5 md:aspect-16/7"
    >
        <div class="overflow-hidden row-span-2">
            <img
                src="/images/toolbase-hero-preview.webp"
                alt="ToolBase full app view"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <div class="overflow-hidden">
            <img
                src="/images/toolbase-closeup-preview.webp"
                alt="ToolBase category navigation"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <div class="overflow-hidden">
            <img
                src="/images/toolbase-cmdpalette-preview.webp"
                alt="ToolBase tool card grid"
                class="w-full h-full object-cover object-center"
            />
        </div>
    </section>

    <section class="px-6 lg:px-12 space-y-6 lg:space-y-12">
        <div
            class="not-md:space-y-1.5 md:space-y-3 md:grid md:grid-cols-2 md:gap-8"
        >
            <div>
                <h2 class="font-medium lg:text-2xl">Project Description</h2>
            </div>
            <div class="space-y-5">
                <p class="max-w-prose lg:text-2xl">
                    ToolBase is a personal app that I decided to build because I
                    didn't have a good way to manage the tools and technologies
                    I was using to build my projects. Before ToolBase, I'd end
                    up spinning up my dev environment, then spending ages
                    remembering what I'm using to implement certain features of
                    the project, and then having completely forgotten the links
                    to the documentation.
                </p>
                <p class="max-w-prose lg:text-2xl">
                    The solution was obvious to me straight away... bookmarks.
                    However, that presents another problem, bookmarks are
                    browser-specific, and often device-specfic, and also an
                    absolute pain to keep organised. So, this is how ToolBase
                    came about. With ToolBase, anyone who signs up can look for
                    the tools they are using, and add any that aren't already on
                    there.
                </p>
            </div>
        </div>

        <div class="h-0 border-t"></div>

        <div
            class="not-md:space-y-1.5 md:space-y-3 md:grid md:grid-cols-2 md:gap-8"
        >
            <div>
                <h2 class="font-medium lg:text-2xl">Tech Stack</h2>
            </div>
            <div class="flex gap-1 flex-wrap">
                <Badge variant="secondary">Svelte</Badge>
                <Badge variant="secondary">SvelteKit</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Drizzle ORM</Badge>
                <Badge variant="secondary">Vercel</Badge>
            </div>
        </div>
    </section>
</main>
