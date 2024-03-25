"use client";

// External
import { Fragment, useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import VerticalText from "@/components/VerticalText";
import { Socials, SocialLink } from "@/components/SocialLink";
import CaseStudyCard from "@/components/CaseStudyCard";
import LandingPageCard from "@/components/LandingPageCard";
import ProjectCard from "@/components/ProjectCard";
import DividerWithText from "@/components/DividerWithText";
import Nav from "@/components/Nav";
import MeasuredDiv from "@/components/MeasuredDiv";
import ScrollingCarousel from "@/components/ScrollingCarousel";
import Card from "@/components/Card";

// Images & Icons
import Logo from "/public/images/ds-logo.png";
// import useDimensions from "@/lib/useDimensions";

// Data
import { CASE_STUDIES, DEV_PROJECTS, CaseStudy, Project } from "@/lib/data";
import DevCard from "@/components/LandingPageCard";
import { SunIcon } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const introRef = useRef<HTMLDivElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const [introWidth, setIntroWidth] = useState(0);

  const testRef = useRef(null);
  // const { width, height } = useDimensions(testRef);

  let links = ["intro", "design", "dev"];

  useEffect(() => {
    const introWidth =
      (introRef.current && introRef.current.getBoundingClientRect().width) || 0;
    setIntroWidth(introWidth);

    let sections = [introRef, designRef, devRef];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section.current && observer.observe(section.current);
    });
  }, []);

  return (
    <div className="relative min-h-screen mx-auto max-w-screen-2xl lg:flex lg:gap-12">
      {/* <div className="absolute -z-20 inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

      <header className="w-full lg:w-1/6 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col px-6 py-12 md:py-20 md:px-12 lg:py-24 bg-gradient-to-t from-slate-800/60">
        <span className="flex flex-col tracking-tight font-bold text-slate-200">
          <span className="text-5xl">Dylan Smith</span>
          <span className="text-lg font-medium mt-4">
            Designing pixel-perfect interfaces by day & developing them by
            night.
          </span>
          <div className="mt-4 text-lg font-normal text-slate-200">
            Leading design for{" "}
            <a
              href="https://multidataservices.com/"
              target="_blank"
              className="group relative underline decoration-teal-300 hover:decoration-teal-900"
            >
              <span className="relative z-20 group-hover:text-teal-900 ">
                MDS Property Management Software
              </span>
              {"."}
              <span className="absolute z-10 inset-0 bg-teal-300 w-0 group-hover:w-full group-hover:transition-all duration-500 ease-in-out"></span>
            </a>
          </div>
        </span>

        <div className="ml-2 hidden lg:block">
          <Image
            src={Logo}
            alt="logo"
            height={64}
          />
          <Nav
            links={links}
            activeSection={activeSection}
          />
          <Link
            href="/Dylan-Smith-Resume.pdf"
            target="_blank"
            className="flex gap-4 mt-6 pt-6 text-slate-200 uppercase text-sm font-semibold cursor-pointer font-mono"
          >
            resume
          </Link>
        </div>
        <div className="flex gap-3 mt-6">
          <SocialLink site="github" />
          <SocialLink site="linkedin" />
        </div>
      </header>

      <main className="w-full lg:w-5/6 pb-6 md:pb-14 lg:pb-24">
        {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div> */}
        {/* <div className="absolute -z-20 inset-0 h-full w-full bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

        {/* Intro */}
        <section
          ref={introRef}
          id="intro"
          className="hidden text-3xl lg:flex flex-col gap-12 py-2 px-2 pb-24 overflow-hidden  text-slate-200 relative"
        >
          {/* left   */}
          <div className="flex w-full gap-12">
            <div className="">
              {/* <span className=" text-9xl font-sans font-bold z-20">
                Dylan Smith
              </span> */}
              <MeasuredDiv
                className="flex flex-col w-fit text-3xl lg:text-9xl font-sans font-bold z-20"
                guideline={true}
                guidelineProps={{ edge: "top" }}
                measurement={true}
                measurementProps={{ edge: "right" }}
              >
                <MeasuredDiv
                  guideline={false}
                  guidelineProps={{ edge: "bottom" }}
                  measurement={false}
                  measurementProps={{ edge: "left" }}
                >
                  <span className=" ">Dylan</span>
                </MeasuredDiv>
                <MeasuredDiv
                  className="ml-20"
                  guideline={true}
                  guidelineProps={{ edge: "right" }}
                  measurement={true}
                  measurementProps={{ edge: "bottom" }}
                >
                  <span>Smith</span>
                </MeasuredDiv>
              </MeasuredDiv>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-12">
            <Link
              href="#design"
              className="relative flex flex-col items-center justify-center w-full h-48 z-20 bg-slate-200/40 text-black overflow-hidden group hover:ring-2 ring-yellow-300 transition-all ease-out rounded-md cursor-pointer"
            >
              {/* <SunIcon
                size={256}
                className="absolute -left-24 -top-24 group-hover:animate-spin-slow"
              /> */}
              <span className="z-10">Designing interfaces by day</span>

              <div className="absoute -z-10">
                <ScrollingCarousel />
              </div>
            </Link>

            <div className="w-full h-48 z-20 bg-slate-200/40 text-black">
              Building them by night
            </div>
          </div>{" "}
          {/* <Card
            divider={false}
            className=""
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-6">
                <SocialLink site="github" />
                <SocialLink site="linkedin" />
              </div>
              <span>Leading design at </span>
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
            </div>
          </Card> */}
        </section>

        {/* Design */}
        <section
          ref={designRef}
          id="design"
          className="flex flex-col lg:flex-row relative lg:mt-12 bg-gradient-to-t from-slate-800/60 pb-24"
        >
          {/* <div className="sticky top-0 w-full z-20 mb-4 px-6 py-5">
            <span className="font-mono tracking-widest bg-slat backdrop-blur-lg text-xl md:text-5xl -z-10  text-slate-800 uppercase">
              case studies
              {" \\\\"}
            </span>
          </div> */}

          {/* <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right  bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          /> */}
          {/* <VerticalText text="design" /> */}

          {/* <div className="relative left-0 top-0 h-12 w-1/2 -z-20 origin-bottom-right bg-white skew-x-[20deg]">
            <div className="absolute w-full">
              <span className="font-mono tracking-widest text-xl md:text-5xl -z-10  text-slate-300 uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
                case studies
                {" \\\\"}
              </span>
            </div>
          </div> */}

          <StickyHeader title="case studies" />
          {/* <div className="sticky top-0 w-full z-20 mb-4 bg-slate-800/60 text-slate-200 backdrop-blur-sm px-6 py-5">
            <span className="font-mono tracking-widest text-xl md:text-5xl -z-10  uppercase">
              projects
              {" \\\\"}
            </span>
          </div> */}

          {/* <div className="md:hidden sticky top-0 w-full z-20 px-6 mb-4">
            <div className="relative flex items-center w-full h-12 bg-slate-800/20 backdrop-blur-lg px-4 rounded-md">
              <span className="font-mono tracking-widest text-xl md:text-5xl -z-10  text-slate-300 uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
                case studies
                {" \\\\"}
              </span>
              <div className="absolute w-full left-0 top-0 h-full -z-20 origin-bottom-right skew-x-[20deg] rounded-lg backdrop-blur-lg" />
            </div>
          </div> */}

          {/* <div className="flex gap-4 w-full items-center text-teal-300">
          {icon && icon}
          <span className="font-mono font-semibold uppercase tracking-widest">
            {title}
          </span>
          {divider && <hr className="grow h-px border-0 bg-teal-300" />}
        </div> */}

          <div className="px-6 flex flex-col gap-24 w-full">
            {CASE_STUDIES.map((caseStudy, index) => (
              <CaseStudyCard
                caseStudy={caseStudy}
                index={index}
                key={caseStudy.title}
              />
            ))}
          </div>
        </section>

        {/* Dev */}
        <section
          ref={devRef}
          id="dev"
          className="flex flex-col lg:flex-row relative lg:mt-12"
        >
          {/* <VerticalText text="dev" /> */}
          {/* <div className="sticky top-0 w-full z-20 mb-4 backdrop-blur-lg px-6 py-5">
            <span className="font-mono tracking-widest text-xl md:text-5xl -z-10  text-slate-800 uppercase">
              projects
              {" \\\\"}
            </span>
          </div> */}
          <StickyHeader title="projects" />
          <div className="px-6 md:px-12 flex flex-col gap-24 w-full">
            {DEV_PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-6"
              >
                <LandingPageCard
                  project={project}
                  index={index}
                  key={project.title}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const StickyHeader = ({ title }: { title: string }) => {
  return (
    <div className="sticky top-0 w-full z-20 mb-4 bg-slate-800/60 text-slate-200 backdrop-blur-sm px-6 py-5">
      <span className="font-mono tracking-widest text-xl -z-10  uppercase">
        {title}
        {" \\\\"}
      </span>
    </div>
  );
};
