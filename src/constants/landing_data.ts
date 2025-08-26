import { title } from "process";

const navLinks = [
  {
    title: "الرئيسية",
    link: "home",
  },
  {
    title: "عن المشروع",
    link: "about",
  },
  {
    title: "المؤسسات",
    link: "orgs",
  },
  {
    title: "المميزات",
    link: "features",
  },
  {
    title: "كيفية العمل",
    link: "how-it-works",
  },
  {
    title: "حمل التطبيق",
    link: "dawnload-app",
  },
  {
    title: "فريق العمل",
    link: "team",
  },
  {
    title: "تواصل معنا",
    link: "contact",
  },
];

const aboutData = [
  {
    title: "ربط جميع الإدارات على مستوى مديرية القاهرة ",
    description:
      "المنصة بتجمع كل الإدارات الشبابية والرياضية من جميع انحاء القاهرة  في مكان واحد، بحيث تقدر أن  تصل لأي إدارة بسهولة من خلال خريطة تفاعلية أو قوائم منظمة.",
    cardColor: "#003D68",
    icon: "/assets/connection-icon.gif",
    illustrator: "/assets/bussiness-illu.gif",
    size: { width: 250, height: 250 },
  },
  {
    title: "قاعدة بيانات موحدة لخدمة المجتمع",
    description:
      "جميع البيانات والمعلومات الخاصة بالمؤسسات والإدارات موجودة في نظام واحد، مما يضمن الشفافية والدقة وسهولة الوصول لأي معلومة.",
    cardColor: "#6B0002",
    icon: "/assets/database-icon.gif",
    illustrator: "/assets/database-illu.gif",
    size: { width: 210, height: 210 },
  },
  {
    title: " دعم الشباب والرياضة بأدوات تكنولوجية حديثة",
    description:
      "حيث نستخدم أحدث الحلول الرقمية والتقنية لكي نوفر للشباب وسيلة سريعة وفعّالة للوصول للخدمات والمشاركة في الأنشطة",
    cardColor: "#866200",
    icon: "/assets/youth-icon.gif",
    illustrator: "/assets/tech-assitant-illu.gif",
    size: { width: 210, height: 210 },
  },
  {
    title: "سهولة في التعامل للمواطنين",
    description:
      "تصميم المنصة بسيط وسهل الاستخدام، لكي يقدر المواطنون على الوصول للمعلومات والخدمات بخطوات قليلة ودون تعقيد",
    cardColor: "#006810",
    icon: "/assets/community-icon.gif",
    illustrator: "/assets/users-illu.gif",
    size: { width: 210, height: 210 },
  },
];

const countingOrgsBoxes = [
  { title: "المستفيدين", count: "100000" },
  { title: "مركز", count: "74" },
  { title: "نادي", count: "136" },
];

const featuresCards = [
  {
    number: "۰۱",
    discription:
      "واجهة بسيطة وسهلة الاستخدام تتيح للمواطنين الوصول لأي إدارة أو خدمة بخطوات قليلة.",
    img: "/assets/users-illu-2.gif",
  },
  {
    number: "۰۲",
    discription: "بيانات رسمية ومحدّثة باستمرار لضمان الشفافية والثقة.",
    img: "/assets/data-illu.gif",
  },
  {
    number: "۰۳",
    discription:
      "قاعدة بيانات موحّدة تربط جميع الإدارات والمؤسسات في نظام واحد متكامل.",
    img: "/assets/database-illu.gif",
  },
  {
    number: "۰٤",
    discription:
      "تمكين الشباب وتوسيع الأنشطة الرياضية من خلال أدوات تكنولوجية حديثة.",
    img: "/assets/youth-illu.gif",
  },
];

const howItWorks = [
  {
    title: "ابدأ رحلتك",
    description:
      "قم بتحميل التطبيق على هاتفك أو ادخل على النسخة الإلكترونية من المنصة. المنصة متاحة للجميع في أي وقت ومن أي مكان",
    cardColor: "#F5F5F5",
    num: "۰۱",
    illustrator: "/assets/userapp-illu.png",
    size: { width: 120, height: 120 },
    svgPathColor: "#1B82FA",
    backSvgPath:
      "M36.6,-36.5C52,-21.2,72.1,-10.6,73.6,1.5C75.2,13.7,58.1,27.3,42.7,41C27.3,54.6,13.7,68.3,-2.7,71C-19.1,73.7,-38.2,65.5,-53.6,51.8C-68.9,38.2,-80.6,19.1,-81,-0.3C-81.3,-19.7,-70.3,-39.5,-54.9,-54.8C-39.5,-70,-19.7,-80.8,-4.6,-76.2C10.6,-71.6,21.2,-51.7,36.6,-36.5Z",
    iconBackGround: "#F5F5F5",
    textColor: "#000",
  },
  {
    title: "اختر الإدارة أو الخدمة",
    description:
      "من خلال واجهة واضحة وسهلة، تقدر تبحث أو تختار مباشرة الإدارة أو الخدمة اللي محتاجها. كل الخدمات مصنفة ومنظمة لتسهيل عملية الوصول",
    cardColor: "#F5F5F5",
    num: "۰۲",
    illustrator: "/assets/user-choose-illu.png",
    size: { width: 157, height: 157 },
    backSvgPath:
      "M49.1,-53.9C57.1,-41.2,52.4,-20.6,52.4,0C52.4,20.6,57.1,41.2,49.1,53.9C41.2,66.7,20.6,71.6,-0.7,72.3C-21.9,72.9,-43.8,69.3,-60.4,56.5C-77.1,43.8,-88.5,21.9,-89.1,-0.6C-89.7,-23.2,-79.6,-46.4,-63,-59.1C-46.4,-71.9,-23.2,-74.2,-1.3,-72.9C20.6,-71.6,41.2,-66.7,49.1,-53.9Z",
    svgPathColor: "#6B0002",
    iconBackGround: "#F5F5F5",
    textColor: "#000",
  },
  {
    title: "تصفح البيانات الرسمية",
    description:
      "استعرض جميع المعلومات المتاحة بشكل شفاف، سواء بيانات الإدارات أو الأنشطة أو الخدمات. كل البيانات موثوقة ومحدثة باستمرار",
    cardColor: "#F5F5F5",
    num: "۰۳",
    illustrator: "/assets/user-browsing-illu.png",
    size: { width: 200, height: 200 },
    backSvgPath:
      "M32.8,-29.7C42.2,-23.3,49.5,-11.7,54.7,5.3C60,22.2,63.3,44.4,53.8,57.4C44.4,70.5,22.2,74.4,2.2,72.3C-17.8,70.1,-35.7,61.8,-45.7,48.7C-55.8,35.7,-58.2,17.8,-60.5,-2.3C-62.9,-22.5,-65.2,-45,-55.1,-51.3C-45,-57.7,-22.5,-47.8,-5.4,-42.4C11.7,-37,23.3,-36,32.8,-29.7Z",
    svgPathColor: "#866200",
    iconBackGround: "#F5F5F5",
    textColor: "#000",
  },
  {
    title: "تواصل واستفد",
    description:
      "تقدر تتواصل مع الجهة المختصة مباشرة، أو تستفيد من الخدمات المقدمة سواء للشباب أو للأنشطة الرياضية. المنصة هدفها تسهيل الإجراءات وتوفير الوقت والمجهود",
    cardColor: "#F5F5F5",
    num: "۰٤",
    illustrator: "/assets/user-call-illu.png",
    size: { width: 200, height: 200 },
    backSvgPath:
      "M30,-35.3C38,-21.9,43.2,-11,44.8,1.5C46.3,14.1,44.2,28.1,36.2,43.9C28.1,59.6,14.1,77.1,-4.1,81.2C-22.3,85.3,-44.5,76,-57.8,60.3C-71,44.5,-75.3,22.3,-72.6,2.7C-70,-16.9,-60.3,-33.8,-47.1,-47.1C-33.8,-60.5,-16.9,-70.3,-3,-67.3C11,-64.4,21.9,-48.6,30,-35.3Z",
    svgPathColor: "#006810",
    iconBackGround: "#F5F5F5",
    textColor: "#000",
  },
];

const team = [
  {
    name: "Marwan",
    position: "Data Analyst, Inspector",
    image: "/assets/marwan.jpg",
    description:
      "Marwan is a dedicated Data Analyst with strong analytical skills. His experience in data inspection and interpretation helps the team make data-driven decisions and ensures accuracy in every project.",
  },
  {
    name: "Mohamed Mahmoud",
    position:
      "Full Stack Developer, Frontend Developer, UI/UX Designer, Instructor",
    image: "/assets/me-ai.png",
    description:
      "Mohamed Mahmoud is a versatile full stack developer and designer. With expertise in frontend development, UI/UX, and backend systems, he bridges design and functionality seamlessly. He also shares his knowledge as an instructor, mentoring aspiring developers.",
  },
  {
    name: "Ibrahim Elattar",
    position: "Backend Developer",
    image: "/assets/ibrahim.jpg",
    description:
      "Ibrahim specializes in backend development, building efficient and scalable systems. His strong understanding of databases, APIs, and server-side logic ensures that projects are stable, secure, and high-performing.",
  },
  {
    name: "Moamen Mohamed",
    position: "Mobile Developer, UI/UX Designer, Instructor",
    image: "/assets/moamen.jpg",
    description:
      "Moamen is a creative mobile developer with a passion for crafting engaging mobile applications. As a UI/UX designer, he ensures intuitive user experiences, and as an instructor, he helps others grow in the mobile development field.",
  },
];

const footerSwiper = [
  {
    title: "1",
    image: "/assets/ministry-yourh.png",
  },
  {
    title: "2",
    image: "/assets/ministry-yourh.png",
  },
  {
    title: "3",
    image: "/assets/ministry-yourh.png",
  },
  {
    title: "4",
    image: "/assets/ministry-yourh.png",
  },
  {
    title: "5",
    image: "/assets/ministry-yourh.png",
  },
  {
    title: "6",
    image: "/assets/ministry-yourh.png",
  },
];

export {
  navLinks,
  aboutData,
  countingOrgsBoxes,
  featuresCards,
  howItWorks,
  team,
  footerSwiper,
};
