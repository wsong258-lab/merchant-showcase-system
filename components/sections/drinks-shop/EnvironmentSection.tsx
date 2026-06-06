import { HoverLift, Stagger, StaggerItem } from "@/components/motion";
import { DrinkImage } from "@/components/sections/drinks-shop/DrinkImage";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

type EnvironmentSectionProps = {
  environment: DrinksShopDemoData["environment"];
};

export function EnvironmentSection({ environment }: EnvironmentSectionProps) {
  return (
    <SectionShell id="env" className="bg-[var(--ds-bg-soft)]">
      <DrinksSectionHeading
        eyebrow={environment.eyebrow}
        title={environment.title}
        description={environment.description}
      />

      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {environment.shots.map((shot) => (
          <StaggerItem key={shot.title} className="h-full">
            <HoverLift className="h-full" lift={-6}>
              <figure className="group h-full overflow-hidden rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] shadow-[0_10px_24px_var(--ds-shadow)]">
                <DrinkImage
                  src={shot.image}
                  alt={shot.title}
                  className="aspect-[4/3] w-full"
                  imgClassName="transition duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 24vw, 50vw"
                />
                <figcaption className="p-4">
                  <h3 className="font-bold text-[var(--ds-ink)]">{shot.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--ds-ink-soft)]">
                    {shot.caption}
                  </p>
                </figcaption>
              </figure>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
