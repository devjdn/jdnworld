<script lang="ts">
    import { reveal } from "$lib/actions/motion";
    import type { Snippet } from "svelte";

    let { heading, children }: { heading: string; children?: Snippet<[]> } =
        $props();
</script>

<div class="col-span-full grid grid-cols-subgrid gap-y-1.5" use:reveal>
    <div class="col-span-full md:col-span-6">
        <h2>
            {heading}
        </h2>
    </div>

    <div class="col-span-full md:col-span-6 md:col-start-7">
        {@render children?.()}
    </div>
</div>
