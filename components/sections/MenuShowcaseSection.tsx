import Image from "next/image";
import { Check } from "lucide-react";

import { HoverLift, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { RestaurantDemoData } from "@/data/demo/types";

type MenuShowcaseSectionProps = {
  menu: RestaurantDemoData["menu"];
};

export function MenuShowcaseSection({ menu }: MenuShowcaseSectionProps) {
  return (
    <SectionShell id="menu">
      <div className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:gap-16">
        <SectionHeading
          eyebrow={menu.eyebrow}
          title={menu.title}
          description={menu.description}
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <Stagger className="grid gap-5">
          {menu.packages.map((item) => (
            <StaggerItem key={item.name}>
              <HoverLift>
                <Card className="grid overflow-hidden md:grid-cols-[0.42fr_0.58fr]">
                  <div className="relative min-h-64 md:min-h-full">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 768px) 34vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge>{item.label}</Badge>
                      <span className="font-display text-2xl text-[var(--restaurant-gold-soft)]">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-[var(--restaurant-cream)]">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--restaurant-muted)]">
                      {item.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[var(--restaurant-muted)]"
                        >
                          <Check className="size-4 text-[var(--restaurant-gold-soft)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionShell>
  );
}
