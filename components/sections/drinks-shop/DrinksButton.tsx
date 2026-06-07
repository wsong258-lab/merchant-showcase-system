import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const drinksButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-caramel)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-bg)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // 主 CTA：深咖实色，高对比、转化清晰（对齐 Manner / 茶姬深色按钮）
        primary:
          "bg-[var(--ds-coffee-deep)] text-white shadow-[0_10px_24px_var(--ds-shadow-strong)] hover:bg-[var(--ds-coffee)]",
        outline:
          "border border-[var(--ds-line)] bg-[var(--ds-surface)] text-[var(--ds-coffee-deep)] hover:bg-[var(--ds-bg-soft)]",
        cream:
          "bg-[var(--ds-cream)] text-[var(--ds-coffee-deep)] hover:bg-[#e9dcc4]",
        ghost: "text-[var(--ds-coffee-deep)] hover:bg-[var(--ds-bg-soft)]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type DrinksButtonProps = React.PropsWithChildren<
  VariantProps<typeof drinksButtonVariants> & {
    className?: string;
    href?: string;
    external?: boolean;
    type?: "button" | "submit";
    ariaLabel?: string;
  }
>;

/**
 * 咖啡 / 奶茶门店浅色按钮，颜色全部走 `--ds-` 变量，保持可复用。
 * 提供 href 时渲染为链接，否则为按钮。
 */
export function DrinksButton({
  variant,
  size,
  className,
  href,
  external,
  type = "button",
  ariaLabel,
  children,
}: DrinksButtonProps) {
  const classes = cn(drinksButtonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export { drinksButtonVariants };
