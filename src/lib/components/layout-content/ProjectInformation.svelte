<script lang="ts">
    import { reveal } from "$lib/actions/motion";
    import type { Snippet } from "svelte";

    let { heading, children }: { heading: string; children?: Snippet<[]> } =
        $props();
</script>

<div
    class="not-md:space-y-1.5 md:space-y-3 md:grid md:grid-cols-2 md:gap-6"
    use:reveal
>
    <div>
        <h2>
            {heading}
        </h2>
    </div>

    {@render children?.()}
</div>
