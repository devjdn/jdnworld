<script lang="ts" module>
    import { type VariantProps, tv } from "tailwind-variants";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";

    export const buttonVariants = tv({
        base: "rounded-4xl cursor-pointer leading-0 border border-transparent bg-clip-padding text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variants: {
            variant: {
                // Primary CTA — interactive track, highest contrast
                default:
                    "bg-interactive text-interactive-foreground hover:bg-interactive-hover",

                // Secondary CTA — muted interactive, subordinate to default
                secondary:
                    "bg-interactive-muted text-interactive-muted-foreground hover:bg-surface-raised",

                // Outline — surface layer, bordered
                outline:
                    "bg-surface text-foreground border-border hover:bg-surface-raised hover:border-surface-raised-border",

                // Ghost — no background until hovered
                ghost: "text-foreground-muted hover:bg-surface hover:text-foreground",

                // Destructive — feedback track
                destructive:
                    "bg-destructive-subtle text-destructive border-destructive/20 hover:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",

                // Link — text only, no background
                link: "text-foreground-muted underline-offset-4 hover:underline",
            },
            size: {
                default:
                    "h-9 gap-1.5 px-3 tracking-tight has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
                xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1 px-3 tracking-tight has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                lg: "h-10 gap-1.5 px-4 tracking-tight has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                icon: "size-9",
                "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });

    export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
    export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: ButtonVariant;
            size?: ButtonSize;
        };
</script>

<script lang="ts">
    let {
        class: className,
        variant = "default",
        size = "default",
        ref = $bindable(null),
        href = undefined,
        type = "button",
        disabled,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

{#if href}
    <a
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size }), className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? "link" : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </button>
{/if}
