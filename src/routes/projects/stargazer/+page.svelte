<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import ProjectsHeader from "$lib/components/layout-content/ProjectsHeader.svelte";
    import ProjectInformation from "$lib/components/layout-content/ProjectInformation.svelte";
</script>

<main class="pt-12 pb-36 md:pt-24 md:pb-48 space-y-12">
    <ProjectsHeader
        title="Stargazer"
        year="2026 Q1+2"
        url="https://stargazer.jdn.world"
    />

    <section
        class="px-6 lg:px-12 flex-1 flex flex-col md:grid md:grid-cols-[1.65fr_1fr] md:grid-rows-2 gap-1.5 md:aspect-16/7"
    >
        <div class="overflow-hidden row-span-2">
            <img
                src="/images/stargazer-hero-preview.webp"
                alt="Stargazer project preview"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <div class="overflow-hidden">
            <img
                src="/images/stargazer-epic-closeup-preview.webp"
                alt="Stargazer EPIC closeup"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <div class="overflow-hidden">
            <img
                src="/images/stargazer-neows-preview.webp"
                alt="Stargazer NEOWS"
                class="w-full h-full object-cover object-center"
            />
        </div>
    </section>

    <section class="px-6 lg:px-12 space-y-6 lg:space-y-12">
        <ProjectInformation heading="Project Description">
            <div class="space-y-5">
                <p class="max-w-prose lg:text-2xl">
                    Space and astronomy has been an interest I've had since I
                    was a kid, but I never really managed to find good web
                    platforms to be able to explore the imagery and data that is
                    so readily available. Those platforms I did find were either
                    dated, too complex, broken, or all of the above. I built
                    Stargazer to try and solve this problem, not just for
                    myself, but for everyone else like me who has experienced
                    the same frustration.
                </p>
                <p class="max-w-prose lg:text-2xl">
                    Using Stargazer, you can explore three APIs built by NASA
                    and their teams: Astronomy Picture of the Day (APOD), Earth
                    Polychromatic Imaging Camera (EPIC), and Near Earth Objects
                    Web Service (NeoWs). These APIs provide a wealth of imagery,
                    data, and facts about space and astronomy for anyone to
                    explore.
                </p>
            </div>
        </ProjectInformation>

        <div class="h-0 border-t"></div>

        <ProjectInformation heading="Tech Stack">
            <div class="flex gap-1 flex-wrap">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">NASA API</Badge>
                <Badge variant="secondary">Zustand</Badge>
                <Badge variant="secondary">Tanstack Query</Badge>
                <Badge variant="secondary">Motion</Badge>
                <Badge variant="secondary">date-fns</Badge>
                <Badge variant="secondary">Vercel</Badge>
            </div>
        </ProjectInformation>

        <div class="h-0 border-t"></div>

        <ProjectInformation heading="Fonts & Icon Libraries">
            <ul class="list-disc list-inside lg:text-2xl">
                <li>Inter</li>
                <li>Inter Tight</li>
                <li>IBM Plex Mono</li>
                <li>Lucide Icons</li>
                <li>Hugeicons</li>
                <li>Remix Icon</li>
            </ul>
        </ProjectInformation>
    </section>
</main>
