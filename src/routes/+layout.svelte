<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { ModeWatcher } from "mode-watcher";
    import Header from "$lib/components/header/Header.svelte";
    import { page } from "$app/state";
    import { cn } from "$lib/utils";

    let { children } = $props();
</script>

<svelte:head>
    <title>jdn.world</title>
    <link rel="icon" href={favicon} />
</svelte:head>

<div
    class={cn(
        "flex flex-col min-h-lvh relative bg-background text-foreground",
        page.data.theme ?? "",
    )}
>
    <ModeWatcher defaultMode="system" />
    <Header />
    {@render children()}
</div>
