import Image from "next/image";

import { HoverLift, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type { RestaurantDemoData } from "@/data/demo/types";
import { cn } from "@/lib/utils";

type GalleryWallSectionProps = {
  gallery: RestaurantDemoData["gallery"];
};

export function GalleryWallSection({ gallery }: GalleryWallSectionProps) {
  return (
    <SectionShell id="gallery" className="bg-[var(--restaurant-panel)]/70">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
      />

      <Stagger className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-3 lg:auto-rows-[320px]">
        {gallery.images.map((image) => (
          <StaggerItem
            key={image.src}
            className={cn(
              image.span === "wide" && "md:col-span-2",
              image.span === "tall" && "md:row-span-2",
            )}
          >
            <HoverLift className="h-full">
              <figure className="group relative h-full overflow-hidden rounded-lg border border-[var(--restaurant-line)] bg-black">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm text-[var(--restaurant-cream)]">
                  {image.caption}
                </figcaption>
              </figure>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
