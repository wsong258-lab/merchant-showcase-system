import type { RestaurantDemoData } from "@/data/demo/types";

export const restaurantDemo = {
  industry: "restaurant",
  brand: {
    name: "璟宴 JINGYAN",
    shortName: "璟宴",
    logoMark: "璟",
    tagline: "海派私宴 · 时令中餐",
    city: "上海",
  },
  nav: [
    { label: "品牌故事", href: "#story" },
    { label: "特色服务", href: "#services" },
    { label: "菜品套餐", href: "#menu" },
    { label: "空间影像", href: "#gallery" },
    { label: "到店信息", href: "#visit" },
  ],
  hero: {
    eyebrow: "Shanghai Private Dining",
    title: "把一餐晚宴，做成值得被记住的夜晚",
    subtitle:
      "面向商务宴请、家庭纪念日与小型私享会的高端餐饮门店 demo。以时令中餐、沉浸式空间和一对一席位管家，呈现克制、安静、讲究的到店体验。",
    primaryCta: { label: "预约席位", href: "#reservation" },
    secondaryCta: { label: "查看套餐", href: "#menu" },
    image: {
      src: "/demo/restaurant/hero.jpg",
      alt: "昏暖灯光下的高级餐厅餐桌",
    },
    signature: "今晚只服务 18 席",
    stats: [
      { value: "18", label: "每日限量席位" },
      { value: "6", label: "时令品鉴菜单" },
      { value: "1v1", label: "席位管家跟进" },
    ],
    highlights: ["商务宴请", "纪念日布置", "私密包间", "高德导航"],
  },
  story: {
    eyebrow: "Brand Story",
    title: "在城市深处，留一间慢下来的餐厅",
    body: [
      "璟宴以海派中餐为底色，把本帮风味、江南时令和现代摆盘融合在一张安静的餐桌上。空间不追求热闹，只服务那些需要体面、隐私与仪式感的聚会。",
      "从迎宾、醒酒、上菜节奏到离店伴手礼，每一个触点都被设计为门店官网可以表达、顾客可以提前感知的体验资产。",
    ],
    image: {
      src: "/demo/restaurant/story.jpg",
      alt: "厨师在开放厨房中精细摆盘",
    },
    proofs: [
      { value: "12 年", label: "主厨中餐研发经验" },
      { value: "4 间", label: "独立私密包间" },
      { value: "95%", label: "复购来自老客推荐" },
    ],
  },
  services: {
    eyebrow: "Guest Experience",
    title: "不只是订桌，而是提前安排好整场款待",
    description:
      "本模板把本地门店最需要转化的信息拆成清晰区块：场景、服务、套餐、位置、联系和预约，便于后续替换为美容、宠物、健身等行业。",
    items: [
      {
        title: "商务宴请方案",
        description: "根据人数、预算、宾客偏好推荐包间、菜单和酒水节奏。",
        icon: "users",
      },
      {
        title: "纪念日仪式",
        description: "鲜花、甜品字牌、灯光和拍照动线可提前沟通确认。",
        icon: "sparkles",
      },
      {
        title: "主厨时令菜单",
        description: "每月更新江南时令食材，以小份多道保持节奏和惊喜。",
        icon: "chef",
      },
      {
        title: "私享酒水搭配",
        description: "从黄酒、清酒到低酒精特调，为每一道菜配置建议。",
        icon: "wine",
      },
    ],
  },
  menu: {
    eyebrow: "Tasting Menu",
    title: "适合中国大陆本地门店展示的菜品与套餐结构",
    description:
      "套餐卡片采用可复用数据结构，后续行业可以替换为护理项目、宠物服务、私教课程或到店体验包。",
    packages: [
      {
        name: "江南时令品鉴",
        label: "双人首选",
        price: "¥688 / 位",
        description: "适合纪念日、初次到店和轻商务会面，菜式节奏舒展。",
        image: {
          src: "/demo/restaurant/menu-jiangnan.jpg",
          alt: "精致中式菜品摆盘",
        },
        features: ["8 道时令菜", "欢迎茶饮", "甜品字牌", "建议 2-4 人"],
      },
      {
        name: "璟宴主厨菜单",
        label: "招牌推荐",
        price: "¥988 / 位",
        description: "主厨当季完整表达，适合重要宴请与高规格接待。",
        image: {
          src: "/demo/restaurant/menu-chef.jpg",
          alt: "餐桌上的多道菜品",
        },
        features: ["10 道品鉴", "席前小食", "酒水建议", "建议 4-8 人"],
      },
      {
        name: "私宴包间套餐",
        label: "商务宴请",
        price: "¥1288 / 位",
        description: "独立包间、专属服务员和更完整的仪式接待流程。",
        image: {
          src: "/demo/restaurant/menu-private.jpg",
          alt: "高级餐厅包间与餐桌",
        },
        features: ["独立包间", "定制菜单卡", "醒酒服务", "建议 6-12 人"],
      },
    ],
  },
  gallery: {
    eyebrow: "Visual Atmosphere",
    title: "用大图和留白建立高级门店的第一印象",
    description:
      "图片墙强调真实空间、菜品细节和人物服务，不依赖廉价装饰，适合后续接入门店实拍图。",
    images: [
      {
        src: "/demo/restaurant/gallery-1.jpg",
        alt: "餐厅昏暖灯光和吧台",
        caption: "暖棕灯光与深色木作",
        span: "wide",
      },
      {
        src: "/demo/restaurant/gallery-2.jpg",
        alt: "精致餐具和餐桌细节",
        caption: "餐具与桌面层次",
      },
      {
        src: "/demo/restaurant/gallery-3.jpg",
        alt: "厨师完成菜品摆盘",
        caption: "出品前的最后整理",
        span: "tall",
      },
      {
        src: "/demo/restaurant/gallery-4.jpg",
        alt: "餐厅室内空间",
        caption: "适合晚宴的空间尺度",
      },
      {
        src: "/demo/restaurant/gallery-5.jpg",
        alt: "餐厅厨房与服务人员",
        caption: "开放厨房的秩序",
      },
    ],
  },
  testimonials: {
    eyebrow: "Guest Notes",
    title: "顾客评价要像真实到店后的回声",
    items: [
      {
        quote:
          "客户从外地来上海，我们需要一个不吵、服务稳定、菜品有记忆点的地方。整晚节奏很好，几乎不用我们操心。",
        name: "陈女士",
        role: "品牌市场负责人",
        visit: "商务晚宴 · 8 人包间",
      },
      {
        quote:
          "纪念日布置很克制，不会夸张，但拍照非常好看。菜量和节奏都刚好，适合慢慢吃完一整晚。",
        name: "林先生",
        role: "复购顾客",
        visit: "双人品鉴 · 纪念日",
      },
      {
        quote:
          "提前通过微信确认忌口和到店时间，到了之后服务员已经知道我们的需求。这个细节很加分。",
        name: "许女士",
        role: "家庭聚餐顾客",
        visit: "家庭私宴 · 6 人",
      },
    ],
  },
  visit: {
    eyebrow: "Visit Us",
    title: "到店前，把关键信息一次说清楚",
    description:
      "门店官网最重要的转化区块：地址、营业时间、电话、微信和导航按钮必须清晰可见，尤其移动端要一键联系。",
    address: "上海市静安区南京西路 888 号 5 层",
    hours: ["周一至周五 17:30 - 22:30", "周六至周日 11:30 - 14:30 / 17:30 - 22:30"],
    phone: "021-8888-6688",
    phoneHref: "tel:02188886688",
    wechat: "JINGYAN-Service",
    wechatHref: "#reservation",
    navigationUrl:
      "https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%9D%99%E5%AE%89%E5%8C%BA%E5%8D%97%E4%BA%AC%E8%A5%BF%E8%B7%AF888%E5%8F%B7",
    image: {
      src: "/demo/restaurant/visit.jpg",
      alt: "夜晚街区中的高端餐饮门店外立面",
    },
  },
  reservation: {
    eyebrow: "Reservation",
    title: "预约席位，确认人数与场景",
    description:
      "第一阶段先做静态预约 CTA 和表单界面，后续可以接入企微、飞书、多门店排班或短信通知。",
    fields: [
      { label: "称呼", placeholder: "例如：王女士" },
      { label: "手机号", placeholder: "用于确认预约", type: "tel" },
      { label: "到店日期", placeholder: "选择日期", type: "date" },
      { label: "到店时间", placeholder: "选择时间", type: "time" },
    ],
    notePlaceholder: "人数、场景、忌口或包间需求",
    cta: { label: "提交预约意向", href: "tel:02188886688" },
    secondaryNote: "提交后由门店席位管家电话或微信确认，不代表即时占位。",
  },
} satisfies RestaurantDemoData;
