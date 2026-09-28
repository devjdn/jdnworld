<script lang="ts">
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

<main class="pt-24 pb-36 md:pb-48 space-y-36">
    <section class="px-6 lg:px-12 space-y-6">
        <h1 class="text-5xl sm:text-[96px] lg:text-[124px] font-condensed">
            Hello browser,
        </h1>
        <p
            class="text-lg lg:text-2xl text-foreground-muted max-w-4xl supports-text-pretty:text-pretty text-balance leading-[1.2]"
        >
            Welcome to my corner of the web! I'm a jdn, frontend web developer
            from the UK with a love for effective, minimalist design.
        </p>
    </section>

    <section class="px-6 lg:px-12 space-y-12">
        <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
            Selected Work
        </h2>

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
        <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
            Skills
        </h2>
        <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12"
        >
            {#each categories as { label, skills }}
                <div class="space-y-3">
                    <p class="text-sm md:text-base font-medium">
                        {label}
                    </p>
                    <div class="flex flex-col gap-x-6 gap-y-3">
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

    <section
        class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-6 px-6 lg:px-12"
    >
        <div>
            <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                I'm located in the UK, <br /> but you talk to me on
            </h2>
        </div>

        <ul class="">
            <li>
                <a
                    href="https://x.com/NotCellium"
                    target="_blank"
                    class="text-foreground-muted text-2xl lg:text-3xl font-medium tracking-tighter hover:text-foreground transition-colors duration-300"
                >
                    X
                </a>
            </li>
            <li>
                <a
                    href="mailto:jaydenux@outlook.com"
                    class="text-foreground-muted text-2xl lg:text-3xl font-medium tracking-tighter hover:text-foreground transition-colors duration-300"
                >
                    Email
                </a>
            </li>
        </ul>
    </section>
</main>
