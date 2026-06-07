import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type DrinksSectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function DrinksSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: DrinksSectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="inline-flex items-center rounded-full bg-[var(--ds-cream)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--ds-coffee)]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-bold leading-tight text-balance text-[var(--ds-ink)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-7 text-[var(--ds-ink-soft)] sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
