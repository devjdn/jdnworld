import { animate, inView, stagger } from "motion";

const reduced = () =>
  typeof matchMedia !== "undefined" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade/slide an element in when it scrolls into view
export function reveal(
  node: HTMLElement,
  opts: { y?: number; delay?: number } = {},
) {
  if (reduced()) return;
  const { y = 16, delay = 0 } = opts;
  node.style.opacity = "0";

  const stop = inView(
    node,
    () => {
      animate(
        node,
        { opacity: 1, transform: ["translateY(" + y + "px)", "none"] },
        { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      );
    },
    { margin: "0px 0px -10% 0px" },
  );

  return { destroy: stop };
}

// Stagger a container's direct children
export function staggerChildren(
  node: HTMLElement,
  opts: { gap?: number } = {},
) {
  if (reduced()) return;
  const children = Array.from(node.children) as HTMLElement[];
  children.forEach((c) => (c.style.opacity = "0"));

  const stop = inView(node, () => {
    animate(
      children,
      { opacity: 1, transform: ["translateY(12px)", "none"] },
      { duration: 0.5, delay: stagger(opts.gap ?? 0.06), ease: "easeOut" },
    );
  });

  return { destroy: stop };
}
