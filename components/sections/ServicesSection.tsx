import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  ChefHat,
  Clock,
  Diamond,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  UsersRound,
  Wine,
} from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IconName, RestaurantDemoData } from "@/data/demo/types";

const iconMap: Record<IconName, LucideIcon> = {
  calendar: CalendarCheck,
  chef: ChefHat,
  clock: Clock,
  diamond: Diamond,
  map: MapPin,
  phone: Phone,
  sparkles: Sparkles,
  users: UsersRound,
  wechat: MessageCircle,
  wine: Wine,
};

type ServicesSectionProps = {
  services: RestaurantDemoData["services"];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionShell id="services" className="bg-[var(--restaurant-panel)]/70">
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
        align="center"
      />

      <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.items.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <StaggerItem key={item.title}>
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <span className="mb-4 grid size-11 place-items-center rounded-full border border-[var(--restaurant-line)] bg-[rgba(214,168,97,0.1)] text-[var(--restaurant-gold-soft)]">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--restaurant-muted)]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
