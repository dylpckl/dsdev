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
import ProjectCard from "@/components/ProjectCard";
import DividerWithText from "@/components/DividerWithText";
import ScrollingCarousel from "@/components/ScrollingCarousel";
import Typewriter from "@/components/Typewriter";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

// Data
import { CASE_STUDIES, PROJECTS } from "@/lib/data";

const Test = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-5 font-mono uppercase">
      <span className="flex justify-between w-1/3 font-semibold">
        <span>{text}</span>
        <span>{"\\\\"}</span>
      </span>
      <span className="w-2/3">case studies</span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col gap-12 py-24 px-48 min-h-[80vh] text-slate-100">
        <h1 className="text-5xl font-bold font-sans leading-relaxed tracking-wide text-teal-400">
          Hey, I&apos;m Dylan.
        </h1>
        {/* <Typewriter
          text="designer"
          delay={100}
        /> */}
        <p className="flex flex-col gap-4 font-sans text-xl text-slate-200">
          <span className="">
            I specialize in creating design systems and advocating for the best
            possible user experience.{" "}
          </span>

          <span className="">
            I&apos;m currently leading the design effort at{" "}
            <a
              href="https://multidataservices.com/"
              target="_blank"
              className="group relative underline hover:decoration-teal-900"
            >
              <span className="relative z-20 group-hover:text-teal-900 ">
                MDS Property Management Software
              </span>
              {"."}
              <span className="absolute z-10 inset-0 bg-teal-300 w-0 group-hover:w-full group-hover:transition-all duration-500 ease-in-out"></span>
            </a>
          </span>
        </p>
        <div className="flex justify-between items-center">
          <p className="">
            Made with lots of coffee on Long Island, NY.
          </p>
          <div className="flex gap-5">
            <EnvelopeIcon className="text-red-500 w-6 h-6" />
            <SocialLink site="github" />
            <SocialLink site="linkedin" />
          </div>
        </div>

        <div className="flex flex-col gap-8 text-4xl">
          <Test text="design" />
          <Test text="dev" />
          <Test text="about" />
        </div>
      </section>

      {/* Design System */}
      {/* <section className="flex relative mt-12 px-4">
        {" "}
        <VerticalText text="design system" />
        check out my design system!!
        <ScrollingCarousel />
        https://twitter.com/steventey
      </section> */}

      {/* Case Studies */}
      <section
        id="case-studies"
        className="flex relative mt-12 px-4"
      >
        <VerticalText
          caption={0}
          text="case studies"
        />
        <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-40 w-full">
          {CASE_STUDIES.map((caseStudy, index) => (
            <div
              key={index}
              className="flex flex-col gap-6"
            >
              <DividerWithText text={`dsgn.0${index + 1}`} />
              <CaseStudyCard
                caseStudy={caseStudy}
                key={caseStudy.title}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="case-studies"
        className="flex relative mt-64 px-4"
      >
        <VerticalText
          caption={1}
          text="projects"
        />
        <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-32 w-full">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-6"
            >
              <DividerWithText text={`dev.0${index + 1}`} />
              <ProjectCard
                project={project}
                key={project.title}
              />
            </div>
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
