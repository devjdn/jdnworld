<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { RiArrowRightUpLine } from "svelte-remixicon";
</script>

<main class="pt-24 pb-48 space-y-12 lg:space-y-24">
    <section
        class="px-6 lg:px-12 flex flex-col md:grid md:grid-cols-2 items-start gap-6"
    >
        <div class="space-y-3">
            <p class="font-medium text-lg">Project</p>
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-medium uppercase">
                Stargazer
            </h1>
        </div>

        <div class="flex flex-col w-full md:grid md:grid-cols-2 gap-3">
            <div class="space-y-3 self-end not-md:text-right">
                <p class="font-medium text-lg">Year</p>
                <span
                    class="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter uppercase"
                >
                    2026
                </span>
            </div>

            <div class="space-y-3 md:place-self-end">
                <p class="font-medium text-lg">Website</p>
                <a
                    href="https://stargazer.jdn.world"
                    target="_blank"
                    class="inline-flex items-center group"
                >
                    <span
                        class="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight uppercase"
                    >
                        Visit
                    </span>
                    <RiArrowRightUpLine
                        class="text-5xl lg:text-6xl xl:text-7xl group-hover:rotate-45 transition-transform duration-300"
                        stroke-width="8"
                    />
                </a>
            </div>
        </div>
    </section>

    <section class="px-6 lg:px-12">
        <div class="overflow-hidden">
            <img
                src="/images/stargazer-preview-raw.webp"
                alt="Stargazer project preview"
                class="object-cover"
            />
        </div>
    </section>

    <section class="px-6 lg:px-12 space-y-6 lg:space-y-12">
        <div class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h2 class="font-medium text-lg lg:text-2xl">
                    Project Description
                </h2>
            </div>
            <div class="space-y-5">
                <p class="max-w-prose text-lg lg:text-2xl">
                    Space and astronomy has been an interest I've had since I
                    was a kid, but I never really managed to find good web
                    platforms to be able to explore the imagery and data that is
                    so readily available. Those platforms I did find were either
                    dated, too complex, broken, or all of the above. I built
                    Stargazer to try and solve this problem, not just for
                    myself, but for everyone else like me who has experienced
                    the same frustration.
                </p>
                <p class="max-w-prose text-lg lg:text-2xl">
                    Using Stargazer, you can explore three APIs built by NASA
                    and their teams: Astronomy Picture of the Day (APOD), Earth
                    Polychromatic Imaging Camera (EPIC), and Near Earth Objects
                    Web Service (NeoWs). These APIs provide a wealth of imagery,
                    data, and facts about space and astronomy for anyone to
                    explore.
                </p>
            </div>
        </div>

        <div class="h-0 border-t"></div>

        <div class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h2 class="font-medium text-lg lg:text-2xl">Tech Stack</h2>
            </div>
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
        </div>
    </section>
</main>
