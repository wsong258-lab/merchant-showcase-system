"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

type OpenStatusProps = {
  openTime: string;
  closeTime: string;
  fallbackText: string;
  className?: string;
};

/**
 * 营业状态徽章。SSR / 水合前显示 fallbackText（避免 hydration 不一致），
 * 客户端挂载后按当前时间计算「营业中 / 已打烊」，绿点表示营业中。
 */
export function OpenStatus({
  openTime,
  closeTime,
  fallbackText,
  className,
}: OpenStatusProps) {
  const [nowMinutes, setNowMinutes] = React.useState<number | null>(null);

  React.useEffect(() => {
    const now = new Date();
    setNowMinutes(now.getHours() * 60 + now.getMinutes());
  }, []);

  const open = toMinutes(openTime);
  const close = toMinutes(closeTime);
  const isOpen = nowMinutes !== null && nowMinutes >= open && nowMinutes < close;

  const text =
    nowMinutes === null
      ? fallbackText
      : isOpen
        ? `营业中 · ${closeTime} 打烊`
        : `已打烊 · ${openTime} 开门`;

  const dotColor =
    nowMinutes === null
      ? "bg-[var(--ds-ink-soft)]"
      : isOpen
        ? "bg-[var(--ds-green)]"
        : "bg-[var(--ds-caramel)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--ds-line)] bg-[var(--ds-surface)] px-3 py-1.5 text-sm font-medium text-[var(--ds-ink)] shadow-[0_6px_16px_var(--ds-shadow)]",
        className,
      )}
    >
      <span className="relative flex size-2.5">
        {isOpen ? (
          <span
            className={cn(
              "absolute inline-flex size-full animate-ping rounded-full opacity-60",
              dotColor,
            )}
          />
        ) : null}
        <span className={cn("relative inline-flex size-2.5 rounded-full", dotColor)} />
      </span>
      {text}
    </span>
  );
}
