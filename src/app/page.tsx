"use client";

// External
import { Fragment, useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import VerticalText from "@/components/VerticalText";
import { Socials, SocialLink } from "@/components/SocialLink";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectCard from "@/components/ProjectCard";
import DividerWithText from "@/components/DividerWithText";
import Nav from "@/components/Nav";
import DashedLine from "@/components/guideline/Guideline";
import Measurement from "@/components/Measurement";

import MeasuredDiv from "@/components/MeasuredDiv";

// Images & Icons
import Logo from "/public/images/ds-logo.png";
import { ArrowUpRightSquare, GithubIcon } from "lucide-react";
import { useDimensions } from "@/lib/useDimensions";

// Data
import { CASE_STUDIES, PROJECTS, CaseStudy } from "@/lib/data";
import { test } from "gray-matter";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const introRef = useRef(null);
  const designRef = useRef(null);
  const devRef = useRef(null);
  const [introWidth, setIntroWidth] = useState(0);

  const testRef = useRef(null);
  const { width, height } = useDimensions(testRef);

  let links = ["intro", "design", "dev"];

  useEffect(() => {
    const introWidth = introRef.current.getBoundingClientRect().width;
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
    <div className="min-h-screen lg:flex lg:gap-12">
      <header className="lg:w-1/6 w-1/ h-screen lg:sticky lg:top-0 lg:flex lg:flex-col p-6">
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
            className="flex gap-4 mt-6 border-t-2 border-slate-400 pt-6 text-slate-200 uppercase text-sm font-semibold cursor-pointer font-mono"
          >
            resume
          </Link>

          <div className="flex gap-3 mt-6">
            <SocialLink site="github" />
            <SocialLink site="linkedin" />
          </div>
        </div>
      </header>

      <main className="lg:w-5/6">
        {/* Intro */}
        <section
          ref={introRef}
          id="intro"
          className="text-3xl h-[70vh] flex flex-col gap-4 py-48 px-48 overflow-hidden"
        >
          {/* <div className="flex flex-col"> */}
          {/* <span className="text-7xl font-sans font-bold">Dylan</span> */}

          {/* want the measurements of this span, so need a ref */}
          {/* <span
              ref={testRef}
              className="relative text-7xl font-sans font-bold ml-20 w-fit"
            > */}
          {/* <DashedLine
                orientation="horizontal"
                position="top"
              />
              <DashedLine
                orientation="vertical"
                position="left"
              /> */}
          {/* Smith */}
          {/* pass the measurements to this */}
          {/* <Measurement orientation="horizontal" position="top" length={100} /> */}
          {/* </span> */}
          {/* want the measurements of this span, so need a ref */}

          <MeasuredDiv
            className="flex flex-col w-fit text-7xl font-sans font-bold"
            guideline={true}
            guidelineProps={{ orientation: "horizontal", edge: "bottom" }}
            measurement={true}
            measurementProps={{ orientation: "vertical", edge: "left" }}
          >
            <span className="">Dylan</span>
            {/* <span className="ml-20">Smith</span> */}
            <MeasuredDiv
              className="ml-20"
              guideline={true}
              guidelineProps={{ orientation: "vertical", edge: "left" }}
              measurement={true}
              measurementProps={{ orientation: "horizontal", edge: "bottom" }}
            >
              <span>Smith</span>
            </MeasuredDiv>
          </MeasuredDiv>
          {/* </div> */}

          {/* <MeasuredDiv
            guideline={{
              enabled: true,
              orientation: "horizontal",
              position: "top",
            }}
            measurement={{
              enabled: true,
              orientation: "vertical",
              position: "left",
            }}
          >
            <span>test</span>
          </MeasuredDiv> */}

          <div className="w-full h-32 mt-12">
            Designing interfaces by day and building them by night
          </div>
          <div className="w-full h-32 ">
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
        </section>

        {/* Design */}
        <section
          ref={designRef}
          id="design"
          className="flex relative mt-12 mr-12"
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
      </main>
    </div>
  );
}
