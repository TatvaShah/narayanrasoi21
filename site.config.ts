import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Narayan Rasoi",
  tagline: "Homemade veg Indian tiffins and catering in Brampton and Mississauga.",
  category: "Homemade veg Indian food",
  schemaType: "FoodEstablishment",
  area: "Brampton and Mississauga, ON",
  siteUrl: "https://narayanrasoi21.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#C45C26" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and Mississauga",
    headline: "Homemade veg Indian food, fresh every day",
    subhead:
      "Daily tiffins, small and big catering, and jaccha baccha food items. Call, WhatsApp, or DM to order.",
    images: [
      { src: "/images/post-5.jpg", alt: "Navratri special satvik meal", width: 1080, height: 1350 },
      { src: "/images/post-3.jpg", alt: "Gud gond ladoo with dry fruits", width: 1080, height: 1350 },
      { src: "/images/post-6.jpg", alt: "Thursday special Punjabi meal", width: 1080, height: 1350 },
    ],
    secondaryCta: { label: "See recent plates", href: "#gallery" },
  },

  highlights: [
    "Homemade veg Indian food",
    "Daily tiffins and catering",
    "Brampton and Mississauga",
    "Delivery and pickup available",
  ],

  about: {
    title: "Fresh, homemade, pure vegetarian",
    body: [
      "Narayan Rasoi prepares homemade vegetarian Indian food for Brampton and Mississauga. Daily tiffins, small and big catering, and jaccha baccha care items are made with festive homestyle flavour.",
      "Call or WhatsApp 437-979-1210, or send an Instagram DM to place your order. Delivery and pickup are available.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Gud gond ladoo special", width: 1080, height: 1350 },
  },

  menu: {
    label: "What we offer",
    title: "Tiffins and catering",
    intro: "Daily menus change with the season and festivals. Message for today's options and a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Call or message for today's menu and pricing.",
    groups: [
      {
        title: "Services",
        items: [
          { name: "Daily tiffins", description: "Fresh homemade veg Indian meals." },
          { name: "Small and big catering", description: "Party orders, puja, and festive gatherings." },
          { name: "Jaccha baccha food items", description: "Traditional care foods including gud gond ladoo." },
          { name: "Satvik and falahari meals", description: "Seasonal Navratri and festival specials." },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Navratri Wednesday special menu", caption: "Navratri Wednesday special", href: "https://www.instagram.com/p/DegCBSxFrOn/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1350, alt: "Gud gond ladoo with dry fruits", caption: "Gud gond ladoo", href: "https://www.instagram.com/p/DeapPzrlkae/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Navratri special satvik meal", caption: "Navratri special meal", href: "https://www.instagram.com/p/DeYY9kYFufb/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Thursday Punjabi special", caption: "Thursday Punjabi special", href: "https://www.instagram.com/p/Dd7v7Jplphw/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "Navratri Tuesday menu", caption: "Navratri Tuesday menu", href: "https://www.instagram.com/p/DeaojJjFltB/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "Satvik and falahari vrat menu", caption: "Satvik and falahari menu", href: "https://www.instagram.com/p/Dd2kYv9FhV0/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1350, alt: "Festive season catering", caption: "Festive catering", href: "https://www.instagram.com/p/DdQAvXuFomq/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Navratri special options", caption: "Navratri options", href: "https://www.instagram.com/p/Dedbp1rltiv/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "narayanrasoi21",
    embeds: [
      "https://www.instagram.com/p/DegCBSxFrOn/",
      "https://www.instagram.com/p/DeapPzrlkae/",
      "https://www.instagram.com/p/DeYY9kYFufb/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order by phone, WhatsApp, or DM",
    intro:
      "Call or WhatsApp to place a tiffin or catering order. Tap the button to copy a starter Instagram message.",
    dmMessage:
      "Hi Narayan Rasoi! I would like to order.\nDate needed:\nTiffin or catering:\nServings or guest count:\nPickup or delivery (Brampton / Mississauga):\n",
    links: [
      { label: "WhatsApp", href: "http://wa.me/+14379791210" },
    ],
    note: "Call or WhatsApp 437-979-1210. Delivery and pickup available in Brampton and Mississauga.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Call or WhatsApp 437-979-1210, or send an Instagram DM with your date, servings, and whether you need pickup or delivery." },
    { q: "Where do you deliver?", a: "We serve Brampton and Mississauga. Pickup is also available." },
    { q: "Do you do catering?", a: "Yes. We offer small and big catering for parties, puja, and festive gatherings." },
    { q: "Is the food vegetarian?", a: "Yes. All food is homemade pure vegetarian Indian cuisine, including satvik and falahari options for festivals." },
  ],

  contact: {
    area: "Brampton and Mississauga, Ontario",
    phone: "+1 437-979-1210",
    socials: [
      { label: "WhatsApp", href: "http://wa.me/+14379791210" },
    ],
  },

  seo: {
    title: "Narayan Rasoi | Homemade veg Indian tiffins in Brampton",
    description:
      "Homemade vegetarian Indian tiffins and catering in Brampton and Mississauga. Daily meals, festive specials, jaccha baccha items. Call or WhatsApp to order.",
    keywords: [
      "Indian tiffin Brampton",
      "veg catering Mississauga",
      "homemade Indian food Brampton",
      "Navratri food Mississauga",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
