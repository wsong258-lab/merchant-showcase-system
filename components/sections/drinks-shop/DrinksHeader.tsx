import { OpenStatus } from "@/components/sections/drinks-shop/OpenStatus";
import { DrinksButton } from "@/components/sections/drinks-shop/DrinksButton";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

type DrinksHeaderProps = {
  brand: DrinksShopDemoData["brand"];
  nav: DrinksShopDemoData["nav"];
  status: DrinksShopDemoData["status"];
};

export function DrinksHeader({ brand, nav, status }: DrinksHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ds-line)] bg-[rgba(250,247,241,0.86)] backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label={brand.name}>
          <span className="grid size-9 place-items-center rounded-full bg-[var(--ds-coffee)] text-base font-bold text-[var(--ds-cream)]">
            {brand.logoMark}
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[15px] font-bold text-[var(--ds-ink)]">
              {brand.shortName}
            </span>
            <span className="hidden text-[11px] text-[var(--ds-ink-soft)] sm:block">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="主导航">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--ds-ink-soft)] transition-colors hover:text-[var(--ds-coffee)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <OpenStatus
            openTime={status.openTime}
            closeTime={status.closeTime}
            fallbackText={status.fallbackText}
            className="hidden lg:inline-flex"
          />
          <DrinksButton href="#order" size="sm" variant="primary">
            立即点单
          </DrinksButton>
        </div>
      </div>
    </header>
  );
}
