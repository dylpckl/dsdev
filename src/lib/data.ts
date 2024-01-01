import { StaticImageData } from "next/image";

// Images
import SelectTenantsMonthlyBilling from "@/images/Batch Creation Form.png";
import RapidPay from "@/images/RapidPay - Exceptionv5.png";
import steamparty from "@/images/steamparty.png";
import hubermandb from "@/images/huberman-db.png";

import Explorer from "/projects/dylansmithdev/public/projects/bank-rec/Explorer.png";
import Spire from "/projects/dylansmithdev/public/projects/bank-rec/Spire.png";

// Bank Rec
import BankRec_Explorer from "/public/images/bank-rec/Explorer.png";
import BankRec_Spire from "/public/images/bank-rec/Spire.png";

export type CaseStudy = {
  title: string;
  subtitle: string;
  slug: string;
  status: "deployed" | "proof of concept" | "coming soon" | "in development";
  explorerImage: StaticImageData;
  spireImage: StaticImageData;
  tags: string[];
};

// export type Project = {
//   title: string;
//   subtitle: string;
//   link?: string;
//   status: "deployed" | "proof of concept" | "coming soon" | "in development";
//   explorerImage: StaticImageData;
//   spireImage: StaticImageData;
//   tags: string[];
// };

// export type Project = {
//   title: string;
//   subtitle: string;
//   link?: string;
//   status: "deployed" | "proof of concept" | "coming soon" | "in development";
//   image?: StaticImageData;
//   tags: string[];
// };

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Bank Reconcilation",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    slug: "/bank-rec",
    status: "coming soon",
    explorerImage: BankRec_Explorer,
    spireImage: BankRec_Spire,
    tags: ["ui design", "case study", "form design", "segmented control"],
  },
  // {
  //   title: "Select Tenants by Monthly Billing",
  //   subtitle:
  //     "Redesigning the experience of entering tenant payments into property management software.",
  //   status: "coming soon",

  //   explorerImage: SelectTenantsMonthlyBilling,
  //   spireImage: SelectTenantsMonthlyBilling,
  //   tags: ["ui design", "case study", "form design", "segmented control"],
  // },
  // {
  //   title: "RapidPay",
  //   subtitle:
  //     "Streamlining a complex form used to validate invoices scanned by OCR software.",
  //   status: "coming soon",
  //   explorerImage: RapidPay,
  //   spireImage: RapidPay,
  //   tags: [
  //     "ui design",
  //     "case study",
  //     "user journey",
  //     "form design",
  //     "accordion",
  //   ],
  // },
];

// export const CASE_STUDIES: Project[] = [
//   {
//     title: "Bank Reconcilation",
//     subtitle:
//       "Redesigning the experience of entering tenant payments into property management software.",
//     status: "coming soon",
//     explorerImage: Explorer,
//     spireImage: Spire,
//     tags: ["ui design", "case study", "form design", "segmented control"],
//   },
//   {
//     title: "Select Tenants by Monthly Billing",
//     subtitle:
//       "Redesigning the experience of entering tenant payments into property management software.",
//     status: "coming soon",

//     explorerImage: SelectTenantsMonthlyBilling,
//     spireImage: SelectTenantsMonthlyBilling,
//     tags: ["ui design", "case study", "form design", "segmented control"],
//   },
//   {
//     title: "RapidPay",
//     subtitle:
//       "Streamlining a complex form used to validate invoices scanned by OCR software.",
//     status: "coming soon",
//     explorerImage: RapidPay,
//     spireImage: RapidPay,
//     tags: [
//       "ui design",
//       "case study",
//       "user journey",
//       "form design",
//       "accordion",
//     ],
//   },
// ];

// export const PROJECTS: Project[] = [
//   {
//     title: "SteamParty",
//     subtitle:
//       "Web app to find Steam games that both you and your friends own. After connecting your Steam account, the app populates your friend list so that you can build a party. You then execute the query to find the games that everyone in the party owns. If you can't decide what to play, you can use 'the pick for us' feature.",
//     link: "www.steamparty.io",
//     status: "deployed",
//     image: steamparty,
//     tags: ["React", "React Query", "Custom Backend"],
//   },
//   {
//     title: "huberman-db",
//     subtitle:
//       "Simple interface that allows filtering on YouTube videos based on embedded tags. Fetching from the YouTube Data API, videos are stored in a Supabase PostgreSQL instance and then exposed to a search bar with autocomplete.",
//     link: "https://github.com/dylpckl/huberman-db",
//     status: "proof of concept",
//     image: hubermandb,
//     tags: ["PostgreSQL", "API", "Next.js v13", "Supabase"],
//   },
//   {
//     title: "encounter+",
//     subtitle:
//       "A customizable dungeon master screen that allows you to easily run a quality tabletop roleplaying session. Add the widgets you need for any specific encounter, including a Combat Tracker, Music Player, NPC Generator, and more.",
//     link: "https://github.com/dylpckl/encounter-plus",
//     status: "in development",
//     tags: ["Next.js v13", "API", "CRUD", "dungeons & dragons", "dashboard"],
//   },
// ];
