export type NavConfigItem = {
  key:
    | "raffle"
    | "promo"
    | "lights"
    | "landmark"
    | "performance"
    | "media"
    | "transportation"
    | "contact";
  href: string;
  titleKey: string;
  color: string;
};

export const navConfig: NavConfigItem[] = [
  {
    key: "raffle",
    href: "#raffle",
    titleKey: "header.nav.raffle",
    color: "#ff7628",
  },
  {
    key: "promo",
    href: "#promo",
    titleKey: "header.nav.promo",
    color: "#E3007F",
  },
  {
    key: "lights",
    href: "#lights",
    titleKey: "header.nav.lights",
    color: "#001A7D",
  },
  {
    key: "landmark",
    href: "#landmark",
    titleKey: "header.nav.landmark",
    color: "#ff7628",
  },
  {
    key: "performance",
    href: "#performance",
    titleKey: "header.nav.performance",
    color: "#001A7D",
  },
  {
    key: "media",
    href: "#media",
    titleKey: "header.nav.media",
    color: "#E3007F",
  },
  {
    key: "transportation",
    href: "#transportation",
    titleKey: "header.nav.transportation",
    color: "#FF7628",
  },
  {
    key: "contact",
    href: "#contact",
    titleKey: "header.nav.contact",
    color: "#001A7D",
  },
];
