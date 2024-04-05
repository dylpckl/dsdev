"use client";

// External
import { Fragment, useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Utilities
import { useDimensions } from "@/lib/useDimensions";

// Components
import VerticalText from "@/components/VerticalText";
import { Socials, SocialLink } from "@/components/SocialLink";
import CaseStudyCard from "@/components/CaseStudyCard";
import LandingPageCard from "@/components/LandingPageCard";
import Nav from "@/components/Nav";
import MeasuredDiv from "@/components/MeasuredDiv";
import ScrollingCarousel from "@/components/ScrollingCarousel";
import { Card } from "@/components/Card";

// Images & Icons
import Logo from "/public/images/ds-logo.png";

// Data
import { CASE_STUDIES, DEV_PROJECTS, CaseStudy, Project } from "@/lib/data";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const introRef = useRef<HTMLDivElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const [introWidth, setIntroWidth] = useState(0);

  const testRef = useRef(null);
  const { width, height } = useDimensions(introRef);
  console.log("page.tsx:", width, height);
  



  let links = ["intro", "design", "develop"];

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

      <header className="hidden w-full lg:w-1/6 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col px-6 py-12 md:py-20 md:px-12 lg:py-24 bg-gradient-to-t lg:bg-none from-slate-800/60">
        {/* <span className="flex lg:hidden flex-col tracking-tight font-bold text-slate-200">
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
        </span> */}

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
        <div className="fixed inset-0 -z-20 h-full w-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        {/* <div className="absolute -z-20 inset-0 h-full w-full bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

        {/* Intro */}
        <section
          ref={introRef}
          id="intro"
          className="text-3xl flex flex-col gap-12 lg:pb-24 overflow-hidden lg:bg-none text-slate-200 relative px-6 py-12 md:py-20 md:px-12 lg:py-24"
        >
          {/* left   */}
          <div className="flex w-full gap-12">
            <span className="flex flex-col tracking-tight font-bold text-slate-200">
              <span className="text-5xl lg:text-7xl">Dylan Smith</span>
              <span className="flex gap-2 text-lg lg:text-2xl font-medium mt-4">
                Designing
                <MeasuredDiv
                  parentHeight={height}
                  parentWidth={width}
                  guideline1={true}
                  guideline1Props={{ edge: "bottom" }}
                  guideline2={true}
                  guideline2Props={{ edge: "right" }}
                  measurement={true}
                  measurementProps={{ edge: "bottom" }}
                  className="w-fit"
                >
                  pixel-perfect
                </MeasuredDiv>
                interfaces by day
              </span>
              <span className="text-lg lg:text-2xl font-medium mt-4">
                & developing them by night.
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
              <div className="flex gap-3 mt-6">
                <SocialLink site="github" />
                <SocialLink site="linkedin" />
              </div>
            </span>
          </div>
        </section>

        {/* Design */}
        <section
          ref={designRef}
          id="design"
          className="flex flex-col lg:flex-row relative lg:mt-12 lg:bg-none pb-24"
        >
          <VerticalText text="design" />
          <StickyHeader title="design" />
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
          id="develop"
          className="flex flex-col lg:flex-row relative lg:mt-12"
        >
          <VerticalText text="develop" />
          <StickyHeader title="develop" />
          <div className="px-6 flex flex-col gap-24 w-full">
            {/* <Card
              divider={true}
              badge={true}
              badgeColor="yellow"
              badgeText="testzzz"
              uppercase={true}
              title="test"
            >
              test
            </Card> */}
            {DEV_PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-6"
              >
                <LandingPageCard
                  project={project}
                  index={index}
                  key={project.title}
                  badge={true}
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
    <div className="sticky block lg:hidden top-0 w-full z-20 mb-4 bg-slate-800/60 text-slate-200 backdrop-blur-sm px-6 py-5">
      <span className="font-mono tracking-widest text-xl -z-10  uppercase">
        {title}
        {" \\\\"}
      </span>
    </div>
  );
};
