<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { ModeWatcher } from "mode-watcher";
    import Header from "$lib/components/header/Header.svelte";
    import BiasLight from "$lib/components/lighting/BiasLight.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <title>jdn.world</title>
    <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="system" />

<Header />

{@render children()}

<BiasLight />
