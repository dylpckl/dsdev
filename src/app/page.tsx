// External
import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Components
import VerticalText from "@/components/VerticalText";
import TagGroup from "@/components/TagGroup";
import { Socials } from "@/components/SocialLink";
import DividerWithText from "@/components/DividerWithText";
import ProjectCard from "@/components/ProjectCard";

import { Project } from "@/lib/constants/projects";
import { CASE_STUDIES, PROJECTS } from "@/lib/constants/projects";

import RapidPay from "@/images/RapidPay - Exceptionv5.png";
import Image2 from "@/images/Batch Creation Form.png";

const CaseStudyCard = ({ caseStudy }: { caseStudy: Project }) => {
  return (
    <article className="group w-full sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100  hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-200">
      {/* <Link
        href="/#"
        className="flex flex-col group w-full sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100  hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-200"
      > */}

      {/* {caseStudy.image && (
          <Image
            src={caseStudy.image}
            alt="test"
            quality={100}
            // style={{
            //   objectFit: "contain",
            // }}
            // height={600}
            // width={1000}
            // sizes="100vw"
            // objectFit="cover"
            className="rounded object-center -z-10"
          />
        )} */}

      {/* Image Comparison */}
      <div>
        <div className="w-96 h-96">
          <img
            src="/images/RapidPay - Exceptionv5.png"
            alt="test"
            id="input"
          />
        </div>

        <div className="w-96 h-96">
          <img
            src="/images/Batch Creation Form.png"
            alt="test"
            id="output"
            className="absolute z-10 top-0 left-0"
          />
        </div>
      </div>

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
      {/* </Link> */}
    </article>
  );
};

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
              {CASE_STUDIES.map((caseStudy, idx) => (
                <ProjectCard
                  project={caseStudy}
                  key={caseStudy.title}
                />
              ))}
            </div>
          </section>
        </div>

      </div>
    </>
  );
}
