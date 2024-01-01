// External
import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Components
import VerticalText from "@/components/VerticalText";
import TagGroup from "@/components/TagGroup";
import { Socials, SocialLink } from "@/components/SocialLink";
import CaseStudyCard from "@/components/CaseStudyCard";
import DividerWithText from "@/components/DividerWithText";

// Data
import { CASE_STUDIES } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col gap-12 py-24 px-48 min-h-[30vh]">
        <h1 className="text-4xl font-bold font-sans leading-relaxed text-teal-400">
          Dylan Smith &mdash; Designer &amp; Developer
        </h1>
        <p className="font-sans text-xl text-slate-300 leading-relaxed tracking-tight ">
          <span className="mt-4">
            I specialize in creating design systems and advocating for the best
            possible user experience.{" "}
          </span>
          I&apos;m currently leading the design effort at{" "}
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
      <section
        id="case-studies"
        className="flex relative mt-12 px-4"
      >
        <VerticalText
          // caption="DSGN"
          text="case studies"
        />
        <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-20 w-full">
          {CASE_STUDIES.map((caseStudy, index) => (
            <>
              <div className="flex flex-col">
                <DividerWithText text={`dsgn.0${index + 1}`} />
                <CaseStudyCard
                  caseStudy={caseStudy}
                  key={caseStudy.title}
                />
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Projects */}
      {/* <section
        id="case-studies"
        className="flex relative mt-64 px-4 "
      >
        <VerticalText
          caption="DEV"
          text="projects"
        />
        <div className="mx-4 md:mx-16 flex flex-col gap-20 auto-rows-min w-full">
          {CASE_STUDIES.map((caseStudy, idx) => (
            <CastStudyCard
              project={caseStudy}
              key={caseStudy.title}
            />
          ))}
        </div>
      </section> */}
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
