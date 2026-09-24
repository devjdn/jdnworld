<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import ProjectsHeader from "$lib/components/layout-content/ProjectsHeader.svelte";
    import ProjectInformation from "$lib/components/layout-content/ProjectInformation.svelte";
</script>

<main class="pt-12 pb-36 md:pt-24 md:pb-48 space-y-12">
    <ProjectsHeader
        title="ToolBase"
        year="2026 Q3"
        url="https://toolbase.jdn.world"
    />

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
        <ProjectInformation heading="Project Description">
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
        </ProjectInformation>

        <div class="h-0 border-t"></div>

        <ProjectInformation heading="Tech Stack">
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
        </ProjectInformation>

        <div class="h-0 border-t"></div>

        <ProjectInformation heading="Fonts & Icon Libraries">
            <ul class="list-disc list-inside lg:text-2xl">
                <li>Suisse Int'l</li>
                <li>Lucide Icons</li>
            </ul>
        </ProjectInformation>
    </section>
</main>
