"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { revealTransition, viewportOnce } from "@/components/motion/variants";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...revealTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
