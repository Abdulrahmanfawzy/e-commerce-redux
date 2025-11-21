export const products = [
  // Electronics
  {
    id: 1,
    name: { en: "Wireless Headphones Pro", ar: "سماعات لاسلكية برو" },
    description: {
      en: "Noise-canceling wireless headphones with 30h battery.",
      ar: "سماعات لاسلكية عازلة للضوضاء مع بطارية 30 ساعة",
    },
    price: 1450,
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    rating: 4.8,
    stock: 32,
  },
  {
    id: 2,
    name: { en: "Smart Watch Series X", ar: "ساعة ذكية سيريس X" },
    description: {
      en: "Advanced fitness tracking with AMOLED display.",
      ar: "تتبع اللياقة المتقدم بشاشة AMOLED",
    },
    price: 2200,
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    rating: 4.6,
    stock: 18,
  },
  {
    id: 3,
    name: { en: "Gaming Mouse RGB", ar: "ماوس ألعاب RGB" },
    description: {
      en: "Customizable DPI and RGB effects for pro gamers.",
      ar: "DPI وتأثيرات RGB قابلة للتخصيص لمحبي الألعاب المحترفين",
    },
    price: 480,
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1587202372775-98927a7b31f2",
    rating: 4.7,
    stock: 40,
  },
  {
    id: 4,
    name: {
      en: "Mechanical Keyboard Blue Switch",
      ar: "كيبورد ميكانيكي بمفتاح أزرق",
    },
    description: {
      en: "RGB mechanical keyboard with fast response time.",
      ar: "كيبورد ميكانيكي RGB بسرعة استجابة عالية",
    },
    price: 1250,
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1587825140708-628d1016e318",
    rating: 4.9,
    stock: 22,
  },
  {
    id: 5,
    name: { en: "Bluetooth Speaker Bass+", ar: "سبيكر بلوتوث Bass+" },
    description: {
      en: "Powerful portable speaker with deep bass.",
      ar: "سبيكر محمول قوي بصوت باس عميق",
    },
    price: 520,
    categorySlug: "electronics",
    image: "https://images.unsplash.com/photo-1616627982922-36f34c19379e",
    rating: 4.8,
    stock: 30,
  },
  // Women's Fashion
  {
    id: 6,
    name: { en: "Summer Dress Floral", ar: "فستان صيفي بنقشة زهور" },
    description: {
      en: "Lightweight floral dress for summer.",
      ar: "فستان خفيف بنقشة الزهور للصيف",
    },
    price: 350,
    categorySlug: "womens-fashion",
    image: "https://images.unsplash.com/photo-1520975699535-263c8f48b79f",
    rating: 4.5,
    stock: 50,
  },
  {
    id: 7,
    name: { en: "Ladies Handbag Leather", ar: "شنطة نسائية جلد" },
    description: {
      en: "Premium leather handbag for all occasions.",
      ar: "شنطة جلد فاخرة لجميع المناسبات",
    },
    price: 700,
    categorySlug: "womens-fashion",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    rating: 4.7,
    stock: 35,
  },
  // Men's Fashion
  {
    id: 8,
    name: { en: "Men's Casual Shirt", ar: "قميص كاجوال رجالي" },
    description: {
      en: "Comfortable cotton casual shirt.",
      ar: "قميص كاجوال قطني مريح",
    },
    price: 400,
    categorySlug: "mens-fashion",
    image: "https://images.unsplash.com/photo-1520975699535-263c8f48b79f",
    rating: 4.4,
    stock: 40,
  },
  {
    id: 9,
    name: { en: "Men's Sneakers Sport", ar: "حذاء رياضي رجالي" },
    description: {
      en: "Lightweight sport sneakers for everyday use.",
      ar: "حذاء رياضي خفيف للاستخدام اليومي",
    },
    price: 600,
    categorySlug: "mens-fashion",
    image: "https://images.unsplash.com/photo-1520975699535-263c8f48b79f",
    rating: 4.6,
    stock: 30,
  },
  // Home & Lifestyle
  {
    id: 10,
    name: { en: "Ceramic Vase Set", ar: "مجموعة مزهريات سيراميك" },
    description: {
      en: "Elegant ceramic vases for home decoration.",
      ar: "مزهرية سيراميك أنيقة لتزيين المنزل",
    },
    price: 250,
    categorySlug: "home-lifestyle",
    image: "https://images.unsplash.com/photo-1567016549638-6f9bfb43c001",
    rating: 4.3,
    stock: 20,
  },
  // Technology
  {
    id: 11,
    name: { en: "Smartphone 128GB", ar: "هاتف ذكي 128GB" },
    description: {
      en: "Latest model smartphone with high performance.",
      ar: "أحدث موديل هاتف ذكي بأداء عالي",
    },
    price: 5000,
    categorySlug: "technology",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    rating: 4.7,
    stock: 15,
  },
  // Sports & Outdoor
  {
    id: 12,
    name: { en: "Mountain Bike Pro", ar: "دراجة جبلية برو" },
    description: {
      en: "High-quality mountain bike for adventure lovers.",
      ar: "دراجة جبلية عالية الجودة لعشاق المغامرات",
    },
    price: 8000,
    categorySlug: "sports-outdoor",
    image: "https://images.unsplash.com/photo-1599058917217-5cdd43e360b4",
    rating: 4.8,
    stock: 10,
  },
  // Baby & Toys
  {
    id: 13,
    name: { en: "Baby Stroller", ar: "عربة أطفال" },
    description: {
      en: "Comfortable stroller for babies.",
      ar: "عربة مريحة للأطفال",
    },
    price: 1200,
    categorySlug: "baby-toys",
    image: "https://images.unsplash.com/photo-1595241164297-c87d1f354f1e",
    rating: 4.6,
    stock: 18,
  },
  // Groceries & Pets
  {
    id: 14,
    name: { en: "Organic Dog Food", ar: "طعام كلاب عضوي" },
    description: {
      en: "Healthy and organic dog food.",
      ar: "طعام صحي وعضوي للكلاب",
    },
    price: 300,
    categorySlug: "groceries-pets",
    image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    rating: 4.5,
    stock: 22,
  },
  // Medicine
  {
    id: 15,
    name: { en: "Vitamin C Tablets", ar: "أقراص فيتامين C" },
    description: {
      en: "Boosts immunity and overall health.",
      ar: "يقوي المناعة والصحة العامة",
    },
    price: 100,
    categorySlug: "medicine",
    image: "https://images.unsplash.com/photo-1588776814546-3b57ff48de80",
    rating: 4.6,
    stock: 50,
  },
];
