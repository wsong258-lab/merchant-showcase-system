import type { CSSProperties } from "react";

type CssVariableProperties = Record<`--${string}`, string | number>;

export type ThemePreset = {
  name: string;
  cssVars: CSSProperties & CssVariableProperties;
  sectionClassName: string;
};
