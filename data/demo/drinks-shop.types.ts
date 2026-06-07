/**
 * 咖啡 / 奶茶门店扫码展示 + 点单意向页的数据契约。
 * 与餐饮 demo 完全独立。所有门店内容都在数据层，组件只渲染，不写死具体门店信息。
 * 视觉用真实图片路径（public/demo/drinks-shop/*），不使用 emoji。
 */

export type DrinksNavItem = {
  label: string;
  href: string;
};

export type DrinkTagTone = "signature" | "new" | "hot" | "ice" | "light";

export type DrinkTag = {
  label: string;
  tone: DrinkTagTone;
};

export type FeaturedDrink = {
  name: string;
  price: string;
  desc: string;
  tags: DrinkTag[];
  image: string; // 真实图片路径
};

export type MenuItem = {
  name: string;
  price: string;
  desc: string;
  temps: string[]; // 冷热选项，例如 ["热", "冰"]
  recommend?: string; // 推荐甜度 / 冰量
  hot?: boolean; // 是否热卖
  soldOut?: boolean; // 是否售罄
  image?: string; // 可选缩略图（热门项配图）
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type PromotionIcon = "gift" | "percent" | "coffee" | "users";

export type Promotion = {
  title: string;
  desc: string;
  tag: string;
  icon: PromotionIcon;
};

export type EnvironmentShot = {
  title: string;
  caption: string;
  image: string;
};

export type AboutFeatureIcon = "leaf" | "cup" | "clock" | "heart";

export type AboutFeature = {
  title: string;
  desc: string;
  icon: AboutFeatureIcon;
};

export type DeliveryLink = {
  label: string;
  note: string; // 仅展示，不接真实平台
};

export type DrinksShopDemoData = {
  industry: "drinks-shop";
  brand: {
    name: string;
    shortName: string;
    logoMark: string;
    tagline: string; // 精品咖啡 · 奶茶特调 · 到店自取
    city: string;
  };
  nav: DrinksNavItem[];
  status: {
    openTime: string; // "10:00"
    closeTime: string; // "22:00"
    weeklyText: string;
    fallbackText: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressShort: string;
    primaryCta: DrinksNavItem;
    secondaryCta: DrinksNavItem;
    highlights: string[];
    image: string; // 主视觉真实图
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeaturedDrink[];
  };
  menu: {
    eyebrow: string;
    title: string;
    description: string;
    categories: MenuCategory[];
  };
  order: {
    eyebrow: string;
    title: string;
    description: string;
    drinkOptions: string[];
    quantityOptions: string[];
    sweetnessOptions: string[];
    iceOptions: string[];
    toppingOptions: string[];
    pickupTimeOptions: string[];
    notePlaceholder: string;
    submitLabel: string;
    successTitle: string;
    successNote: string;
    sideNote: string;
  };
  promotions: {
    eyebrow: string;
    title: string;
    description: string;
    items: Promotion[];
  };
  visit: {
    eyebrow: string;
    title: string;
    description: string;
    address: string;
    hours: string[];
    phone: string;
    phoneHref: string;
    wechat: string;
    wechatNote: string;
    navigationUrl: string;
    image: string; // 门店真实图
    delivery: DeliveryLink[];
  };
  environment: {
    eyebrow: string;
    title: string;
    description: string;
    shots: EnvironmentShot[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    features: AboutFeature[];
  };
  footerNote: string;
};
