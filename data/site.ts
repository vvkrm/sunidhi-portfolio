export const site = {
  name: "Sunidhi Kumari",
  url: "https://sunidhi.veervikram.top",
  seo: {
    title: "Sunidhi Kumari — Future Doctor",
    description:
      "Sunidhi Kumari is an MBBS student at Radha Govind Medical College, Meerut — a future doctor, proud BTS ARMY, and owner of this cute little corner of the internet.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "ARMY Corner", href: "#army" },
    { label: "Gallery", href: "#gallery" },
  ],
  hero: {
    eyebrow: "hello, welcome to my corner ♡",
    greeting: "Hi, I'm",
    tagline: "MBBS student · Future doctor",
    subline: "Pursuing MBBS at Radha Govind Medical College, Meerut",
    badges: [
      { icon: "stethoscope", label: "future doctor" },
      { icon: "heart", label: "certified ARMY" },
    ],
    ctas: [
      { label: "My journey", href: "#journey", primary: true },
      { label: "ARMY corner", href: "#army", primary: false },
    ],
    photoAlt:
      "Sunidhi Kumari smiling in front of India Gate, New Delhi, lit up in tricolour at night",
  },
  about: {
    heading: "A little about me",
    paragraphs: [
      "Hi! I'm Sunidhi Kumari, an MBBS student at Radha Govind Medical College, Meerut — and a future doctor in the making.",
      "When I'm not buried in my medical books, I'm a proud BTS ARMY, running on purple hearts, late-night study playlists, and big dreams of healing people one day.",
    ],
  },
  journey: {
    heading: "My journey",
    subheading: "No dates, just dreams — in progress.",
    stops: [
      {
        icon: "dream",
        tag: "where it began",
        title: "The Dream",
        text: "Fell in love with the idea of healing people — of making someone feel better. And never looked back.",
      },
      {
        icon: "grind",
        tag: "in progress",
        title: "The Grind",
        text: "MBBS at Radha Govind Medical College, Meerut. Long nights and endless notes — taking it one chapter at a time.",
      },
      {
        icon: "future",
        tag: "coming soon",
        title: "The Future",
        text: "Dr. Sunidhi Kumari. White coat, kind heart, ready to heal the world.",
      },
    ],
  },
  army: {
    heading: "Proud BTS ARMY · Borahae",
    copy: "Powered by purple hearts and late-night study playlists.",
    chips: ["borahae", "purple hearts", "study playlists", "ARMY forever"],
    plushieAlt:
      "A cute pastel-purple teddy bear plushie wearing a knit scarf",
    plushieCaption: "my study buddy (not official merch!)",
  },
  gallery: {
    heading: "Little moments",
    photos: [
      {
        src: "/images/sunidhi.jpg",
        caption: "India Gate nights",
        alt: "Sunidhi Kumari smiling at India Gate, New Delhi at night",
      },
    ],
    emptySlots: 2,
    emptyCaption: "more memories coming soon",
  },
  footer: {
    line: "Made with love for Sunidhi",
    credit: "built with care by Veer",
  },
  marquee: [
    "borahae",
    "future doctor",
    "study buddy",
    "purple hearts",
    "certified ARMY",
    "study playlists",
    "ARMY forever",
  ],
} as const;

export type Site = typeof site;
