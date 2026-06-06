import type { ReactNode } from "react";
import { Coffee, MapPin, MessageCircle, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

type DrinksBottomBarProps = {
  visit: DrinksShopDemoData["visit"];
};

/** 移动端底部固定操作栏：菜单 / 点单 / 微信 / 导航。仅小屏显示。 */
export function DrinksBottomBar({ visit }: DrinksBottomBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--ds-line)] bg-[rgba(255,255,255,0.94)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-4">
        <BarLink href="#menu" icon={<Coffee />} label="菜单" />
        <BarLink href="#order" icon={<ShoppingBag />} label="点单" highlight />
        <BarLink href="#visit" icon={<MessageCircle />} label="微信" />
        <BarLink href={visit.navigationUrl} icon={<MapPin />} label="导航" external />
      </div>
    </div>
  );
}

function BarLink({
  href,
  icon,
  label,
  highlight,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  highlight?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "flex flex-col items-center justify-center gap-1 py-2.5 text-xs [&_svg]:size-5",
        highlight
          ? "font-semibold text-[var(--ds-caramel)]"
          : "text-[var(--ds-ink-soft)]",
      )}
    >
      {icon}
      {label}
    </a>
  );
}
