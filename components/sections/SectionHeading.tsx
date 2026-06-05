import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-[var(--restaurant-cream)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--restaurant-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
