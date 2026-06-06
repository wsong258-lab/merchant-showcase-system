import type { CSSProperties } from "react";

import { AboutSection } from "@/components/sections/drinks-shop/AboutSection";
import { DrinksBottomBar } from "@/components/sections/drinks-shop/DrinksBottomBar";
import { DrinksHeader } from "@/components/sections/drinks-shop/DrinksHeader";
import { DrinksHero } from "@/components/sections/drinks-shop/DrinksHero";
import { EnvironmentSection } from "@/components/sections/drinks-shop/EnvironmentSection";
import { MenuSection } from "@/components/sections/drinks-shop/MenuSection";
import { OrderFormSection } from "@/components/sections/drinks-shop/OrderFormSection";
import { PromotionsSection } from "@/components/sections/drinks-shop/PromotionsSection";
import { TodayPicksSection } from "@/components/sections/drinks-shop/TodayPicksSection";
import { VisitSection } from "@/components/sections/drinks-shop/VisitSection";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";
import type { ThemePreset } from "@/themes/types";

type DrinksShopPageProps = {
  data: DrinksShopDemoData;
  theme: ThemePreset;
};

/**
 * 咖啡 / 奶茶门店扫码展示页的整体组装。
 * 区块顺序按信息优先级：今日推荐 → 菜单 → 点单 → 优惠 → 门店信息 → 环境 → 品牌介绍。
 */
export function DrinksShopPage({ data, theme }: DrinksShopPageProps) {
  return (
    <main
      style={theme.cssVars as CSSProperties}
      className={theme.sectionClassName}
    >
      <DrinksHeader brand={data.brand} nav={data.nav} status={data.status} />
      <DrinksHero brand={data.brand} hero={data.hero} status={data.status} />
      <TodayPicksSection featured={data.featured} />
      <MenuSection menu={data.menu} />
      <OrderFormSection order={data.order} />
      <PromotionsSection promotions={data.promotions} />
      <VisitSection visit={data.visit} />
      <EnvironmentSection environment={data.environment} />
      <AboutSection about={data.about} />

      <footer className="border-t border-[var(--ds-line)] pb-28 pt-8 md:pb-10">
        <div className="container flex flex-col gap-2 text-sm text-[var(--ds-ink-soft)] sm:flex-row sm:items-start sm:justify-between">
          <span className="font-medium text-[var(--ds-ink)]">
            {data.brand.name} · {data.brand.tagline}
          </span>
          <span className="max-w-md text-xs leading-5">{data.footerNote}</span>
        </div>
      </footer>

      <DrinksBottomBar visit={data.visit} />
    </main>
  );
}
