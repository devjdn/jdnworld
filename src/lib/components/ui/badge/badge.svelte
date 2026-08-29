<script lang="ts" module>
    import { type VariantProps, tv } from "tailwind-variants";

    export const badgeVariants = tv({
        base: "h-5 gap-1 rounded-4xl cursor-default border border-transparent p-3 text-xs font-light transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
        variants: {
            variant: {
                default:
                    "bg-interactive text-interactive-foreground [a]:hover:bg-interactive/80",
                secondary:
                    "bg-surface text-surface-foreground hover:bg-surface-raised",
                destructive:
                    "bg-destructive-subtle text-destructive border-destructive/20 hover:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
                outline:
                    "bg-surface text-foreground border-border hover:bg-surface-raised hover:border-surface-raised-border",
                ghost: "text-foreground-muted hover:bg-surface hover:text-foreground",
                link: "text-foreground-muted underline-offset-4 hover:underline",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });

    export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let {
        ref = $bindable(null),
        href,
        class: className,
        variant = "default",
        children,
        ...restProps
    }: WithElementRef<HTMLAnchorAttributes> & {
        variant?: BadgeVariant;
    } = $props();
</script>

<svelte:element
    this={href ? "a" : "span"}
    bind:this={ref}
    data-slot="badge"
    {href}
    class={cn(badgeVariants({ variant }), className)}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
