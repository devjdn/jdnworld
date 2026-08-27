<!-- <script lang="ts">
    import Icon from "@iconify/svelte";
</script> -->

<main class="pt-24 pb-48 space-y-24">
    <section class="not-lg:px-6 max-w-5xl flex-1 mx-auto w-full">
        <h1 class="text-2xl sm:text-3xl font-semibold">
            Things I've Worked On
        </h1>
    </section>

    <section class="not-lg:px-6 max-w-5xl flex-1 mx-auto w-full space-y-6">
        <div>
            <h2 class="font-semibold text-xl sm:text-2xl">ToolBase</h2>
        </div>

        <div class="overflow-hidden rounded-xl">
            <img
                src="/images/toolbase-preview.webp"
                alt="ToolBase project preview"
                class="aspect-4/3 object-cover"
            />
        </div>

        <div class="not-md:space-y-6 md:grid md:grid-cols-[200px_1fr] md:gap-8">
            <div>
                <h3 class="font-semibold">Project Description</h3>
            </div>
            <div class="space-y-5">
                <p class="max-w-prose md:ml-auto">
                    ToolBase is a personal app that I decided to build because I
                    didn't have a good way to manage the tools and technologies
                    I was using to build my projects. Before ToolBase, I'd end
                    up spinning up my dev environment, then spending ages
                    remembering what I'm using to implement certain features of
                    the project, and then having completely forgotten the links
                    to the documentation.
                </p>
                <p class="max-w-prose md:ml-auto">
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

        <div class="not-md:space-y-6 md:grid md:grid-cols-[200px_1fr] md:gap-8">
            <div>
                <h3 class="font-semibold">Tech Stack</h3>
            </div>
            <div>
                <p class="max-w-prose md:ml-auto">
                    Svelte, SvelteKit, TypeScript, Tailwind CSS, PostgreSQL,
                    Supabase, Drizzle ORM, Vercel
                </p>
            </div>
        </div>
    </section>
</main>
