import type { CSSProperties } from "react";

import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { GalleryWallSection } from "@/components/sections/GalleryWallSection";
import { MenuShowcaseSection } from "@/components/sections/MenuShowcaseSection";
import { MobileContactBar } from "@/components/sections/MobileContactBar";
import { ReservationCtaSection } from "@/components/sections/ReservationCtaSection";
import { RestaurantHero } from "@/components/sections/RestaurantHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VisitAndContactSection } from "@/components/sections/VisitAndContactSection";
import type { RestaurantDemoData } from "@/data/demo/types";
import type { ThemePreset } from "@/themes/types";

type RestaurantDemoPageProps = {
  data: RestaurantDemoData;
  theme: ThemePreset;
};

export function RestaurantDemoPage({ data, theme }: RestaurantDemoPageProps) {
  return (
    <main
      style={theme.cssVars as CSSProperties}
      className={theme.sectionClassName}
    >
      <SiteHeader
        brand={data.brand}
        nav={data.nav}
        phoneHref={data.visit.phoneHref}
      />
      <RestaurantHero brand={data.brand} hero={data.hero} />
      <BrandStorySection story={data.story} />
      <ServicesSection services={data.services} />
      <MenuShowcaseSection menu={data.menu} />
      <GalleryWallSection gallery={data.gallery} />
      <TestimonialsSection testimonials={data.testimonials} />
      <VisitAndContactSection visit={data.visit} />
      <ReservationCtaSection
        reservation={data.reservation}
        phoneHref={data.visit.phoneHref}
      />
      <MobileContactBar visit={data.visit} />
      <footer className="pb-28 pt-6 md:pb-10">
        <div className="container flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-[var(--restaurant-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            {data.brand.name} · {data.brand.tagline}
          </span>
          <span>Demo template for mainland China local merchants.</span>
        </div>
      </footer>
    </main>
  );
}
