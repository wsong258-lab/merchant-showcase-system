import type { LucideIcon } from "lucide-react";
import { Coffee, Gift, Percent, Users } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type {
  DrinksShopDemoData,
  PromotionIcon,
} from "@/data/demo/drinks-shop.types";

const iconMap: Record<PromotionIcon, LucideIcon> = {
  gift: Gift,
  percent: Percent,
  coffee: Coffee,
  users: Users,
};

type PromotionsSectionProps = {
  promotions: DrinksShopDemoData["promotions"];
};

export function PromotionsSection({ promotions }: PromotionsSectionProps) {
  return (
    <SectionShell id="promo" className="bg-[var(--ds-bg-soft)]">
      <DrinksSectionHeading
        eyebrow={promotions.eyebrow}
        title={promotions.title}
        description={promotions.description}
      />

      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {promotions.items.map((promo) => {
          const Icon = iconMap[promo.icon];
          return (
            <StaggerItem key={promo.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] p-5 shadow-[0_8px_22px_var(--ds-shadow)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--ds-cream)] text-[var(--ds-coffee)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full bg-[var(--ds-caramel-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--ds-caramel)]">
                    {promo.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-[var(--ds-ink)]">
                  {promo.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-6 text-[var(--ds-ink-soft)]">
                  {promo.desc}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
