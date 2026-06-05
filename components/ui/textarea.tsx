import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-[var(--restaurant-line)] bg-black/20 px-3 py-2 text-sm text-[var(--restaurant-cream)] shadow-sm placeholder:text-[var(--restaurant-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--restaurant-gold)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
