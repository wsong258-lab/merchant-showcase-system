import { ParallaxImage, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type { RestaurantDemoData } from "@/data/demo/types";

type BrandStorySectionProps = {
  story: RestaurantDemoData["story"];
};

export function BrandStorySection({ story }: BrandStorySectionProps) {
  return (
    <SectionShell id="story">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <ParallaxImage
            image={story.image}
            className="aspect-[4/5] border border-[var(--restaurant-line)] shadow-deep-panel"
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--restaurant-muted)] sm:text-lg">
            {story.body.map((paragraph) => (
              <Reveal key={paragraph} y={18}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {story.proofs.map((proof) => (
              <StaggerItem
                key={proof.label}
                className="border-l border-[var(--restaurant-line)] pl-5"
              >
                <p className="font-display text-3xl text-[var(--restaurant-gold-soft)]">
                  {proof.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--restaurant-muted)]">
                  {proof.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </SectionShell>
  );
}
