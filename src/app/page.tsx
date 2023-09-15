import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Components
import VerticalText from "@/components/VerticalText";
import TagGroup from "@/components/TagGroup";
import { Socials } from "@/components/SocialLink";
import DividerWithText from "@/components/DividerWithText";

// Images
import SelectTenantsMonthlyBilling from "../../public/images/Batch Creation Form.png";
import RapidPay from "../../public/images/RapidPay - Exceptionv5.png";
import steamparty from "../../public/images/steamparty.png";
import hubermandb from "../../public/images/huberman-db.png";

type Project = {
  title: string;
  subtitle: string;
  link?: string;
  status: "deployed" | "proof of concept" | "coming soon" | "in development";
  image?: StaticImageData;
  tags: string[];
};

const CASE_STUDIES: Project[] = [
  {
    title: "Select Tenants by Monthly Billing",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "coming soon",
    image: SelectTenantsMonthlyBilling,
    tags: ["ui design", "case study", "form design", "segmented control"],
  },
  {
    title: "RapidPay",
    subtitle:
      "Streamlining a complex form used to validate invoices scanned by OCR software.",
    status: "coming soon",
    image: RapidPay,
    tags: [
      "ui design",
      "case study",
      "user journey",
      "form design",
      "accordion",
    ],
  },
];

const APPS: Project[] = [
  {
    title: "SteamParty",
    subtitle:
      "Web app to find Steam games that both you and your friends own. After connecting your Steam account, the app populates your friend list so that you can build a party. You then execute the query to find the games that everyone in the party owns. If you can't decide what to play, you can use 'the pick for us' feature.",
    link: "www.steamparty.io",
    status: "deployed",
    image: steamparty,
    tags: ["React", "React Query", "Custom Backend"],
  },
  {
    title: "huberman-db",
    subtitle:
      "Simple interface that allows filtering on YouTube videos based on embedded tags. Fetching from the YouTube Data API, videos are stored in a Supabase PostgreSQL instance and then exposed to a search bar with autocomplete.",
    link: "https://github.com/dylpckl/huberman-db",
    status: "proof of concept",
    image: hubermandb,
    tags: ["PostgreSQL", "API", "Next.js v13", "Supabase"],
  },
  {
    title: "encounter+",
    subtitle:
      "A customizable dungeon master screen that allows you to easily run a quality tabletop roleplaying session. Add the widgets you need for any specific encounter, including a Combat Tracker, Music Player, NPC Generator, and more.",
    link: "https://github.com/dylpckl/encounter-plus",
    status: "in development",
    tags: ["Next.js v13", "API", "CRUD", "dungeons & dragons", "dashboard"],
  },
];

const AppCard = ({ app }: { app: Project }) => {
  return (
    <a
      href={app.link}
      target="_blank"
      className="grid grid-cols-2 sm:gap-12 md:gap-8 min-h-[120px] text-slate-200 bg-slate-700/70 hover:bg-slate-700 p-4 rounded-lg transition-all hover:ring-2 ring-teal-300 scale-95 hover:scale-100 ease-out duration-200"
      // flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75
    >
      {app.image && (
        <Image
          src={app.image}
          alt="Picture of www.steamparty.io user interface"
          className="rounded-lg mr-4 col-span-1"
        />
      )}

      <div
        // className={clsx("flex flex-col", {
        //   "col-span-1": app.image !== null,
        //   "col-span-2": app.image === null,
        // })}
        className={app.image ? "col-span-1" : "col-span-2"}
      >
        <span className="flex items-center font-medium justify-between">
          <div className="flex items-center gap-2">
            {app.title}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
          <span
            className={clsx(
              "ml-4 rounded-full px-3 py-1 text-xs font-medium leading-5 uppercase",
              {
                "bg-sky-500/30 text-sky-200": app.status === "proof of concept",
                "bg-teal-400/10 text-teal-300": app.status === "deployed",
                "bg-slate-600 text-slate-200": app.status === "coming soon",
                "bg-purple-500/30 text-purple-200":
                  app.status === "in development",
              }
            )}
          >
            {app.status}
          </span>
        </span>

        <p className="text-sm mt-2">{app.subtitle}</p>
        <div className={app.image !== null ? "mt-auto" : "mt-6"}>
          <TagGroup tags={app.tags} />
        </div>
      </div>
    </a>
  );
};

const CaseStudyCard = ({ caseStudy }: { caseStudy: Project }) => {
  return (
    <article className="col-span-6">
      <Link
        href="/#"
        className="flex group w-full sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100  hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-200"
      >
        <div className="flex flex-col w-1/3">
          <div className="z-10 flex gap-2 text-3xl">
            <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              {caseStudy.title}
            </h2>
          </div>
          <p className="text-lg mt-6">{caseStudy.subtitle}</p>
          <div className="mt-6">
            {caseStudy.tags && <TagGroup tags={caseStudy.tags} />}
          </div>

          {/* Call to Action */}
          <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300 motion-reduce:transition-none">
            <span className="font-mono text-xl font-light group-hover:text-teal-300 uppercase">
              coming soon
            </span>
            {/* <span
              className={clsx(
                "ml-4 rounded-full px-3 py-1 text-xs font-medium leading-5 uppercase",
                {
                  "bg-sky-500/30 text-sky-200":
                    caseStudy.status === "proof of concept",
                  "bg-teal-400/10 text-teal-300":
                    caseStudy.status === "deployed",
                  "bg-slate-600 text-slate-200":
                    caseStudy.status === "coming soon",
                  "bg-purple-500/30 text-purple-200":
                    caseStudy.status === "in development",
                }
              )}
            >
              {caseStudy.status}
            </span> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg> */}
          </div>
        </div>

        {/* Right */}
        <div className="relative w-2/3 overflow-hidden">
          {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
          {caseStudy.image && (
            <Image
              src={caseStudy.image}
              alt="test"
              quality={100}
              // height={600}
              width={1000}
              // sizes="100vw"
              // objectFit="cover"
              className="rounded object-center -z-10"
            />
          )}

          {/* <Image
            src={project.image}
            alt="test"
            quality={100}
            // height={600}
            width={1000}
            // sizes="100vw"
            // objectFit="cover"
            className="rounded object-center -z-10"
          /> */}
        </div>
      </Link>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:px-4">
        {/* Hero */}
        <section className="flex flex-col gap-12 p-6 lg:p-24 min-h-[30vh]">
          <h1 className="text-6xl font-bold font-mono text-teal-400">
            Hey there!
          </h1>

          <section className="flex flex-col gap-6 text-slate-300 text-lg">
            <p className="font-sans text-2xl leading-relaxed tracking-tight ">
              I&apos;m{" "}
              <span className="font-medium text-slate-100 ">Dylan Smith</span>,
              a designer & developer focused on handcrafting pixel perfect
              interfaces.{" "}
              <span className="mt-4">
                I specialize in creating design systems and advocating for the
                best possible user experience.{" "}
              </span>
              Currently leading design &#64;{" "}
              <a
                className="font-medium text-slate-100 hover:text-teal-300 hover:underline"
                href="https://multidataservices.com/"
                target="_blank"
              >
                MDS Property Management Software
              </a>
              .
            </p>
            <p>
              Welcome to my tiny slice of the internet &mdash;{" "}
              <Link
                href="/about"
                className="text-slate-100 font-medium underline hover:text-teal-300 transition-all hover:underline"
              >
                read more about me
              </Link>{" "}
              or{" "}
              <Link
                href="#case-studies"
                className="text-slate-100 font-medium underline hover:text-teal-300 transition-all hover:underline"
              >
                check out my work below
              </Link>
              .
            </p>
            <p>Made with (lots) of coffee on Long Island, NY.</p>
          </section>
          <div className="">
            <Socials />
          </div>
        </section>

        {/* Case Studies */}
        <div className="snap-y scroll-py-52">
          <section
            id="case-studies"
            className="flex relative mt-12 px-4 snap-start"
          >
            <VerticalText text="case studies" />
            <div className="mx-4 md:mx-16 flex flex-col gap-20 auto-rows-min w-full">
              {/* <DividerWithText text="case studies" /> */}
              {CASE_STUDIES.map((project, idx) => (
                <Fragment key={idx}>
                  <CaseStudyCard caseStudy={project} />
                </Fragment>
              ))}
            </div>
          </section>
        </div>

        {/* Apps */}
        <section
          id="projects"
          className="flex relative mt-48 px-4"
        >
          <VerticalText text="projects" />
          <div className="mx-16 flex flex-col gap-20 auto-rows-min w-full">
            {/* <DividerWithText text="case studies" /> */}
            {APPS.map((app, idx) => (
              <Fragment key={idx}>
                <AppCard app={app} />
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
