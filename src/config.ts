import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://growspr.ing", // replace this with your deployed domain
  author: "Ben Robertson",
  desc: "Build your Instagram audience. Fast. Faster than what you're currently using.",
  title: "GrowSpring",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61554958941397",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/trygrowspring/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/100659238/admin/feed/posts/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@growspr.ing",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/trygrowspring",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCnFqLgMYOaw0clf81cMhqpg",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },

  // {
  //   name: "Pinterest",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
];
