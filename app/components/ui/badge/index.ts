import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/80 to-primary dark:from-primary dark:to-primary/80 text-primary-foreground dark:border-primary border shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95",
        secondary:
          "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-secondary)] border-secondary from-secondary/80 to-secondary dark:from-secondary dark:to-secondary/80 text-secondary-foreground dark:border-secondary border shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-95",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
