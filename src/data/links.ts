export type CardLink = {
  title: string;
  url: string;
  desc: string;
  logo: string;        // e.g. "/logos/eztoria.svg"
  buttonLabel?: string;
  rel?: string;        // "nofollow sponsored" for affiliates if you want
};

export type FaqItem = {
  q: string;
  a: string[];         // paragraphs
};

export const projects: CardLink[] = [
  {
    title: "ROMANPORUBSKY.COM",
    url: "https://romanporubsky.com/",
    desc: "Explore my books, writing, and creative projects. A personal hub for stories, updates, and more.",
    logo: "/logos/romanporubsky.svg",
    buttonLabel: "ROMANPORUBSKY.COM",
  },
  {
    title: "EZTORIA",
    url: "https://www.eztoria.eu/",
    desc: "Helping entrepreneurs across Europe set up Estonian companies easily, with full-service or free DIY guides.",
    logo: "/logos/eztoria.svg",
    buttonLabel: "EZTORIA.EU",
  },
  {
    title: "WEBYA",
    url: "https://www.webya.eu/",
    desc: "Modern websites and graphic design done right — tailored for creators, startups, and small businesses.",
    logo: "/logos/webya.svg",
    buttonLabel: "WEBYA.EU",
  },
  {
    title: "KINDAFORKED",
    url: "https://www.kindaforked.com/",
    desc: "Honest, witty restaurant reviews and recipes with a twist! A food blog that doesn’t take itself too seriously.",
    logo: "/logos/kindaforked.svg",
    buttonLabel: "KINDAFORKED.COM",
  },
];

export const partners: CardLink[] = [
  {
    title: "PROTON",
    url: "https://go.getproton.me/aff_c?offer_id=43&aff_id=11079",
    desc: "Secure email, VPN, and cloud storage in one. Privacy by default.",
    logo: "/logos/proton.svg",
    buttonLabel: "PROTON.ME",
    rel: "nofollow sponsored",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "What is ARPO.cc?",
    a: [
      "ARPO.cc is a personal hub for everything I work on — writing, web projects, tools I rely on, and the various side projects that somehow all fit under one brand.",
      "The idea is simple: one place that points you to the right place.",
    ],
  },
  {
    q: "How can I join your platform?",
    a: [
      "Short answer: you can't, and that's intentional.",
      "The Projects section features only websites I own and operate under ARPO NETWORK — it's not open to outside brands.",
      "The Partners section is curated. If something appears there, it's because I've used it myself and trust it enough to recommend — not because someone paid for a spot.",
    ],
  },
  {
    q: "Are partner links affiliate links?",
    a: [
      "Some are. If you purchase through those links, I may earn a commission at no extra cost to you.",
    ],
  },
]