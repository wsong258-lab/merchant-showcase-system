import { Quote } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { Card } from "@/components/ui/card";
import type { RestaurantDemoData } from "@/data/demo/types";

type TestimonialsSectionProps = {
  testimonials: RestaurantDemoData["testimonials"];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <SectionShell id="testimonials">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        align="center"
      />

      <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <StaggerItem key={item.name}>
            <Card className="h-full p-6">
              <Quote className="size-8 text-[var(--restaurant-gold-soft)]" />
              <p className="mt-6 text-base leading-8 text-[var(--restaurant-cream)]">
                {item.quote}
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium text-[var(--restaurant-cream)]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[var(--restaurant-muted)]">
                  {item.role}
                </p>
                <p className="mt-3 text-xs tracking-[0.18em] text-[var(--restaurant-gold-soft)]">
                  {item.visit}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
