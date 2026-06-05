"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import type { MediaAsset } from "@/data/demo/types";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  image: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ParallaxImage({
  image,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 44vw, 100vw",
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-18, 18],
  );

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-lg", className)}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-5 -bottom-5">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </div>
  );
}
