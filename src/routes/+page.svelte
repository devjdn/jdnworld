<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
    import MoveRight from "@lucide/svelte/icons/move-right";
    import Icon from "@iconify/svelte";
    const categories = [
        {
            label: "Languages",
            skills: [
                {
                    name: "HTML",
                    icon: "simple-icons:html5",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                },
                {
                    name: "CSS",
                    icon: "simple-icons:css",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                },
                {
                    name: "JavaScript",
                    icon: "simple-icons:javascript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                },
                {
                    name: "TypeScript",
                    icon: "simple-icons:typescript",
                    href: "https://www.typescriptlang.org",
                },
            ],
        },
        {
            label: "Frameworks",
            skills: [
                {
                    name: "React",
                    icon: "simple-icons:react",
                    href: "https://react.dev",
                },
                {
                    name: "Next.js",
                    icon: "simple-icons:nextdotjs",
                    href: "https://nextjs.org",
                },
                {
                    name: "Svelte",
                    icon: "simple-icons:svelte",
                    href: "https://svelte.dev",
                },
                {
                    name: "SvelteKit",
                    icon: "simple-icons:svelte",
                    href: "https://svelte.dev/docs/kit",
                },
                {
                    name: "Astro",
                    icon: "simple-icons:astro",
                    href: "https://astro.build",
                },
            ],
        },
        {
            label: "Styling",
            skills: [
                {
                    name: "Tailwind CSS",
                    icon: "simple-icons:tailwindcss",
                    href: "https://tailwindcss.com",
                },
                {
                    name: "shadcn/ui",
                    icon: "simple-icons:shadcnui",
                    href: "https://ui.shadcn.com",
                },
                {
                    name: "Radix UI",
                    icon: "simple-icons:radixui",
                    href: "https://www.radix-ui.com",
                },
            ],
        },
        {
            label: "Backend",
            skills: [
                {
                    name: "Node.js",
                    icon: "simple-icons:nodedotjs",
                    href: "https://nodejs.org",
                },
                {
                    name: "PostgreSQL",
                    icon: "simple-icons:postgresql",
                    href: "https://www.postgresql.org",
                },
                {
                    name: "MySQL",
                    icon: "simple-icons:mysql",
                    href: "https://www.mysql.com",
                },
                {
                    name: "Drizzle",
                    icon: "simple-icons:drizzle",
                    href: "https://orm.drizzle.team",
                },
                {
                    name: "Supabase",
                    icon: "simple-icons:supabase",
                    href: "https://supabase.com",
                },
                {
                    name: "Convex",
                    icon: "simple-icons:convex",
                    href: "https://www.convex.dev",
                },
            ],
        },
        {
            label: "Tooling",
            skills: [
                {
                    name: "Git",
                    icon: "simple-icons:git",
                    href: "https://git-scm.com",
                },
                {
                    name: "GitHub",
                    icon: "simple-icons:github",
                    href: "https://github.com",
                },
                {
                    name: "pnpm",
                    icon: "simple-icons:pnpm",
                    href: "https://pnpm.io",
                },
                {
                    name: "Vercel",
                    icon: "simple-icons:vercel",
                    href: "https://vercel.com",
                },
                {
                    name: "Zed",
                    icon: "simple-icons:zedindustries",
                    href: "https://zed.dev",
                },
                {
                    name: "ESLint",
                    icon: "simple-icons:eslint",
                    href: "https://eslint.org",
                },
                {
                    name: "Prettier",
                    icon: "simple-icons:prettier",
                    href: "https://prettier.io",
                },
                {
                    name: "Oxc",
                    icon: "simple-icons:oxc",
                    href: "https://oxc.rs",
                },
            ],
        },
    ];
</script>

<main class="max-w-5xl flex-1 mx-auto w-full pt-24 pb-48 space-y-24">
    <section class="px-6 lg:px-0">
        <h1 class="font-medium text-3xl">Hello browser, I'm jdn.</h1>
        <p class="font-medium text-3xl text-foreground-muted">
            Frontend Web Developer
        </p>
    </section>

    <section class="px-6 lg:px-0 space-y-5">
        <div class="flex items-center justify-between gap-4">
            <h2 class="md:text-lg font-medium">Selected Projects</h2>

            <a
                href="/projects"
                class="text-sm text-foreground-muted hover:text-foreground duration-250 transition-colors inline-flex gap-1 items-center"
            >
                <span>View All</span>
                <MoveRight class="size-4" />
            </a>
        </div>

        <div class="flex flex-col md:grid md:grid-cols-2 gap-x-3 gap-y-10">
            <article class="space-y-4">
                <div class="overflow-hidden rounded-xl">
                    <img
                        src="/images/toolbase-preview.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="leading-snug space-y-2">
                    <p class="text-sm md:text-base">
                        ToolBase
                        <span class="text-foreground-muted">
                            - Personal web app built to manage the technologies
                            I use within my developer workflow.
                        </span>
                    </p>
                </div>
                <Button
                    href="https://toolbase.jdn.world"
                    target="_blank"
                    size="lg"
                >
                    Visit ToolBase
                    <ArrowUpRight />
                </Button>
            </article>
            <article class="space-y-4">
                <div class="overflow-hidden rounded-xl">
                    <img
                        src="/images/stargazer-preview.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="leading-snug space-y-2">
                    <p class="text-sm md:text-base">
                        Stargazer
                        <span class="text-foreground-muted">
                            - Interactive NASA API hub that allows users to
                            explore space imagery and data.
                        </span>
                    </p>
                </div>
                <Button
                    href="https://stargazer.jdn.world"
                    target="_blank"
                    size="lg"
                >
                    Visit Stargazer
                    <ArrowUpRight />
                </Button>
            </article>
        </div>
    </section>

    <section class="px-6 lg:px-0 space-y-5">
        <h2 class="md:text-lg font-medium">Skills</h2>
        <div class="grid grid-flow-row">
            {#each categories as { label, skills }}
                <div
                    class="py-3 items-start md:grid md:grid-cols-[150px_1fr] flex flex-col not-md:gap-4 not-last:border-b"
                >
                    <p class="text-sm md:text-base">
                        {label}
                    </p>
                    <div class="flex flex-wrap gap-x-6 gap-y-3">
                        {#each skills as { name, icon, href }}
                            <a
                                {href}
                                target="_blank"
                                class="flex items-center gap-1.5 text-sm md:text-base text-foreground-muted hover:text-foreground transition-colors"
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

    <section class="px-6 lg:px-0 space-y-5 text-center">
        <div class="space-y-4">
            <h2 class="md:text-lg font-medium">Contact Me</h2>
            <p class="text-foreground-muted">
                If you'd like to get in touch, feel free to reach out through my
                X/Twitter or via email :)
            </p>
        </div>

        <div class="grid grid-cols-[160px] gap-1 w-fit mx-auto">
            <Button size="lg" href="https://x.com/NotCellium" target="_blank">
                <span>X / Twitter</span>
            </Button>
            <Button
                size="lg"
                variant="secondary"
                href="mailto:jaydenux@outlook.com"
                target="_blank"
            >
                <span>Email</span>
            </Button>
        </div>
    </section>
</main>
