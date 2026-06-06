import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

/**
 * 街边咖啡 / 奶茶小店示例内容。
 * 所有具体门店信息集中此处，组件只渲染，便于一键替换为真实门店。
 * 定位：承接微信 / 朋友圈 / 小红书 / 抖音 / 门店二维码流量 → 看菜单 → 选饮品 → 微信咨询或提交自取点单意向。
 * 图片为可商用占位（Pexels），上线后替换为门店实拍。
 */
export const drinksShopDemo = {
  industry: "drinks-shop",
  brand: {
    name: "鹿见手作茶咖 LUMEET",
    shortName: "鹿见",
    logoMark: "鹿",
    tagline: "精品咖啡 · 奶茶特调 · 到店自取",
    city: "杭州",
  },
  nav: [
    { label: "今日推荐", href: "#featured" },
    { label: "菜单", href: "#menu" },
    { label: "点单", href: "#order" },
    { label: "优惠", href: "#promo" },
    { label: "门店", href: "#visit" },
  ],
  status: {
    openTime: "10:00",
    closeTime: "22:00",
    weeklyText: "每日 10:00 - 22:00",
    fallbackText: "今日 10:00 - 22:00 营业",
  },
  hero: {
    eyebrow: "扫码看菜单 · 到店自取",
    title: "现做手作茶咖，一杯刚刚好",
    subtitle:
      "精品咖啡、当季奶茶与水果特调，每杯现点现做。从小红书、抖音或门口二维码找到我们？扫一扫看菜单、选饮品，提前点单到店自取，不用排队。",
    addressShort: "杭州·拱墅 · 大悦城 1F，地铁口步行 3 分钟",
    primaryCta: { label: "立即点单", href: "#order" },
    secondaryCta: { label: "查看菜单", href: "#menu" },
    highlights: ["现点现做", "到店自取", "微信可咨询", "低糖可选"],
    image: "/demo/drinks-shop/hero.jpg",
  },
  featured: {
    eyebrow: "今日推荐 · 当季新品",
    title: "今天，喝一杯这个",
    description:
      "当季主推与新品都在这里。看上哪杯，下滑到「立即点单」就能提前预定，到店报名字即取。",
    items: [
      {
        name: "招牌生椰拿铁",
        price: "¥22",
        desc: "现萃浓缩配厚椰乳，咖啡香顺滑不腻，店里卖得最好的一杯。",
        tags: [
          { label: "招牌", tone: "signature" },
          { label: "推荐冰饮", tone: "ice" },
        ],
        image: "/demo/drinks-shop/drink-coconut-latte.jpg",
      },
      {
        name: "茉莉奶绿",
        price: "¥16",
        desc: "茉莉绿茶打底，鲜奶轻盈，回甘清爽，可调半糖更耐喝。",
        tags: [
          { label: "热卖", tone: "hot" },
          { label: "低糖可选", tone: "light" },
        ],
        image: "/demo/drinks-shop/drink-jasmine-green.jpg",
      },
      {
        name: "桂花酒酿奶茶",
        price: "¥20",
        desc: "秋日限定。桂花香气配温热酒酿，温润暖胃，适合天凉来一杯。",
        tags: [{ label: "新品", tone: "new" }],
        image: "/demo/drinks-shop/drink-osmanthus-tea.jpg",
      },
      {
        name: "草莓啵啵牛乳",
        price: "¥21",
        desc: "当季草莓现打成泥，搭脆啵啵和纯鲜奶，酸甜有料，颜值也高。",
        tags: [
          { label: "新品", tone: "new" },
          { label: "推荐冰饮", tone: "ice" },
        ],
        image: "/demo/drinks-shop/drink-strawberry-milk.jpg",
      },
      {
        name: "燕麦澳白",
        price: "¥24",
        desc: "双份浓缩配燕麦奶，醇厚顺口，0 蔗糖，怕甜和乳糖不耐都友好。",
        tags: [{ label: "低糖", tone: "light" }],
        image: "/demo/drinks-shop/drink-oat-flatwhite.jpg",
      },
      {
        name: "黄皮气泡美式",
        price: "¥18",
        desc: "新品。冷萃美式撞上当季黄皮，带气泡，清爽解腻一点不苦。",
        tags: [
          { label: "新品", tone: "new" },
          { label: "推荐冰饮", tone: "ice" },
        ],
        image: "/demo/drinks-shop/drink-sparkling-americano.jpg",
      },
    ],
  },
  menu: {
    eyebrow: "全部菜单 · 价格透明",
    title: "想喝什么，这里都有",
    description:
      "咖啡、奶茶、果茶、特调、甜品和加料，价格都写清楚。冷热、甜度、冰量到店可调，售罄会及时标注。",
    categories: [
      {
        id: "coffee",
        name: "咖啡",
        items: [
          {
            name: "美式",
            price: "¥15",
            desc: "冷萃 / 热萃可选，纯粹咖啡香，提神不踩雷。",
            temps: ["热", "冰"],
            recommend: "推荐 冰 · 无糖",
          },
          {
            name: "拿铁",
            price: "¥18",
            desc: "经典意式拿铁，奶香柔和，咖啡新手友好。",
            temps: ["热", "冰"],
          },
          {
            name: "招牌生椰拿铁",
            price: "¥22",
            desc: "厚椰乳 + 双份浓缩，顺滑不腻，店内销量第一。",
            temps: ["冰"],
            recommend: "推荐 标准甜 · 少冰",
            hot: true,
            image: "/demo/drinks-shop/drink-coconut-latte.jpg",
          },
          {
            name: "燕麦澳白",
            price: "¥24",
            desc: "双份浓缩配燕麦奶，0 蔗糖，醇厚顺口。",
            temps: ["热", "冰"],
            image: "/demo/drinks-shop/drink-oat-flatwhite.jpg",
          },
          {
            name: "桂花拿铁",
            price: "¥21",
            desc: "秋季限定，桂花糖浆 + 拿铁，香气温柔。",
            temps: ["热", "冰"],
          },
        ],
      },
      {
        id: "milktea",
        name: "奶茶",
        items: [
          {
            name: "茉莉奶绿",
            price: "¥16",
            desc: "茉莉绿茶 + 鲜奶，清爽回甘，怎么调都好喝。",
            temps: ["热", "冰"],
            recommend: "推荐 半糖 · 少冰",
            hot: true,
            image: "/demo/drinks-shop/drink-jasmine-green.jpg",
          },
          {
            name: "经典珍珠奶茶",
            price: "¥15",
            desc: "红茶打底配现煮珍珠，童年那个味道。",
            temps: ["热", "冰"],
          },
          {
            name: "桂花酒酿奶茶",
            price: "¥20",
            desc: "新品。桂花 + 酒酿，温润暖胃，建议趁热喝。",
            temps: ["热"],
            recommend: "推荐 半糖 · 热饮",
            image: "/demo/drinks-shop/drink-osmanthus-tea.jpg",
          },
          {
            name: "黑糖波波鲜奶",
            price: "¥19",
            desc: "现熬黑糖珍珠 + 纯鲜奶，挂壁好看有嚼劲。",
            temps: ["冰"],
          },
          {
            name: "抹茶拿铁奶",
            price: "¥21",
            desc: "宇治抹茶现点现打，微苦回甘。",
            temps: ["热", "冰"],
            soldOut: true,
          },
        ],
      },
      {
        id: "fruittea",
        name: "果茶",
        items: [
          {
            name: "草莓啵啵牛乳",
            price: "¥21",
            desc: "当季草莓现打 + 脆啵啵 + 鲜奶，酸甜有料。",
            temps: ["冰"],
            hot: true,
            image: "/demo/drinks-shop/drink-strawberry-milk.jpg",
          },
          {
            name: "满杯西柚",
            price: "¥18",
            desc: "现切西柚配茉莉绿茶，清爽解腻。",
            temps: ["冰"],
            recommend: "推荐 三分糖",
          },
          {
            name: "手打柠檬红茶",
            price: "¥12",
            desc: "鲜柠檬现打，酸爽提神，性价比之选。",
            temps: ["冰"],
          },
          {
            name: "黄皮气泡美式",
            price: "¥18",
            desc: "新品。咖啡 × 果茶跨界，带气泡更清爽。",
            temps: ["冰"],
            image: "/demo/drinks-shop/drink-sparkling-americano.jpg",
          },
        ],
      },
      {
        id: "special",
        name: "特调",
        items: [
          {
            name: "海盐奶盖咖啡",
            price: "¥23",
            desc: "浓缩 + 海盐奶盖，咸甜平衡，先搅一搅更好喝。",
            temps: ["冰"],
          },
          {
            name: "桂花乌龙特调",
            price: "¥22",
            desc: "乌龙冷泡 + 桂花糖浆，茶香清雅不腻。",
            temps: ["冰"],
          },
          {
            name: "抹茶生椰",
            price: "¥24",
            desc: "抹茶 + 厚椰乳双层，颜值与味道都在线。",
            temps: ["冰"],
          },
        ],
      },
      {
        id: "dessert",
        name: "甜品",
        items: [
          {
            name: "提拉米苏",
            price: "¥18",
            desc: "现做马斯卡彭，可可微苦，配美式刚刚好。",
            temps: [],
          },
          {
            name: "巴斯克芝士",
            price: "¥20",
            desc: "焦香流心，冷藏后口感更绵密。",
            temps: [],
          },
          {
            name: "手作司康",
            price: "¥12",
            desc: "每日现烤，黄油麦香，咖啡好搭子。",
            temps: [],
          },
        ],
      },
      {
        id: "topping",
        name: "加料",
        items: [
          {
            name: "珍珠 / 啵啵",
            price: "¥3",
            desc: "现煮 Q 弹，奶茶果茶都能加。",
            temps: [],
          },
          {
            name: "椰果 / 芋圆",
            price: "¥3",
            desc: "清甜有嚼劲，喜欢有料就加。",
            temps: [],
          },
          {
            name: "奶盖 / 燕麦",
            price: "¥4",
            desc: "升级口感，奶盖咸香、燕麦更顺。",
            temps: [],
          },
          {
            name: "浓缩 Shot",
            price: "¥5",
            desc: "加一份意式浓缩，更提神。",
            temps: [],
          },
        ],
      },
    ],
  },
  order: {
    eyebrow: "到店自取 · 点单意向",
    title: "提前点单，到店即取不排队",
    description:
      "选好饮品和到店时间，门店看到后会通过微信或电话和你确认。这里只是点单意向，不是在线支付，到店付款就行。",
    drinkOptions: [
      "招牌生椰拿铁",
      "茉莉奶绿",
      "桂花酒酿奶茶（新）",
      "草莓啵啵牛乳",
      "燕麦澳白",
      "经典珍珠奶茶",
      "其他（在备注说明）",
    ],
    quantityOptions: ["1 杯", "2 杯", "3 杯", "4 杯", "5 杯及以上"],
    sweetnessOptions: ["正常糖", "七分糖", "半糖", "三分糖", "无糖"],
    iceOptions: ["正常冰", "少冰", "去冰", "常温", "热饮"],
    toppingOptions: [
      "不加料",
      "珍珠 / 啵啵",
      "椰果 / 芋圆",
      "奶盖",
      "燕麦",
      "浓缩 Shot",
    ],
    pickupTimeOptions: [
      "尽快（约 15 分钟）",
      "30 分钟后",
      "1 小时后",
      "到店前我再说",
      "自定义（在备注说明）",
    ],
    notePlaceholder: "口味偏好、具体到店时间、其他备注…",
    submitLabel: "提交点单意向",
    successTitle: "已收到你的点单意向",
    successNote:
      "门店会通过微信 / 电话和你确认饮品和到店时间。到店付款即可，无需在线支付。",
    sideNote:
      "提交即表示同意门店通过微信或电话联系确认。本表单为前端示例，不涉及在线支付、会员充值与收银系统。",
  },
  promotions: {
    eyebrow: "优惠活动 · 示例",
    title: "顺手能省一点",
    description:
      "以下为示例活动，方便了解门店常见玩法。具体以门店当期公告为准，活动均不涉及真实支付与会员充值。",
    items: [
      {
        title: "新人首杯立减 5 元",
        desc: "首次到店出示本页，任意饮品立减 5 元。",
        tag: "新客",
        icon: "gift",
      },
      {
        title: "第二杯半价",
        desc: "每日同款第二杯半价，和朋友一起更划算。",
        tag: "每日",
        icon: "percent",
      },
      {
        title: "工作日咖啡套餐",
        desc: "周一至周五 14:00 前，咖啡 + 司康 ¥25。",
        tag: "工作日",
        icon: "coffee",
      },
      {
        title: "进群再送一杯",
        desc: "加店员微信进群，集满 5 杯送 1 杯。",
        tag: "会员",
        icon: "users",
      },
    ],
  },
  visit: {
    eyebrow: "到店信息",
    title: "就在街角，扫码即到",
    description:
      "地址、营业时间、电话和微信都在这里。第一次来建议用导航，到店报点单的名字就能取。",
    address: "杭州市拱墅区莫干山路 102 号大悦城 1F-08",
    hours: ["每日 10:00 - 22:00", "节假日照常营业"],
    phone: "0571-8888-2233",
    phoneHref: "tel:057188882233",
    wechat: "lumeet-coffee",
    wechatNote: "加微信备注「点单」，进群有优惠。",
    navigationUrl:
      "https://uri.amap.com/search?keyword=%E6%9D%AD%E5%B7%9E%E5%A4%A7%E6%82%A6%E5%9F%8E%E6%8B%B1%E5%A2%85",
    image: "/demo/drinks-shop/env-storefront.jpg",
    delivery: [
      { label: "美团外卖", note: "示例入口 · 上线后替换为门店真实外卖页" },
      { label: "饿了么", note: "示例入口 · 上线后替换为门店真实外卖页" },
    ],
  },
  environment: {
    eyebrow: "门店环境",
    title: "明亮、好拍、适合小坐",
    description:
      "一面落地窗、几张小桌，出杯快、空间清爽。等饮品的时候也能顺手拍一张。",
    shots: [
      {
        title: "临街门头",
        caption: "落地窗 + 暖木色招牌，好找也好拍。",
        image: "/demo/drinks-shop/env-storefront.jpg",
      },
      {
        title: "手作吧台",
        caption: "半开放吧台，每一杯都看得见现做。",
        image: "/demo/drinks-shop/env-bar.jpg",
      },
      {
        title: "窗边座位",
        caption: "绿植 + 自然光，适合朋友小聚。",
        image: "/demo/drinks-shop/env-seating.jpg",
      },
      {
        title: "出杯取餐区",
        caption: "扫码点单，到店报名字即取。",
        image: "/demo/drinks-shop/env-pickup.jpg",
      },
    ],
  },
  about: {
    eyebrow: "关于我们",
    title: "一家现做手作的小店",
    body: "我们只做现点现做的咖啡和茶饮：豆子每周新鲜烘焙，水果当天采买。不追求很多花样，只想把每天会喝的那几杯做好，方便你顺路带走，也欢迎坐下来小聚。",
    features: [
      { title: "每日现做", desc: "现点现萃，不用预制，口感更新鲜。", icon: "cup" },
      { title: "豆子周烘", desc: "每周新鲜烘焙，当季水果当天采买。", icon: "leaf" },
      { title: "到店自取", desc: "提前点单，到店报名字即取不排队。", icon: "clock" },
      { title: "适合小聚", desc: "窗边座位配绿植，朋友小坐也舒服。", icon: "heart" },
    ],
  },
  footerNote:
    "本页为门店线上展示 demo，用于承接微信、朋友圈、小红书、抖音与门店二维码流量，不涉及在线支付、会员充值与收银系统。",
} satisfies DrinksShopDemoData;
