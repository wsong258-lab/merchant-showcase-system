import { ArrowRight } from "lucide-react";

import { HoverLift, Stagger, StaggerItem } from "@/components/motion";
import { DrinkImage } from "@/components/sections/drinks-shop/DrinkImage";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { cn } from "@/lib/utils";
import type {
  DrinksShopDemoData,
  DrinkTagTone,
} from "@/data/demo/drinks-shop.types";

const tagToneClass: Record<DrinkTagTone, string> = {
  signature: "bg-[var(--ds-cream)] text-[var(--ds-coffee)]",
  new: "bg-[var(--ds-caramel-soft)] text-[var(--ds-caramel)]",
  hot: "bg-[var(--ds-clay-soft)] text-[var(--ds-clay)]",
  ice: "bg-[#E4EFEC] text-[#3F7A6E]",
  light: "bg-[var(--ds-green-soft)] text-[var(--ds-green)]",
};

type TodayPicksSectionProps = {
  featured: DrinksShopDemoData["featured"];
};

export function TodayPicksSection({ featured }: TodayPicksSectionProps) {
  return (
    <SectionShell id="featured">
      <DrinksSectionHeading
        eyebrow={featured.eyebrow}
        title={featured.title}
        description={featured.description}
      />

      <Stagger className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
        {featured.items.map((drink) => (
          <StaggerItem key={drink.name} className="h-full">
            <HoverLift className="h-full" lift={-6}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] shadow-[0_10px_30px_var(--ds-shadow)]">
                <DrinkImage
                  src={drink.image}
                  alt={drink.name}
                  className="aspect-[4/3] w-full"
                  imgClassName="transition duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-bold leading-snug text-[var(--ds-ink)] sm:text-base">
                      {drink.name}
                    </h3>
                    <span className="shrink-0 text-base font-bold text-[var(--ds-caramel)]">
                      {drink.price}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {drink.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          tagToneClass[tag.tone],
                        )}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-[var(--ds-ink-soft)]">
                    {drink.desc}
                  </p>
                  <a
                    href="#order"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--ds-coffee)] transition-colors hover:text-[var(--ds-coffee-deep)]"
                  >
                    去点这杯
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </article>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
