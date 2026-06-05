"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/components/motion/variants";

type MotionDivProps = {
  children: React.ReactNode;
  className?: string;
};

export function Stagger({ className, children }: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children }: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
