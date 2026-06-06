import type { LucideIcon } from "lucide-react";
import { Clock, Coffee, Heart, Leaf } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type {
  AboutFeatureIcon,
  DrinksShopDemoData,
} from "@/data/demo/drinks-shop.types";

const iconMap: Record<AboutFeatureIcon, LucideIcon> = {
  leaf: Leaf,
  cup: Coffee,
  clock: Clock,
  heart: Heart,
};

type AboutSectionProps = {
  about: DrinksShopDemoData["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <Reveal>
          <DrinksSectionHeading eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-4 text-[15px] leading-7 text-[var(--ds-ink-soft)] sm:text-base">
            {about.body}
          </p>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {about.features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--ds-green-soft)] text-[var(--ds-green)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-[var(--ds-ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--ds-ink-soft)]">
                    {feature.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </SectionShell>
  );
}
