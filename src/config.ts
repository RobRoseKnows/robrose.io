import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.robrose.io/",
  author: "Rob Rose",
  desc: "My technical blog and creative writing.",
  title: "Rob Rose",
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
    name: "Github",
    href: "https://github.com/RobRoseKnows",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/RobRoseKnows",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/robertpaulrose",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
