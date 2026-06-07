import type { ThemePreset } from "@/themes/types";

/**
 * 咖啡 / 奶茶门店主题：温润东方茶饮质感。
 * 路线参考当前大陆头部（霸王茶姬釉白+青瓷绿、喜茶抹茶绿、Manner 原木米白）：
 * 低饱和、米白釉底 + 醇咖褐 + 雾青瓷绿 + 焦糖点睛，清爽、真实、有食欲、适合传播。
 * 与餐饮黑金主题完全隔离，变量统一 `--ds-` 前缀，仅作用于本 demo 的 <main>。
 */
export const drinksShopTheme = {
  name: "drinks-shop-oriental-tea",
  cssVars: {
    // 背景与表面
    "--ds-bg": "#FAF7F1", // 暖釉白主背景
    "--ds-bg-soft": "#F3EDE2", // 略深米色，区块交替
    "--ds-surface": "#FFFFFF", // 卡片白
    // 文字与描边
    "--ds-ink": "#2E2117", // 主文字 / 品牌深色（深烘焙咖啡褐）
    "--ds-ink-soft": "#7A6856", // 次要文字（暖灰咖）
    "--ds-line": "#E8DFD0", // 描边（浅米咖）
    // 品牌
    "--ds-coffee": "#5B3A29", // 咖啡褐（品牌色）
    "--ds-coffee-deep": "#2E2117", // 深咖（主 CTA 实色）
    "--ds-cream": "#F1E7D5", // 奶油（标签底 / 点缀）
    // 茶系点缀（雾青瓷绿）
    "--ds-green": "#5E7250", // 茶绿（文字可读）
    "--ds-green-soft": "#EAF0E4", // 浅绿底
    // 食欲点睛
    "--ds-caramel": "#B5713C", // 焦糖（价格）
    "--ds-caramel-soft": "#F4E7D6",
    "--ds-clay": "#AE4F3C", // 赤陶（热卖，低饱和）
    "--ds-clay-soft": "#F3E1DB",
    "--ds-shadow": "rgba(46, 33, 23, 0.10)",
    "--ds-shadow-strong": "rgba(46, 33, 23, 0.16)",
  },
  sectionClassName:
    "min-h-screen bg-[var(--ds-bg)] font-sans text-[var(--ds-ink)] antialiased selection:bg-[var(--ds-cream)] selection:text-[var(--ds-coffee-deep)]",
} satisfies ThemePreset;
