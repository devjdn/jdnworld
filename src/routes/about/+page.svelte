<script lang="ts">
    import { reveal, staggerChildren } from "$lib/actions/motion";
</script>

<main class="pt-24 pb-36 md:pb-48 space-y-24">
    <section class="px-6 lg:px-12" use:reveal>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-condensed">About</h1>
    </section>

    <section
        class="px-6 lg:px-12 grid grid-cols-1 gap-x-6 gap-y-12"
        use:staggerChildren={{ gap: 0.1 }}
    >
        <article class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-6">
            <div>
                <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                    Summary
                </h2>
            </div>
            <div>
                <p class="max-w-prose lg:text-2xl">
                    I'm Jayden, a 20 year old frontend web developer from the
                    UK. However, I have passions beyond the work I do. Beyond
                    it, I love listening to music, playing video games, and
                    watching football; just to name a few.
                </p>
            </div>
        </article>

        <article class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-6">
            <div>
                <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                    Development Philosophy
                </h2>
            </div>
            <div>
                <p class="max-w-prose lg:text-2xl">
                    Whilst developing an application, or an interface for an
                    application, I'm always thinking about how the user will
                    interact with it, giving them the best experience possible
                    while not making it overwhelming to use. This has led me to
                    develop strong affiliations with minimalistic design
                    principles.
                </p>
            </div>
        </article>

        <article
            class="not-md:space-y-3 md:grid md:grid-cols-2 justify-between md:gap-6"
        >
            <div>
                <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                    Love of Music
                </h2>
            </div>
            <div>
                <p class="max-w-prose lg:text-2xl">
                    As I'm sure many of you do, I listen to music pretty much
                    constantly. Whether I'm writing code, playing a game, on a
                    walk, literally anything and everything. Humans are each
                    unique, but the ability for music to be felt in such
                    profound ways is almost universal in us all, and I think
                    that is what I love so much about it; the way it dictates
                    and impacts emotions. I'd like to think my taste is very
                    broad, but I definitely have a preference for R&B, Soul,
                    Funk, and Singer/Songwriter. Some artists I would have to
                    mention are: Prince, Joni Mitchell, Marvin Gaye, Sade, and
                    The Weeknd for a modern pick.
                </p>
            </div>
        </article>

        <article class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-6">
            <div>
                <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                    Music In My Design
                </h2>
            </div>
            <div>
                <p class="max-w-prose lg:text-2xl">
                    You may notice that this portfolio site has some really
                    random colour schemes across the pages. Outside of dedicated
                    project pages, I have tried to implement colour schemes
                    directly inspired from some of my favourite albums. I hope
                    it isn't too distracting. If you like it, feel free to guess
                    which albums each scheme is inspired by :)
                </p>
            </div>
        </article>

        <article class="not-md:space-y-3 md:grid md:grid-cols-2 md:gap-6">
            <div>
                <h2 class="text-2xl lg:text-3xl font-medium tracking-tighter">
                    Football
                </h2>
            </div>
            <div>
                <p class="max-w-prose lg:text-2xl">
                    Every week, me, my brother, and my Grandad get together at
                    his house to watch our team, Leeds United, play. Sometimes
                    they make my weekend, the next they can ruin my weekend.
                    That's the way the game goes I guess. I'm still living on
                    the fact I can't believe we bought Raphinha for £17m.
                </p>
            </div>
        </article>
    </section>
</main>
