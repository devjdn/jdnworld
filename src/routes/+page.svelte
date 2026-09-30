<script lang="ts">
    import Icon from "@iconify/svelte";
    import { categories, siteLinks } from "$lib/constants";
    import { RiArrowRightUpLongLine } from "svelte-remixicon";
</script>

<main
    class="grid grid-cols-4 md:grid-cols-12 gap-x-gutter gap-y-section px-margin pb-section"
>
    <header class="col-span-full -mx-margin flex flex-col gap-y-group">
        <svg
            viewBox="0 0 942 216"
            class="block w-full h-auto col-span-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-6.84112e-05 216V193.92H5.51993C16.7999 193.92 18.9599 190.56 18.9599 178.08V44.88H47.5199V178.32C47.5199 207.6 39.1199 216 12.4799 216H-6.84112e-05ZM18.9599 28.32V1.90735e-06H47.5199V28.32H18.9599ZM159.287 174V155.28C151.127 169.2 136.247 177.12 118.007 177.12C87.0468 177.12 62.0868 152.16 62.0868 109.68C62.0868 67.44 87.0468 42.48 118.007 42.48C136.247 42.48 151.127 50.4 159.287 64.08V1.90735e-06H187.847V174H159.287ZM126.407 153.84C144.407 153.84 160.487 140.88 160.487 109.68C160.487 78.48 144.407 65.76 126.407 65.76C106.487 65.76 92.5668 81.6 92.5668 109.68C92.5668 138 106.487 153.84 126.407 153.84ZM210.351 174V44.88H238.911V63.36C245.631 52.08 258.831 42.48 279.951 42.48C311.871 42.48 322.911 62.4 322.911 93.84V174H294.351V101.76C294.351 82.32 291.951 65.76 269.151 65.76C249.711 65.76 238.911 79.2 238.911 105.36V174H210.351ZM341.252 174V140.64H375.332V174H341.252ZM406.466 174L371.906 44.88H401.906L423.746 137.28L445.346 44.88H474.866L496.466 137.28L518.306 44.88H548.306L513.986 174H483.986L459.746 73.44L436.226 174H406.466ZM613.022 177.12C580.622 177.12 548.222 156.24 548.222 109.44C548.222 62.64 580.622 42 613.022 42C645.182 42 677.582 62.64 677.582 109.44C677.582 156.24 645.182 177.12 613.022 177.12ZM613.022 153.6C631.262 153.6 647.582 141.12 647.582 109.44C647.582 78 631.022 65.76 613.022 65.76C594.782 65.76 578.222 78 578.222 109.44C578.222 141.12 594.542 153.6 613.022 153.6ZM692.038 174V44.88H719.878V68.16C726.118 53.28 738.358 44.64 755.878 44.16C757.798 44.16 759.958 44.16 762.118 44.4V73.44C757.318 72.72 753.958 72.48 750.358 72.48C730.678 72.48 720.598 82.08 720.598 107.52V174H692.038ZM772.616 174V1.90735e-06H801.176V174H772.616ZM912.943 174V155.28C904.783 169.2 889.903 177.12 871.663 177.12C840.703 177.12 815.743 152.16 815.743 109.68C815.743 67.44 840.703 42.48 871.663 42.48C889.903 42.48 904.783 50.4 912.943 64.08V1.90735e-06H941.503V174H912.943ZM880.063 153.84C898.063 153.84 914.143 140.88 914.143 109.68C914.143 78.48 898.063 65.76 880.063 65.76C860.143 65.76 846.223 81.6 846.223 109.68C846.223 138 860.143 153.84 880.063 153.84Z"
                fill="currentColor"
            />
        </svg>

        <nav class="px-margin grid grid-cols-4 md:grid-cols-12 gap-x-gutter">
            <ul
                class="col-span-3 col-start-2 md:col-span-6 md:col-start-7 flex flex-col text-2xl lg:text-3xl font-medium tracking-[-0.04em]"
            >
                {#each siteLinks as link, i (i)}
                    <li
                        class="group relative py-6 after:absolute after:bottom-0 after:left-0 after:-right-margin after:h-px after:bg-border"
                    >
                        <a
                            href={link.href}
                            class="w-fit inline-flex items-center gap-3"
                        >
                            {#if link.target === "_blank"}
                                <span>
                                    {link.name}
                                </span>
                                <RiArrowRightUpLongLine
                                    class="group-hover:rotate-45 transition-transform duration-300"
                                />
                            {:else}
                                {link.name}
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </header>

    <!-- 01 Selected Work -->
    <section class="col-span-full grid grid-cols-subgrid gap-y-group">
        <div class="col-span-full grid grid-cols-subgrid gap-y-3">
            <p
                class="col-span-1 md:col-span-6 text-2xl lg:text-3xl font-medium tracking-[-0.04em] text-foreground-muted"
            >
                01
            </p>
            <h2 class="col-start-2 col-span-3 md:col-span-6 md:col-start-7">
                Selected Work
            </h2>
        </div>

        <div class="col-span-full grid grid-cols-subgrid gap-y-group">
            <article
                class="col-span-full flex flex-col not-md:gap-y-3 md:grid md:grid-cols-subgrid"
            >
                <div
                    class="overflow-hidden md:col-start-7 md:col-span-6 md:row-start-1"
                >
                    <img
                        src="/images/stargazer-hero-preview.webp"
                        alt="Stargazer project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div
                    class="flex flex-col md:col-start-1 md:col-span-6 md:row-start-1 md:self-baseline-last"
                >
                    <p>Stargazer</p>
                    <p class="text-foreground-muted">
                        Browse the vast collection of NASA imagery and data.
                    </p>
                </div>
            </article>

            <article
                class="relative col-span-full flex flex-col not-md:gap-y-3 md:grid md:grid-cols-subgrid pt-margin before:absolute before:top-0 before:left-0 before:-right-margin before:h-px before:bg-border"
            >
                <div
                    class="overflow-hidden md:col-start-7 md:col-span-6 md:row-start-1"
                >
                    <img
                        src="/images/toolbase-hero-preview.webp"
                        alt="ToolBase project preview"
                        class="aspect-4/3 object-cover"
                    />
                </div>
                <div
                    class="flex flex-col md:col-start-1 md:col-span-6 md:row-start-1 md:self-baseline-last"
                >
                    <p>ToolBase</p>
                    <p class="text-foreground-muted">
                        Manage technologies within your developer workflow.
                    </p>
                </div>
            </article>
        </div>
    </section>

    <!-- 02 Skills -->
    <section class="col-span-full grid grid-cols-subgrid gap-y-group">
        <div class="col-span-full grid grid-cols-subgrid gap-y-3">
            <p
                class="col-span-1 md:col-span-6 text-2xl lg:text-3xl font-medium tracking-[-0.04em] text-foreground-muted"
            >
                02
            </p>
            <h2 class="col-start-2 col-span-3 md:col-span-6 md:col-start-7">
                Skills
            </h2>
        </div>

        <div class="col-span-full grid grid-cols-subgrid">
            {#each categories as { label, skills }}
                <div
                    class="relative col-span-full grid grid-cols-subgrid gap-y-3 py-6 before:absolute before:top-0 before:left-0 before:-right-margin before:h-px before:bg-border last:after:absolute last:after:bottom-0 last:after:left-0 last:after:-right-margin last:after:h-px last:after:bg-border"
                >
                    <p
                        class="col-span-full md:col-span-6 text-foreground-muted"
                    >
                        {label}
                    </p>
                    <ul
                        class="col-span-full md:col-span-6 md:col-start-7 grid grid-cols-subgrid gap-y-3"
                    >
                        {#each skills as { name, href }}
                            <li class="col-span-2 md:col-span-3">
                                <a
                                    {href}
                                    target="_blank"
                                    class="hover:text-foreground-muted transition-colors tracking-[-0.02em]"
                                >
                                    {name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </section>

    <!-- <footer class="col-span-full -mx-margin flex flex-col gap-y-group">
        <svg
            viewBox="0 0 942 216"
            class="block w-full h-auto col-span-full -rotate-180 text-foreground-muted"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-6.84112e-05 216V193.92H5.51993C16.7999 193.92 18.9599 190.56 18.9599 178.08V44.88H47.5199V178.32C47.5199 207.6 39.1199 216 12.4799 216H-6.84112e-05ZM18.9599 28.32V1.90735e-06H47.5199V28.32H18.9599ZM159.287 174V155.28C151.127 169.2 136.247 177.12 118.007 177.12C87.0468 177.12 62.0868 152.16 62.0868 109.68C62.0868 67.44 87.0468 42.48 118.007 42.48C136.247 42.48 151.127 50.4 159.287 64.08V1.90735e-06H187.847V174H159.287ZM126.407 153.84C144.407 153.84 160.487 140.88 160.487 109.68C160.487 78.48 144.407 65.76 126.407 65.76C106.487 65.76 92.5668 81.6 92.5668 109.68C92.5668 138 106.487 153.84 126.407 153.84ZM210.351 174V44.88H238.911V63.36C245.631 52.08 258.831 42.48 279.951 42.48C311.871 42.48 322.911 62.4 322.911 93.84V174H294.351V101.76C294.351 82.32 291.951 65.76 269.151 65.76C249.711 65.76 238.911 79.2 238.911 105.36V174H210.351ZM341.252 174V140.64H375.332V174H341.252ZM406.466 174L371.906 44.88H401.906L423.746 137.28L445.346 44.88H474.866L496.466 137.28L518.306 44.88H548.306L513.986 174H483.986L459.746 73.44L436.226 174H406.466ZM613.022 177.12C580.622 177.12 548.222 156.24 548.222 109.44C548.222 62.64 580.622 42 613.022 42C645.182 42 677.582 62.64 677.582 109.44C677.582 156.24 645.182 177.12 613.022 177.12ZM613.022 153.6C631.262 153.6 647.582 141.12 647.582 109.44C647.582 78 631.022 65.76 613.022 65.76C594.782 65.76 578.222 78 578.222 109.44C578.222 141.12 594.542 153.6 613.022 153.6ZM692.038 174V44.88H719.878V68.16C726.118 53.28 738.358 44.64 755.878 44.16C757.798 44.16 759.958 44.16 762.118 44.4V73.44C757.318 72.72 753.958 72.48 750.358 72.48C730.678 72.48 720.598 82.08 720.598 107.52V174H692.038ZM772.616 174V1.90735e-06H801.176V174H772.616ZM912.943 174V155.28C904.783 169.2 889.903 177.12 871.663 177.12C840.703 177.12 815.743 152.16 815.743 109.68C815.743 67.44 840.703 42.48 871.663 42.48C889.903 42.48 904.783 50.4 912.943 64.08V1.90735e-06H941.503V174H912.943ZM880.063 153.84C898.063 153.84 914.143 140.88 914.143 109.68C914.143 78.48 898.063 65.76 880.063 65.76C860.143 65.76 846.223 81.6 846.223 109.68C846.223 138 860.143 153.84 880.063 153.84Z"
                fill="currentColor"
            />
        </svg>
    </footer> -->
</main>
