import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Rectangular, confident buttons. Hover flips the fill (ink ⇄ saffron) rather than
 * adding glows or shadows; the arrow nudges toward the reading direction.
 */
const buttonVariants = cva(
  "group/btn relative inline-flex select-none items-center justify-center gap-3 whitespace-nowrap rounded-[4px] font-medium transition-[background-color,color,border-color] duration-300 ease-out cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.05em] [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg.arrow]:translate-x-[3px] rtl:hover:[&_svg.arrow]:-translate-x-[3px]",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-accent hover:text-on-accent",
        accent: "bg-accent text-on-accent hover:bg-ink hover:text-paper",
        outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
