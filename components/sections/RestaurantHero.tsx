import Image from "next/image";
import { ArrowDown, CalendarCheck, ChevronRight } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { RestaurantDemoData } from "@/data/demo/types";

type RestaurantHeroProps = {
  brand: RestaurantDemoData["brand"];
  hero: RestaurantDemoData["hero"];
};

export function RestaurantHero({ brand, hero }: RestaurantHeroProps) {
  return (
    <section id="top" className="relative min-h-[86svh] overflow-hidden">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,7,5,0.92),rgba(9,7,5,0.58)_45%,rgba(9,7,5,0.18)),linear-gradient(180deg,rgba(9,7,5,0.1),rgba(9,7,5,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--restaurant-bg)] to-transparent" />

      <div className="container relative z-10 grid min-h-[86svh] items-end gap-10 pb-14 pt-24 lg:grid-cols-[1.08fr_0.72fr] lg:pb-20">
        <div className="max-w-4xl">
          <Reveal delay={0.05} y={18}>
            <Badge className="mb-6">{hero.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={0.14} y={24}>
            <p className="mb-4 text-sm tracking-[0.34em] text-[var(--restaurant-gold-soft)]">
              {brand.city} / {brand.tagline}
            </p>
            <h1 className="font-display text-4xl leading-[1.08] text-balance text-[var(--restaurant-cream)] sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.24} y={24}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--restaurant-muted)] sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.34} y={18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={hero.primaryCta.href}>
                  <CalendarCheck />
                  {hero.primaryCta.label}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                  <ChevronRight />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.42} className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-lg border border-[var(--restaurant-line)] bg-black/35 p-6 backdrop-blur-md">
            <p className="font-display text-2xl text-[var(--restaurant-gold-soft)]">
              {hero.signature}
            </p>
            <Stagger className="mt-6 grid gap-4">
              {hero.stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="flex items-end justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-[var(--restaurant-muted)]">
                    {stat.label}
                  </span>
                  <span className="font-display text-3xl text-[var(--restaurant-cream)]">
                    {stat.value}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Reveal
          delay={0.5}
          className="col-span-full flex flex-wrap items-center gap-3 border-t border-white/10 pt-6"
        >
          {hero.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[var(--restaurant-muted)]"
            >
              {item}
            </span>
          ))}
          <a
            href="#story"
            className="ml-auto hidden items-center gap-2 text-sm text-[var(--restaurant-gold-soft)] md:flex"
          >
            继续浏览
            <ArrowDown className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
