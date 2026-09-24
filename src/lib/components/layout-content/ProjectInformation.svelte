<script lang="ts">
    import type { Snippet } from "svelte";

    let { heading, children }: { heading: string; children?: Snippet<[]> } =
        $props();
</script>

<div class="not-md:space-y-1.5 md:space-y-3 md:grid md:grid-cols-2 md:gap-8">
    <div>
        <h2 class="font-medium lg:text-2xl">{heading}</h2>
    </div>

    {@render children?.()}
</div>
