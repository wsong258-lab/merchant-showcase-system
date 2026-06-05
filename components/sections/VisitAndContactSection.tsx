import Image from "next/image";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { Button } from "@/components/ui/button";
import type { RestaurantDemoData } from "@/data/demo/types";

type VisitAndContactSectionProps = {
  visit: RestaurantDemoData["visit"];
};

export function VisitAndContactSection({ visit }: VisitAndContactSectionProps) {
  return (
    <SectionShell id="visit" className="bg-[var(--restaurant-panel)]/70">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={visit.eyebrow}
            title={visit.title}
            description={visit.description}
          />

          <Reveal className="mt-10 grid gap-5">
            <InfoRow icon={<MapPin />} label="地址" value={visit.address} />
            <InfoRow
              icon={<Clock />}
              label="营业时间"
              value={visit.hours.join(" / ")}
            />
            <InfoRow icon={<Phone />} label="电话" value={visit.phone} />
            <InfoRow
              icon={<MessageCircle />}
              label="微信咨询"
              value={visit.wechat}
            />
          </Reveal>

          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={visit.phoneHref}>
                <Phone />
                拨打电话
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={visit.wechatHref}>
                <MessageCircle />
                微信咨询
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={visit.navigationUrl} target="_blank" rel="noreferrer">
                <Navigation />
                高德导航
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-[var(--restaurant-line)] shadow-deep-panel">
            <Image
              src={visit.image.src}
              alt={visit.image.alt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-display text-2xl text-[var(--restaurant-cream)]">
                {visit.address}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--restaurant-muted)]">
                建议提前预约。门店位于商圈核心位置，晚高峰可优先使用高德导航确认路线。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-white/10 pb-5">
      <span className="grid size-11 place-items-center rounded-full border border-[var(--restaurant-line)] text-[var(--restaurant-gold-soft)] [&_svg]:size-5">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-[var(--restaurant-muted)]">
          {label}
        </span>
        <span className="mt-1 block text-base leading-7 text-[var(--restaurant-cream)]">
          {value}
        </span>
      </span>
    </div>
  );
}
