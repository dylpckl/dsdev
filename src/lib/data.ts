import { StaticImageData } from "next/image";

// Images
import steamparty from "/public/images/steamparty.png";
import hubermandb from "/public/images/huberman-db.png";

// Bank Rec
import BankRec_Explorer from "/public/case-studies/bank-rec/legacy.png";
import BankRec_Spire from "/public/case-studies/bank-rec/spire.png";

// RapidPay
import RapidPay_Explorer from "/public/case-studies/rapidpay/legacy.png";
import RapidPay_Spire from "/public/case-studies/rapidpay/spire.png";

export type CaseStudy = {
  title: string;
  subtitle: string;
  slug: string;
  status: "completed" | "coming soon";
  explorerImage: StaticImageData;
  spireImage: StaticImageData;
};

export type Project = {
  title: string;
  subtitle: string;
  description?: string;
  slug?: string;
  status: "deployed" | "proof of concept" | "coming soon" | "in development";
  image?: StaticImageData;
  tags: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Bank Reconcilation",
    subtitle: "Redesigning an accountant's critical monthly task.",
    slug: "/work/bank-rec",
    status: "completed",
    explorerImage: BankRec_Explorer,
    spireImage: BankRec_Spire,
  },
  // {
  //   title: "Select Tenants by Monthly Billing",
  //   subtitle:
  //     "Redesigning the experience of entering tenant payments into property management software.",
  //   slug: "/work/cbmv",
  //   status: "coming soon",
  //   explorerImage: BankRec_Explorer,
  //   spireImage: BankRec_Spire,
  // },
  {
    title: "RapidPay",
    subtitle:
      "Streamlining a complex form used to validate invoices scanned by OCR software.",
    slug: "/work/rapidpay",
    status: "coming soon",
    explorerImage: RapidPay_Explorer,
    spireImage: RapidPay_Spire,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "www.steamparty.io",
    subtitle:
      "When a couple of friends and I couldn't easily find which Steam games we all had in common, it was time for us to build the solution ourselves.",
    description:
      "SteamParty is a web app to find Steam games that both you and your friends own.",
    slug: "https://www.steamparty.io",
    status: "deployed",
    image: steamparty,
    tags: ["React", "React Query", "Custom Backend"],
  },
  {
    title: "huberman-db",
    subtitle:
      "Simple interface that allows filtering on YouTube videos based on embedded tags. Fetching from the YouTube Data API, videos are stored in a Supabase PostgreSQL instance and then exposed to a search bar with autocomplete.",
    description: "",
    slug: "https://github.com/dylpckl/huberman-db",
    status: "proof of concept",
    image: hubermandb,
    tags: ["PostgreSQL", "API", "Next.js v13", "Supabase"],
  },
  {
    title: "encounter+",
    subtitle:
      "A customizable dungeon master screen that allows you to easily run a quality tabletop roleplaying session. Add the widgets you need for any specific encounter, including a Combat Tracker, Music Player, NPC Generator, and more.",
    description: "",
    slug: "https://github.com/dylpckl/encounter-plus",
    status: "in development",
    tags: ["Next.js v13", "API", "CRUD", "dungeons & dragons", "dashboard"],
  },
];
