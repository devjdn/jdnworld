<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
</script>

<main class="pt-24 pb-48 space-y-24">
    <section class="px-6 lg:px-0 max-w-5xl flex-1 mx-auto w-full">
        <h1 class="text-2xl sm:text-3xl font-medium">ToolBase</h1>
    </section>

    <section class="px-6 lg:px-0 max-w-5xl flex-1 mx-auto w-full space-y-6">
        <div class="overflow-hidden rounded-xl">
            <img
                src="/images/toolbase-preview.webp"
                alt="ToolBase project preview"
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
                    ToolBase is a personal app that I decided to build because I
                    didn't have a good way to manage the tools and technologies
                    I was using to build my projects. Before ToolBase, I'd end
                    up spinning up my dev environment, then spending ages
                    remembering what I'm using to implement certain features of
                    the project, and then having completely forgotten the links
                    to the documentation.
                </p>
                <p class="max-w-prose">
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

        <div class="not-md:space-y-3 md:grid md:grid-cols-[200px_1fr] md:gap-8">
            <div>
                <h3 class="font-medium">Tech Stack</h3>
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
