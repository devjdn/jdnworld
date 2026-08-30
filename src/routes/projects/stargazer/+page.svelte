<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
</script>

<main class="pt-24 pb-48 space-y-24">
    <section
        class="px-6 lg:px-0 max-w-5xl flex-1 flex flex-col md:flex-row justify-between md:items-center gap-3 mx-auto w-full"
    >
        <h1 class="font-medium text-3xl">Stargazer</h1>

        <Button size="lg" class="self-start" href="https://stargazer.jdn.world">
            Visit Project
            <ArrowUpRight />
        </Button>
    </section>

    <section class="px-6 lg:px-0 max-w-5xl flex-1 mx-auto w-full space-y-6">
        <div class="overflow-hidden rounded-xl">
            <img
                src="/images/stargazer-preview.webp"
                alt="Stargazer project preview"
                class="aspect-4/3 object-cover"
            />
        </div>

        <div class="h-0 border-t"></div>

        <div class="not-md:space-y-3 md:grid md:grid-cols-[200px_1fr] md:gap-8">
            <div>
                <h3 class="font-medium">Project Description</h3>
            </div>
            <div class="space-y-5">
                <p class="max-w-prose">
                    Space and astronomy has been an interest I've had since I
                    was a kid, but I never really managed to find good web
                    platforms to be able to explore the imagery and data that is
                    so readily available. Those platforms I did find were either
                    dated, too complex, broken, or all of the above. I built
                    Stargazer to try and solve this problem, not just for
                    myself, but for everyone else like me who has experienced
                    the same frustration.
                </p>
                <p class="max-w-prose">
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

        <div class="not-md:space-y-3 md:grid md:grid-cols-[200px_1fr] md:gap-8">
            <div>
                <h3 class="font-medium">Tech Stack</h3>
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
