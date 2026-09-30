<script lang="ts">
    import Header from "$lib/components/header/Header.svelte";
    let { children } = $props();
</script>

<Header />

{@render children()}
