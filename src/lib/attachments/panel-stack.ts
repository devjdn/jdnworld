import type { Attachment } from "svelte/attachments";

export const stack: Attachment<HTMLElement> = (el) => {
  const pin = () => {
    el.style.top = `${Math.min(0, innerHeight - el.offsetHeight)}px`;
  };

  const ro = new ResizeObserver(pin);
  ro.observe(el);
  addEventListener("resize", pin);
  pin();

  // let stop: VoidFunction | undefined;
  // const next = el.nextElementSibling;
  // if (next && !matchMedia("(prefers-reduced-motion: reduce").matches) {
  //   stop = scroll(animate(el, { scale: [1, 0.9] }, { ease: "linear" }), {
  //     target: next,
  //     offset: ["start end", "start start"],
  //   });
  // }

  return () => {
    ro.disconnect();
    removeEventListener("resize", pin);
    // stop?.();
  };
};
