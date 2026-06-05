import type { Metadata } from "next";

import { RestaurantDemoPage } from "@/components/sections";
import { restaurantDemo } from "@/data/demo/restaurant";
import { restaurantTheme } from "@/themes";

export const metadata: Metadata = {
  title: `${restaurantDemo.brand.name} | 高端餐饮门店 Demo`,
  description: restaurantDemo.hero.subtitle,
};

export default function RestaurantPage() {
  return <RestaurantDemoPage data={restaurantDemo} theme={restaurantTheme} />;
}
