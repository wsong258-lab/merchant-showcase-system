import type { ReactNode } from "react";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Truck } from "lucide-react";

import { Reveal } from "@/components/motion";
import { DrinkImage } from "@/components/sections/drinks-shop/DrinkImage";
import { DrinksButton } from "@/components/sections/drinks-shop/DrinksButton";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

type VisitSectionProps = {
  visit: DrinksShopDemoData["visit"];
};

export function VisitSection({ visit }: VisitSectionProps) {
  return (
    <SectionShell id="visit">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <DrinksSectionHeading
            eyebrow={visit.eyebrow}
            title={visit.title}
            description={visit.description}
          />

          <Reveal className="mt-8 grid gap-3">
            <InfoRow icon={<MapPin />} label="地址" value={visit.address} />
            <InfoRow
              icon={<Clock />}
              label="营业时间"
              value={visit.hours.join(" · ")}
            />
            <InfoRow icon={<Phone />} label="电话" value={visit.phone} />
            <InfoRow
              icon={<MessageCircle />}
              label="微信"
              value={`${visit.wechat} · ${visit.wechatNote}`}
            />
          </Reveal>

          <Reveal className="mt-7 flex flex-wrap gap-3">
            <DrinksButton href={visit.phoneHref} variant="primary">
              <Phone />
              拨打电话
            </DrinksButton>
            <DrinksButton href="#order" variant="cream">
              <MessageCircle />
              微信点单咨询
            </DrinksButton>
            <DrinksButton href={visit.navigationUrl} external variant="outline">
              <Navigation />
              高德导航
            </DrinksButton>
          </Reveal>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] shadow-[0_16px_36px_var(--ds-shadow)]">
            <DrinkImage
              src={visit.image}
              alt="门店外观"
              className="aspect-[16/10] w-full"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="p-5">
              <p className="font-bold text-[var(--ds-ink)]">{visit.address}</p>
              <p className="mt-1 text-sm text-[var(--ds-ink-soft)]">
                {visit.hours.join(" · ")}
              </p>

              <div className="mt-4 border-t border-[var(--ds-line)] pt-4">
                <p className="flex items-center gap-1.5 text-sm font-medium text-[var(--ds-ink)]">
                  <Truck className="size-4 text-[var(--ds-caramel)]" />
                  也可以点外卖
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {visit.delivery.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex flex-col rounded-xl border border-[var(--ds-line)] bg-[var(--ds-bg-soft)] px-3 py-2"
                    >
                      <span className="text-sm font-medium text-[var(--ds-coffee-deep)]">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-[var(--ds-ink-soft)]">
                        {item.note}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
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
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] items-start gap-3 rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] p-3.5">
      <span className="grid size-11 place-items-center rounded-xl bg-[var(--ds-caramel-soft)] text-[var(--ds-caramel)] [&_svg]:size-5">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-[var(--ds-ink-soft)]">{label}</span>
        <span className="mt-0.5 block text-[15px] font-medium leading-6 text-[var(--ds-ink)]">
          {value}
        </span>
      </span>
    </div>
  );
}
