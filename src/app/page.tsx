// External
import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Components
import VerticalText from "@/components/VerticalText";
import TagGroup from "@/components/TagGroup";
import { Socials, SocialLink } from "@/components/SocialLink";
import DividerWithText from "@/components/DividerWithText";
import CastStudyCard from "@/components/CaseStudyCard";

import { Project } from "@/lib/constants/projects";
import { CASE_STUDIES, PROJECTS } from "@/lib/constants/projects";

const Card = ({ project }: { project: Project }) => {
  return (
    <article className="">
      <Link
        href="/#"
        className="flex group w-full sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100  hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-200"
      >
        <Image
          src={project.image}
          alt="test"
          // quality={100}
          // height={600}
          fill
          // width={1000}
          // sizes="100vw"
          // objectFit="cover"
          style={{
            objectFit: "cover",
          }}
          className="rounded object-center -z-10"
        />

        {/* <div className="flex flex-col w-1/3">
          <div className="z-10 flex gap-2 text-3xl">
            <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              title
            </h2>
          </div>
          <p className="text-lg mt-6">desc</p>
          <div className="mt-6">
          </div>
          <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300 motion-reduce:transition-none">
            <span className="font-mono text-xl font-light group-hover:text-teal-300 uppercase">
              coming soon
            </span>
          </div>
        </div> */}
      </Link>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:px-4">
        {/* Hero */}
        <section className="flex flex-col gap-12 py-24 px-48 min-h-[30vh]">
          <h1 className="text-4xl font-bold font-sans leading-relaxed text-teal-400">
            {/* Hey there! I&apos;m Dylan, a <span className="font-serif">designer</span> & <span className="font-mono">{`<`}developer{`/>`}</span> based in New York. */}
            Dylan Smith &mdash; Designer &amp; Developer
          </h1>
          {/* <div className="flex flex-col gap-6 text-slate-300 text-lg"> */}
          <p className="font-sans text-xl text-slate-300 leading-relaxed tracking-tight ">
            <span className="mt-4">
              I specialize in creating design systems and advocating for the
              best possible user experience.{" "}
            </span>
            I'm currently leading the design effort at{" "}
            <a
              className="font-medium text-slate-100 hover:text-teal-300 hover:underline"
              href="https://multidataservices.com/"
              target="_blank"
            >
              MDS Property Management Software
            </a>
            .
          </p>
          <div className="flex gap-5">
            <button
              type="button"
              className="rounded-md bg-white w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Design Case Studies
            </button>

            <button
              type="button"
              className="rounded-md bg-white  w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Dev Projects
            </button>

            <button
              type="button"
              className="rounded-md bg-white w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Read more about me
            </button>
          </div>

          {/* <p>
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
            </p> */}
          {/* <p>Made with (lots) of coffee on Long Island, NY.</p> */}
          {/* </div> */}
          <div className="flex justify-between items-center text-slate-300">
            <p className="font-mono text-sm">
              Made with (lots) of coffee on Long Island, NY.
            </p>
            <div className="flex gap-5">
              <SocialLink site="github" />

              <SocialLink site="linkedin" />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {/* <div className="snap-y scroll-py-52"> */}
        <section
          id="case-studies"
          className="flex relative mt-12 px-4 snap-start"
        >
          <VerticalText text="case studies" />
          <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-20 auto-rows-min w-full">
            {CASE_STUDIES.map((caseStudy, idx) => (
              <CastStudyCard
                project={caseStudy}
                key={caseStudy.title}
              />
            ))}
          </div>
        </section>
        {/* </div> */}

        {/* Projects */}
        <section
          id="case-studies"
          className="flex relative mt-64 px-4 snap-start"
        >
          <VerticalText text="dev projects" />
          <div className="mx-4 md:mx-16 flex flex-col gap-20 auto-rows-min w-full">
            {CASE_STUDIES.map((caseStudy, idx) => (
              <CastStudyCard
                project={caseStudy}
                key={caseStudy.title}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

{
  /* <div className="flex flex-col gap-6 text-slate-300 text-lg">
<p className="font-sans text-2xl leading-relaxed tracking-tight ">
  I&apos;m{" "}
  <span className="font-medium text-slate-100 ">Dylan Smith</span>,
  a designer & developer focused on handcrafting pixel perfect
  interfaces.{" "}
  <span className="mt-4">
    I specialize in creating design systems and advocating for the
    best possible user experience.{" "}
  </span>
  Currently leading design at{" "}
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
</div> */
}
