import { CalendarCheck, Phone } from "lucide-react";

import type { RestaurantDemoData } from "@/data/demo/types";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  brand: RestaurantDemoData["brand"];
  nav: RestaurantDemoData["nav"];
  phoneHref: string;
};

export function SiteHeader({ brand, nav, phoneHref }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090705]/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={brand.name}>
          <span className="grid size-11 place-items-center rounded-full border border-[var(--restaurant-line)] bg-[rgba(214,168,97,0.11)] font-display text-xl text-[var(--restaurant-gold-soft)]">
            {brand.logoMark}
          </span>
          <span className="min-w-0">
            <span className="block font-display text-lg leading-none text-[var(--restaurant-cream)]">
              {brand.shortName}
            </span>
            <span className="mt-1 block text-xs tracking-[0.2em] text-[var(--restaurant-muted)]">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--restaurant-muted)] transition-colors hover:text-[var(--restaurant-gold-soft)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={phoneHref}>
              <Phone />
              电话咨询
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#reservation">
              <CalendarCheck />
              预约
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
