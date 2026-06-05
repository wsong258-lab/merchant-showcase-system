import type { ThemePreset } from "@/themes/types";

export const restaurantTheme = {
  name: "restaurant-black-gold",
  cssVars: {
    "--restaurant-bg": "#090705",
    "--restaurant-panel": "#120d09",
    "--restaurant-panel-soft": "#1c130d",
    "--restaurant-line": "rgba(210, 162, 91, 0.22)",
    "--restaurant-gold": "#d6a861",
    "--restaurant-gold-soft": "#f1d79a",
    "--restaurant-brown": "#7b5232",
    "--restaurant-cream": "#f8edd8",
    "--restaurant-muted": "#b7a58c",
    "--restaurant-sage": "#7f8d6d",
  },
  sectionClassName:
    "bg-[var(--restaurant-bg)] text-[var(--restaurant-cream)] cinematic-grain",
} satisfies ThemePreset;
