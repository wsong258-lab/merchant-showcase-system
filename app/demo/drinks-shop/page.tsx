import type { Metadata } from "next";

import { DrinksShopPage } from "@/components/sections/drinks-shop";
import { drinksShopDemo } from "@/data/demo/drinks-shop";
import { drinksShopTheme } from "@/themes/presets/drinks-shop";

export const metadata: Metadata = {
  title: `${drinksShopDemo.brand.name} | 咖啡奶茶门店 Demo`,
  description: drinksShopDemo.hero.subtitle,
};

export default function DrinksShopDemoPage() {
  return <DrinksShopPage data={drinksShopDemo} theme={drinksShopTheme} />;
}
