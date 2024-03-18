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
    <div className="min-h-screen mx-auto max-w-screen-2xl lg:flex lg:gap-12">
      <header className="lg:w-1/6 w-1/ h-screen lg:sticky lg:top-0 lg:flex lg:flex-col p-6  py-24">
        <Image
          src={Logo}
          alt="logo"
          height={64}
        />
        <div className="ml-2">
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

          <div className="flex gap-3 mt-6">
            <SocialLink site="github" />
            <SocialLink site="linkedin" />
          </div>
        </div>
      </header>

      <main className="lg:w-5/6 py-24">
        {/* Intro */}
        <section
          ref={introRef}
          id="intro"
          className="text-3xl flex gap-12 py-2 px-2 pb-24 overflow-hidden text-slate-200 relative"
        >
          {/* left   */}
          <div className="flex flex-col w-1/2 gap-12">
            <div className="bg-red-300/40">
              <MeasuredDiv
                className="flex flex-col w-fit text-9xl font-sans font-bold z-20"
                guideline={false}
                guidelineProps={{ edge: "top" }}
                measurement={false}
                measurementProps={{ edge: "left" }}
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
                  guideline={false}
                  guidelineProps={{ edge: "right" }}
                  measurement={false}
                  measurementProps={{ edge: "bottom" }}
                >
                  <span>Smith</span>
                </MeasuredDiv>
              </MeasuredDiv>
            </div>
            <div className="bg-red-300/40">
              Currently leading design for{" "}
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
          </div>

          <div className="flex flex-col w-1/2 gap-12">
            <Link
              href="#design"
              className="relative flex flex-col items-center justify-center w-full h-48 z-20 bg-slate-200/40 text-black overflow-hidden group hover:ring-2 ring-yellow-300 transition-all ease-out rounded-md cursor-pointer"
            >
              {/* <SunIcon
                size={256}
                className="absolute -left-24 -top-24 group-hover:animate-spin-slow"
              /> */}
              <span className="z-10">Designing interfaces by day</span>
              <div>CTA</div>
              <div className="absoute -z-10">
                <ScrollingCarousel />
              </div>
            </Link>

            <div className="w-full h-48 z-20 bg-slate-200/40 text-black">
              Building them by night
            </div>

            {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div> */}
          </div>
        </section>

        {/* Design */}
        <section
          ref={designRef}
          id="design"
          className="flex relative mt-12"
          // className="flex relative mt-12 px-4 md:px-12 max-w-[60vw]"
        >
          <VerticalText text="design" />
          <div className="ml-6 md:ml-12 flex flex-col gap-40 w-full">
            {CASE_STUDIES.map((caseStudy, index) => (
              <div
                key={index}
                className="flex gap-12"
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  index={index}
                  key={caseStudy.title}
                />
                {/* <LandingPageCard
                  project={caseStudy}
                  index={index}
                  key={caseStudy.title}
                /> */}
              </div>
            ))}
          </div>
        </section>

        {/* Dev */}
        <section
          ref={devRef}
          id="dev"
          className="flex relative mt-64"
        >
          <VerticalText text="dev" />
          <div className="ml-6 md:ml-12 flex flex-col gap-40 w-full">
            {/* <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-32 w-full"> */}
            {DEV_PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-6"
              >
                {/* <DividerWithText text={`dev.0${index + 1}`} /> */}
                {/* <DevCard
                  key={project.title}
                  title={project.title}
                  subtitle={project.subtitle}
                  index={index}
                /> */}
                {/* <ProjectCard
                  project={project}
                  key={project.title}
                /> */}
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
