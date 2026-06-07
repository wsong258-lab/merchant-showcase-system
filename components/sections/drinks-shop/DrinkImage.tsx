import Image from "next/image";

import { cn } from "@/lib/utils";

type DrinkImageProps = {
  src: string;
  alt: string;
  /** 容器类（一般传 aspect / rounded / 尺寸） */
  className?: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
};

/**
 * 统一的真实图片封装：next/image 填充 + object-cover + 加载占位底色。
 * 本地 public 图片，无需远程域名配置；移动端加载快。
 */
export function DrinkImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  imgClassName,
}: DrinkImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--ds-bg-soft)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
