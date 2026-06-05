import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { RestaurantDemoData } from "@/data/demo/types";

type MobileContactBarProps = {
  visit: RestaurantDemoData["visit"];
};

export function MobileContactBar({ visit }: MobileContactBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--restaurant-line)] bg-[#090705]/92 p-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={visit.phoneHref}>
            <Phone />
            电话
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={visit.wechatHref}>
            <MessageCircle />
            微信
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href="#reservation">
            <CalendarCheck />
            预约
          </a>
        </Button>
      </div>
    </div>
  );
}
