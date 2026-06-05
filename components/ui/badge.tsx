import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--restaurant-line)] bg-[rgba(214,168,97,0.12)] text-[var(--restaurant-gold-soft)]",
        muted: "border-white/10 bg-white/5 text-[var(--restaurant-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
