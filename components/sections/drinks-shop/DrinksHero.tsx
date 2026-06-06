import { ArrowRight, ChevronRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/motion";
import { DrinkImage } from "@/components/sections/drinks-shop/DrinkImage";
import { DrinksButton } from "@/components/sections/drinks-shop/DrinksButton";
import { OpenStatus } from "@/components/sections/drinks-shop/OpenStatus";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

type DrinksHeroProps = {
  brand: DrinksShopDemoData["brand"];
  hero: DrinksShopDemoData["hero"];
  status: DrinksShopDemoData["status"];
};

export function DrinksHero({ brand, hero, status }: DrinksHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
        {/* 文字区：移动端在图下方，桌面在左 */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <OpenStatus
              openTime={status.openTime}
              closeTime={status.closeTime}
              fallbackText={status.fallbackText}
              className="mb-5"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-sm font-semibold tracking-wide text-[var(--ds-coffee)]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.15] text-balance text-[var(--ds-ink)] sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-base font-semibold text-[var(--ds-coffee)]">
              {brand.tagline}
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--ds-ink-soft)]">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--ds-line)] bg-[var(--ds-surface)] px-4 py-2 text-sm text-[var(--ds-ink)]">
              <MapPin className="size-4 shrink-0 text-[var(--ds-caramel)]" />
              {hero.addressShort}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <DrinksButton href={hero.primaryCta.href} size="lg" variant="primary">
                {hero.primaryCta.label}
                <ArrowRight />
              </DrinksButton>
              <DrinksButton
                href={hero.secondaryCta.href}
                size="lg"
                variant="outline"
              >
                {hero.secondaryCta.label}
                <ChevronRight />
              </DrinksButton>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {hero.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-[var(--ds-ink-soft)]"
                >
                  <span className="size-1.5 rounded-full bg-[var(--ds-green)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* 真实主图：移动端在上方，桌面在右 */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative">
            <DrinkImage
              src={hero.image}
              alt={`${brand.name} 门店环境`}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/3] w-full rounded-2xl shadow-[0_24px_60px_var(--ds-shadow-strong)] sm:aspect-[16/10] lg:aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-[rgba(255,255,255,0.92)] px-4 py-2.5 shadow-[0_10px_24px_var(--ds-shadow)] backdrop-blur">
              <p className="text-sm font-semibold text-[var(--ds-ink)]">
                今日现做 · 到店自取
              </p>
              <p className="text-xs text-[var(--ds-ink-soft)]">
                {status.weeklyText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
