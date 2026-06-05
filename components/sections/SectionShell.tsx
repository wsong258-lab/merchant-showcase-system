import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
  bleed = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-24 lg:py-32", className)}
    >
      <div className={cn(bleed ? "" : "container", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
