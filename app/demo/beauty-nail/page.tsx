import type { Metadata } from "next";

import { BeautyNailDemoPage } from "@/components/sections";
import { beautyNailDemo } from "@/data/demo/beauty-nail";
import { beautyNailTheme } from "@/themes";

export const metadata: Metadata = {
  title: `${beautyNailDemo.brand.name} | 美甲美睫预约工作室`,
  description: beautyNailDemo.hero.subtitle,
};

export default function BeautyNailPage() {
  return <BeautyNailDemoPage data={beautyNailDemo} theme={beautyNailTheme} />;
}
