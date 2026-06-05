export type IconName =
  | "calendar"
  | "chef"
  | "clock"
  | "diamond"
  | "map"
  | "phone"
  | "sparkles"
  | "users"
  | "wechat"
  | "wine";

export type MediaAsset = {
  src: string;
  alt: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type RestaurantDemoData = {
  industry: "restaurant";
  brand: {
    name: string;
    shortName: string;
    logoMark: string;
    tagline: string;
    city: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: MediaAsset;
    signature: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    highlights: string[];
  };
  story: {
    eyebrow: string;
    title: string;
    body: string[];
    image: MediaAsset;
    proofs: Array<{
      value: string;
      label: string;
    }>;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: IconName;
    }>;
  };
  menu: {
    eyebrow: string;
    title: string;
    description: string;
    packages: Array<{
      name: string;
      label: string;
      price: string;
      description: string;
      image: MediaAsset;
      features: string[];
    }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    images: Array<MediaAsset & { caption: string; span?: "wide" | "tall" }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      visit: string;
    }>;
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
    wechatHref: string;
    navigationUrl: string;
    image: MediaAsset;
  };
  reservation: {
    eyebrow: string;
    title: string;
    description: string;
    fields: Array<{
      label: string;
      placeholder: string;
      type?: "text" | "tel" | "date" | "time";
    }>;
    notePlaceholder: string;
    cta: CtaLink;
    secondaryNote: string;
  };
};
