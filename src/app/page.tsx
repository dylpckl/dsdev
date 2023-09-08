import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import VerticalText from "@/components/VerticalText";
import TagGroup from "@/components/TagGroup";
import Socials from "@/components/SocialLink";
import DividerWithText from "@/components/DividerWithText";

// Images
import SelectTenantsMonthlyBilling from "../../public/images/Batch Creation Form.png";
import RapidPay from "../../public/images/RapidPay - Exceptionv5.png";
import steamparty from "../../public/images/steamparty.png";

type Project = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  tags: string[];
};

const CASE_STUDIES = [
  {
    title: "Select Tenants by Monthly Billing",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "shipped!",
    image: SelectTenantsMonthlyBilling,
    tags: ["ui design", "case study", "form design"],
  },
  {
    title: "RapidPay",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "shipped!",
    image: RapidPay,
    tags: ["ui design", "case study", "accordion", "form design", "accordion"],
  },
];

const APPS = [
  {
    title: "www.steamparty.io",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "shipped!",
    image: SelectTenantsMonthlyBilling,
    tags: ["ui design", "case study", "form design"],
  },
  {
    title: "RapidPay",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "concept",
    image: RapidPay,
    tags: ["ui design", "case study", "accordion", "form design", "accordion"],
  },
  {
    title: "encounter+",
    subtitle:
      "Redesigning the experience of entering tenant payments into property management software.",
    status: "coming soon",
    image: RapidPay,
    tags: ["ui design", "case study", "accordion", "form design", "accordion"],
  },
];

const AppCard = ({ app }: { app: Project }) => {
  return (
    <a
      href="https://www.steamparty.io"
      target="_blank"
      className="grid grid-cols-2 sm:gap-8 md:gap-4 text-slate-200 bg-slate-700/40 hover:bg-slate-700 p-4 rounded-lg transition-all hover:ring-2 ring-teal-300"
      // flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75
    >
      <Image
        src={steamparty}
        alt="Picture of www.steamparty.io user interface"
        className="rounded-lg mr-4 col-span-1"
      />

      <div className="col-span-1 flex flex-col">
        <span className="flex items-center font-medium">
          www.steamparty.io
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
        </span>

        <p className="text-sm mt-2">
          Web app for finding Steam games that both you and your friends own.
          After connecting your Steam account, the app populates your friend
          list so that you can build a party. Then execute the query to find any
          games that everyone in the party owns. Also includes a &ldquo;pick for
          us&ldquo; feature if you can&apos;t decide.
        </p>
        <TagGroup tags={["React", "React Query", "Tailwind CSS"]} />
      </div>
    </a>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="col-span-6">
      <Link
        href="/tenant-payment-form"
        className=" flex group w-full gap-2 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg"
      >
        <div className="flex flex-col w-1/3">
          <div className="z-10 flex gap-2 text-3xl">
            <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              {project.title}
            </h2>
          </div>
          <p className="text-lg mt-6">{project.subtitle}</p>
          <div className="mt-6">
            {project.tags && <TagGroup tags={project.tags} />}
          </div>

          {/* Call to Action */}
          <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300 motion-reduce:transition-none">
            <span className="font-mono text-xl font-light group-hover:text-teal-300">
              View Project
            </span>
            <svg
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
            </svg>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-2/3 overflow-hidden">
          {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
          <Image
            src={project.image}
            alt="test"
            quality={100}
            // height={600}
            width={1000}
            // sizes="100vw"
            // objectFit="cover"
            className="rounded object-center -z-10"
          />
        </div>
      </Link>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-4">
        {/* Hero */}
        <section className="flex flex-col gap-12 p-24 min-h-[30vh]">
          <h1 className="text-6xl font-bold font-mono text-teal-400">
            Hey there!
          </h1>

          <section className="flex flex-col gap-6 text-slate-300 text-lg">
            <p className="font-sans text-2xl leading-relaxed tracking-tight">
              I&apos;m{" "}
              <span className="font-medium text-slate-100">Dylan Smith</span>, a
              designer & developer focused on handcrafting pixel perfect
              interfaces. I specialize in creating design systems and advocating
              for the best possible user experience. Currently leading design
              &#64;{" "}
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
              Welcome to my tiny slice of the internet,
              <Link
                href="/about"
                className="text-slate-100 font-medium underline hover:text-teal-300 transition-all hover:underline"
              >
                Read more about me
              </Link>{" "}
              or check out my work below 👋
            </p>
            <p>Made with (lots) of coffee on Long Island, NY.</p>
          </section>
          <div className="">
            <Socials />
          </div>
        </section>
        {/* Case Studies */}
        <section
          id="projects"
          className="flex relative mt-12 px-4"
        >
          <VerticalText text="projects" />
          <div className="mx-16 flex flex-col gap-20 auto-rows-min w-full">
            <DividerWithText text="case studies" />
            {CASE_STUDIES.map((project, idx) => (
              <Fragment key={idx}>
                <ProjectCard project={project} />
              </Fragment>
            ))}

            <DividerWithText text="apps" />
            <section className="col-span-3">
              <div className="">
                {/* Project Grid */}
                <div className="w-full gap-5">
                  {/* Project Card */}
                  <a
                    href="https://www.steamparty.io"
                    target="_blank"
                    className="grid grid-cols-2 sm:gap-8 md:gap-4 text-slate-200 bg-slate-700/40 hover:bg-slate-700 p-4 rounded-lg transition-all hover:ring-2 ring-teal-300"
                    // flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75
                  >
                    <Image
                      src={steamparty}
                      alt="Picture of www.steamparty.io user interface"
                      className="rounded-lg mr-4 col-span-1"
                    />

                    <div className="col-span-1 flex flex-col">
                      <span className="flex items-center font-medium">
                        www.steamparty.io
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
                      </span>

                      <p className="text-sm mt-2">
                        Web app for finding Steam games that both you and your
                        friends own. After connecting your Steam account, the
                        app populates your friend list so that you can build a
                        party. Then execute the query to find any games that
                        everyone in the party owns. Also includes a &ldquo;pick
                        for us&ldquo; feature if you can&apos;t decide.
                      </p>
                      <TagGroup
                        tags={["React", "React Query", "Tailwind CSS"]}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

// {/* <article className="col-span-6">
// <Link
//   href="/tenant-payment-form"
//   className=" flex group w-full gap-2 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg"
// >
//   <div className="flex flex-col w-1/3">
//     <div className="z-10 flex gap-2 text-3xl">
//       <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
//         Tenant Payment Form
//       </h2>
//       {/* <span className="text-slate-400 text-2xl transition-transform group-hover:translate-x-2">
//       {`//`}
//     </span> */}
//       {/* <div className="z-10 flex items-center mr-2 motion-reduce:transition-none">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="ml-1 w-6 h-6 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//       />
//     </svg>
//   </div> */}
//     </div>
//     <p className="text-lg mt-6">
//       A complex form to accept and apply a tenants bill payment.
//     </p>
//     <div className="mt-6">
//       {projectTags && <TagGroup tags={projectTags} />}
//     </div>

//     {/* Call to Action */}
//     <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300  motion-reduce:transition-none">
//       <span className="font-mono text-xl font-light group-hover:text-teal-300">
//         View Project
//       </span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//         />
//       </svg>
//     </div>
//   </div>

//   {/* Right */}
//   <div className="relative w-2/3 overflow-hidden">
//     {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
//     <Image
//       src={RapidPay}
//       alt="test"
//       quality={100}
//       // height={600}
//       width={1000}
//       // sizes="100vw"
//       // objectFit="cover"
//       className="rounded object-center -z-10"
//     />
//   </div>
// </Link>
// </article>

// <article className="col-span-6">
// <Link
//   href="/"
//   className="flex group w-full gap-2 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/10 drop-shadow-lg"
// >
//   <div className="flex flex-col w-1/3">
//     <div className="z-10 flex gap-2 text-3xl">
//       <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
//         Invoice Validation Form
//       </h2>
//       {/* <span className="text-slate-400 text-2xl transition-transform group-hover:translate-x-2">
//       {`//`}
//     </span> */}
//       {/* <div className="z-10 flex items-center mr-2 motion-reduce:transition-none">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="ml-1 w-6 h-6 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//       />
//     </svg>
//   </div> */}
//     </div>
//     <p className="text-lg mt-2">A complex form</p>
//     <div className="mt-6">
//       {projectTags && <TagGroup tags={projectTags} />}
//     </div>

//     {/* Call to Action */}
//     <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300  motion-reduce:transition-none">
//       <span className="font-mono font-light group-hover:text-teal-300">
//         View Project
//       </span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//         />
//       </svg>
//     </div>
//   </div>

//   <div className="relative w-2/3 overflow-hidden">
//     {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
//     <Image
//       src={RapidPay}
//       alt="test"
//       quality={100}
//       sizes="(max-width: 500px) 100vw"
//       // height={1000}
//       // width={1000}
//       // sizes="100vw"
//       // objectFit="cover"
//       className="rounded object-right -z-10"
//     />
//   </div>
// </Link>
// </article> */}
