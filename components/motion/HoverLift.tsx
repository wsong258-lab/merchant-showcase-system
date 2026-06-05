"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
  lift?: number;
};

export function HoverLift({
  children,
  className,
  lift = -8,
}: HoverLiftProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: lift }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
