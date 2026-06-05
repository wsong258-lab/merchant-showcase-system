export const viewportOnce = {
  once: true,
  margin: "0px 0px -120px 0px",
} as const;

export const revealTransition = {
  duration: 0.72,
  ease: "easeOut",
} as const;

export const heroTextTransition = {
  duration: 0.9,
  ease: "easeOut",
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
} as const;
