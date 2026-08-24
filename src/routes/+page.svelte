<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
    import Mail from "@lucide/svelte/icons/mail";
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

<main class="max-w-5xl mx-auto w-full pt-24 items-center4">
    <section class="not-lg:px-6 pb-24">
        <h1 class="tracking-tight text-2xl sm:text-3xl">
            Hello browser, I'm jdn.
        </h1>
        <p class="tracking-tight text-2xl sm:text-3xl text-muted-foreground">
            Frontend Web Developer
        </p>
    </section>

    <section class="not-lg:px-6 pb-24 space-y-5">
        <h2 class="tracking-tight text-xl sm:text-2xl">Selected Projects</h2>

        <div class="flex flex-col md:grid md:grid-cols-2 gap-x-3 gap-y-10">
            <article class="space-y-4">
                <div class="overflow-hidden rounded-xl">
                    <img
                        src="/images/toolbase-preview-dark.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="leading-snug space-y-2">
                    <p class="text-sm md:text-base font-book md:tracking-tight">
                        ToolBase
                    </p>
                    <p
                        class="text-sm md:text-base text-muted-foreground tracking-tight leading-snug"
                    >
                        Personal web app built to manage the technologies I use
                        within my developer workflow.
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
                        src="/images/stargazer-preview-dark.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div class="leading-snug space-y-2">
                    <p class="text-sm md:text-base font-book md:tracking-tight">
                        Stargazer
                    </p>
                    <p
                        class="text-sm md:text-base text-muted-foreground tracking-tight leading-snug"
                    >
                        Interactive NASA API hub that allows users to explore
                        space imagery and data.
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

    <section class="not-lg:px-6 pb-24 space-y-5">
        <h2 class="tracking-tight text-xl sm:text-2xl">Skills</h2>
        <div class="grid grid-flow-row">
            {#each categories as { label, skills }}
                <div
                    class="py-3 items-start md:grid md:grid-cols-[150px_1fr] flex flex-col not-md:gap-4 not-last:border-b"
                >
                    <p class="font-book text-sm md:text-base md:tracking-tight">
                        {label}
                    </p>
                    <div class="flex flex-wrap gap-x-6 gap-y-3">
                        {#each skills as { name, icon, href }}
                            <a
                                {href}
                                target="_blank"
                                class="flex items-center gap-1.5 text-sm md:text-base md:tracking-tight text-muted-foreground hover:text-foreground transition-colors"
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

    <section class="not-lg:px-6 pb-24 space-y-5 text-center">
        <h2 class="tracking-tight text-xl sm:text-2xl">Contact Me</h2>
        <p class="text-muted-foreground tracking-tight">
            If you'd like to get in touch, feel free to reach out through my
            X/Twitter or via email :)
        </p>

        <div class="flex flex-col gap-y-1 w-40 mx-auto">
            <Button size="lg" href="https://x.com/NotCellium" target="_blank">
                <Icon icon="simple-icons:x" />
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
