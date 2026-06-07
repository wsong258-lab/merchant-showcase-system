import type { BeautyNailDemoData } from "@/data/demo/types";

const nailImages = {
  hero: "/demo/beauty-nail/hero.png",
  catEye: "/demo/beauty-nail/cat-eye.png",
  french: "/demo/beauty-nail/french.png",
  detail: "/demo/beauty-nail/detail.png",
  lash: "/demo/beauty-nail/lash.png",
  tools: "/demo/beauty-nail/tools.png",
  facial: "/demo/beauty-nail/facial.png",
  studio: "/demo/beauty-nail/studio.png",
};

export const beautyNailDemo = {
  industry: "beauty-nail",
  brand: {
    name: "栖屿 Nail & Lash",
    shortName: "栖屿",
    logoMark: "栖",
    positioning: "美甲 · 美睫 · 轻美容预约工作室",
    tagline: "把日常指尖和眼神细节，做得干净、耐看、适合本人",
    city: "杭州",
  },
  nav: [
    { label: "作品", href: "#works" },
    { label: "价格", href: "#services" },
    { label: "预约", href: "#reservation" },
    { label: "环境", href: "#hygiene" },
    { label: "地址", href: "#contact" },
  ],
  contact: {
    status: "今日 10:30-21:00 营业中",
    shortAddress: "滨江星光大道步行 6 分钟",
    address: "杭州市滨江区星光大道 178 号 2 幢 1206 室",
    hours: [
      "周一至周五 10:30 - 21:00",
      "周六至周日 10:00 - 21:30",
      "预约制，晚间档建议提前 1 天确认",
    ],
    phone: "0571-8899-2678",
    phoneHref: "tel:057188992678",
    wechat: "zhiyu-nail",
    wechatHref: "#reservation",
    navigationUrl:
      "https://uri.amap.com/search?keyword=%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%BB%A8%E6%B1%9F%E5%8C%BA%E6%98%9F%E5%85%89%E5%A4%A7%E9%81%93178%E5%8F%B7",
  },
  hero: {
    eyebrow: "近期可约 · 作品先看再决定",
    title: "美甲美睫预约工作室",
    subtitle:
      "适合想先看作品、价格和位置再预约的本地顾客。喜欢的款式可以截图发微信，门店会按甲型、长度、卸甲和技师档期再确认。",
    image: {
      src: nailImages.hero,
      alt: "顾客展示浅色系美甲作品的手部近景",
    },
    primaryCta: { label: "查看作品", href: "#works" },
    secondaryCta: { label: "微信预约", href: "#reservation" },
    highlights: ["真实作品参考", "价格区间清楚", "微信确认档期", "一客一换耗材"],
  },
  works: {
    eyebrow: "热门作品",
    title: "先看最近作品，再选适合自己的风格",
    description:
      "作品按美甲、美睫、护理和热门款分类展示。复杂款式建议提前发参考图，方便估算时间、价格和是否需要指定技师。",
    categories: ["全部", "热门款", "美甲", "美睫", "护理"],
    items: [
      {
        id: "milk-tea-cat-eye",
        category: "热门款",
        title: "奶茶猫眼",
        style: "通勤显白 · 微闪",
        price: "¥168-¥238",
        featured: true,
        image: {
          src: nailImages.catEye,
          alt: "带细闪质感的浅色法式美甲近景",
        },
      },
      {
        id: "soft-french",
        category: "美甲",
        title: "柔粉法式",
        style: "短甲友好 · 干净耐看",
        price: "¥198 起",
        featured: true,
        image: {
          src: nailImages.french,
          alt: "手持小花的柔粉法式美甲细节",
        },
      },
      {
        id: "air-lash",
        category: "美睫",
        title: "自然空气睫",
        style: "放大眼神 · 不厚重",
        price: "¥228 起",
        image: {
          src: nailImages.lash,
          alt: "自然卷翘的美睫眼部细节",
        },
      },
      {
        id: "clean-nude",
        category: "美甲",
        title: "裸粉纯色",
        style: "上班友好 · 低饱和",
        price: "¥98 起",
        image: {
          src: nailImages.hero,
          alt: "裸粉色美甲手部近景",
        },
      },
      {
        id: "line-art",
        category: "美甲",
        title: "细线手绘",
        style: "小图案 · 轻设计感",
        price: "¥238-¥468",
        image: {
          src: nailImages.detail,
          alt: "技师正在进行细节操作的手部近景",
        },
      },
      {
        id: "short-extension",
        category: "热门款",
        title: "短延长微闪",
        style: "修饰甲型 · 不夸张",
        price: "¥268-¥398",
        image: {
          src: nailImages.catEye,
          alt: "带微闪的延长甲款式细节",
        },
      },
      {
        id: "hand-care",
        category: "护理",
        title: "手部护理",
        style: "修甲型 · 角质护理",
        price: "¥68-¥128",
        image: {
          src: nailImages.tools,
          alt: "干净摆放的美甲护理工具",
        },
      },
      {
        id: "skin-care",
        category: "护理",
        title: "基础皮肤管理",
        style: "清洁补水 · 轻护理",
        price: "¥199 起",
        image: {
          src: nailImages.facial,
          alt: "轻美容护理中的面部护理场景",
        },
      },
    ],
  },
  services: {
    eyebrow: "服务与价格",
    title: "常见项目先给区间，复杂款到店前再确认",
    description:
      "用“¥xx 起”和区间价降低咨询成本。卸甲、延长、加钻和复杂手绘会按实际款式、甲片状态和操作时间另行确认。",
    groups: [
      {
        title: "美甲",
        description: "适合通勤、约会、拍照和节日款式。",
        items: [
          {
            name: "纯色 / 透色",
            description: "单色、裸粉、奶茶、显白低饱和色系",
            price: "¥98 起",
          },
          {
            name: "猫眼",
            description: "细闪、玻璃猫眼、低饱和温柔款",
            price: "¥168 起",
            badge: "热门",
          },
          {
            name: "法式",
            description: "经典边、反法式、微笑线调整",
            price: "¥198 起",
          },
          {
            name: "手绘",
            description: "小花、蝴蝶结、线条、节日元素",
            price: "¥238-¥468",
          },
          {
            name: "延长",
            description: "短延长、甲型修饰、拍照款",
            price: "¥268-¥498",
          },
        ],
      },
      {
        title: "美睫",
        description: "不追求夸张浓密，优先自然、干净、适合眼型。",
        items: [
          {
            name: "自然款",
            description: "日常通勤，放大眼神但不突兀",
            price: "¥228 起",
          },
          {
            name: "浓密款",
            description: "适合拍照和妆感需求，需要提前沟通眼型",
            price: "¥298 起",
          },
          {
            name: "漫画款",
            description: "分段感更强，适合想要明显风格的顾客",
            price: "¥328-¥428",
          },
        ],
      },
      {
        title: "护理",
        description: "适合不想做复杂款，但希望手部和皮肤状态更干净的顾客。",
        items: [
          {
            name: "手部护理",
            description: "修型、软化、基础保湿",
            price: "¥68-¥128",
          },
          {
            name: "卸甲修甲",
            description: "本店卸甲或外店卸甲后修整",
            price: "¥39-¥99",
          },
          {
            name: "皮肤管理",
            description: "清洁补水、舒缓护理，不做医疗化承诺",
            price: "¥199 起",
          },
        ],
      },
      {
        title: "新人体验",
        description: "首次到店建议从耐看基础款开始，先感受审美和服务节奏。",
        items: [
          {
            name: "新人美甲体验",
            description: "纯色 / 简单猫眼二选一",
            price: "¥128 起",
            badge: "首次到店",
          },
          {
            name: "美甲 + 手护套餐",
            description: "适合甲周干燥、倒刺明显的顾客",
            price: "¥188 起",
          },
        ],
      },
    ],
  },
  campaigns: {
    eyebrow: "新人优惠",
    title: "优惠真实一点，重点是让第一次到店更安心",
    description:
      "活动用于降低首次尝试门槛，不做夸张效果承诺，也不制造过度焦虑。",
    items: [
      {
        title: "首次到店减 ¥30",
        description: "适用于 ¥168 以上美甲或美睫项目，到店确认后使用。",
        price: "新人专享",
      },
      {
        title: "老带新护理券",
        description: "老客和新客各得一次手部基础护理抵扣，30 天内可用。",
        price: "¥68 护理券",
      },
      {
        title: "体验套餐",
        description: "纯色美甲 + 手部护理，适合第一次尝试本店审美。",
        price: "¥188 起",
      },
    ],
  },
  reservation: {
    eyebrow: "预约咨询",
    title: "提交预约意向，门店再用微信或电话确认档期",
    description:
      "留下项目、日期和参考风格。提交后不代表立即占位，我们会再确认具体时间、价格和技师档期。",
    projects: [
      "纯色 / 透色",
      "猫眼",
      "法式",
      "手绘",
      "延长",
      "自然款美睫",
      "浓密款美睫",
      "漫画款美睫",
      "手部护理",
      "基础皮肤管理",
    ],
    timeSlots: [
      "上午 10:30-12:30",
      "下午 13:00-16:00",
      "傍晚 16:00-18:30",
      "晚间 18:30-21:00",
    ],
    removalOptions: [
      "不需要卸甲",
      "需要本店卸甲",
      "需要外店卸甲",
      "不确定，微信发图确认",
    ],
    technicianOptions: [
      "不指定",
      "指定主理人 予安",
      "指定技师 小棠",
      "先看档期推荐",
    ],
    stylePlaceholder:
      "例如：奶茶猫眼、短方圆、不想太闪；也可以写“已在微信发参考图”。",
    notePlaceholder:
      "例如：指甲薄、需要赶时间、希望安静一点、两人同行等。",
    successMessage: "已收到预约意向，门店会通过微信/电话确认。",
  },
  hygiene: {
    eyebrow: "环境与卫生",
    title: "小店也要让顾客放心坐下来",
    description:
      "强调真实可执行的卫生习惯：工具消毒、一客一换、预约制和环境清洁。不写医疗化承诺。",
    image: {
      src: nailImages.studio,
      alt: "明亮干净的美容门店环境",
    },
    items: [
      {
        title: "工具消毒",
        description: "常用金属工具完成清洁消毒后独立收纳，使用前当面取用。",
      },
      {
        title: "一客一换",
        description: "砂条、棉片、垫巾等耗材按顾客更换，减少交叉使用。",
      },
      {
        title: "预约制",
        description: "控制同时到店人数，给每位顾客保留完整沟通和操作时间。",
      },
      {
        title: "环境清洁",
        description: "操作台、灯具和座椅每日清洁，保持明亮、安静、不压迫。",
      },
    ],
  },
  artists: {
    eyebrow: "主理人 / 技师",
    title: "先看审美方向，再决定要不要指定技师",
    description:
      "顾客预约前最关心的是：谁做、擅长什么、能不能理解参考图。介绍保持真实、短而明确。",
    items: [
      {
        name: "予安",
        role: "主理人 / 美甲设计",
        experience: "6 年美甲与轻美容经验",
        style: "擅长低饱和、通勤显白、短甲修饰和轻法式。",
        projects: ["猫眼", "法式", "手绘", "短延长"],
        image: {
          src: nailImages.tools,
          alt: "美甲工作室主理人准备干净工具",
        },
      },
      {
        name: "小棠",
        role: "美睫 / 护理技师",
        experience: "4 年美睫与手部护理经验",
        style: "擅长自然款、漫画款调整和敏感眼沟通。",
        projects: ["自然款美睫", "漫画款美睫", "手部护理"],
        image: {
          src: nailImages.lash,
          alt: "美睫技师作品的自然睫毛细节",
        },
      },
    ],
  },
  testimonials: {
    eyebrow: "顾客评价",
    title: "真实感评价，比夸张宣传更有用",
    items: [
      {
        quote:
          "第一次来做奶茶猫眼，颜色很干净，技师会先看手型再建议长度，没有硬推复杂款。",
        name: "Momo",
        tag: "通勤款 / 回头客",
      },
      {
        quote:
          "美睫做完很自然，第二天上班同事只说眼睛变有神了，不会一看就是特别浓的那种。",
        name: "阿宁",
        tag: "自然款美睫",
      },
      {
        quote:
          "环境安静，桌面和工具看起来都很干净。提前微信发了参考图，到店沟通很快。",
        name: "Lynn",
        tag: "手绘款",
      },
      {
        quote:
          "短甲也能做得很精致，价格提前说清楚，最后没有突然加很多项目。",
        name: "周周",
        tag: "短甲法式",
      },
    ],
  },
  notices: {
    eyebrow: "预约前须知",
    title: "预约前先说清楚，到店体验会更顺",
    items: [
      "建议提前预约，周末和晚间档位更容易满。",
      "复杂款式建议提前发参考图，便于预估时间和价格。",
      "卸甲、延长、加钻、复杂手绘可能另计。",
      "迟到 15 分钟内尽量保留档期，超过时间需根据当天排期调整。",
      "价格以实际款式复杂度、甲片状态和到店沟通为准。",
    ],
  },
  story: {
    eyebrow: "关于栖屿",
    title: "小工作室，也可以把细节做得舒服",
    body:
      "栖屿是预约制美甲、美睫和轻美容小工作室。我们更在意干净的操作、耐看的颜色和适合本人的细节，不追求夸张效果，也不催促顾客做复杂项目。",
  },
} satisfies BeautyNailDemoData;
