import { CalendarCheck, Phone } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { RestaurantDemoData } from "@/data/demo/types";

type ReservationCtaSectionProps = {
  reservation: RestaurantDemoData["reservation"];
  phoneHref: string;
};

export function ReservationCtaSection({
  reservation,
  phoneHref,
}: ReservationCtaSectionProps) {
  return (
    <SectionShell id="reservation">
      <div className="grid gap-10 rounded-lg border border-[var(--restaurant-line)] bg-[linear-gradient(135deg,rgba(28,19,13,0.96),rgba(9,7,5,0.96))] p-5 shadow-deep-panel sm:p-8 lg:grid-cols-[0.78fr_1fr] lg:p-12">
        <div>
          <SectionHeading
            eyebrow={reservation.eyebrow}
            title={reservation.title}
            description={reservation.description}
          />
          <Reveal className="mt-8 rounded-lg border border-white/10 bg-black/20 p-5">
            <p className="font-display text-2xl text-[var(--restaurant-gold-soft)]">
              预约后由席位管家确认
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--restaurant-muted)]">
              {reservation.secondaryNote}
            </p>
            <Button variant="outline" className="mt-5" asChild>
              <a href={phoneHref}>
                <Phone />
                直接电话确认
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <form className="grid gap-4" aria-label="预约意向表单">
            <div className="grid gap-4 sm:grid-cols-2">
              {reservation.fields.map((field) => (
                <label key={field.label} className="grid gap-2 text-sm">
                  <span className="text-[var(--restaurant-muted)]">
                    {field.label}
                  </span>
                  <Input
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                  />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm">
              <span className="text-[var(--restaurant-muted)]">需求备注</span>
              <Textarea placeholder={reservation.notePlaceholder} />
            </label>
            <Button type="button" size="lg" className="mt-2 w-full" asChild>
              <a href={reservation.cta.href}>
                <CalendarCheck />
                {reservation.cta.label}
              </a>
            </Button>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
