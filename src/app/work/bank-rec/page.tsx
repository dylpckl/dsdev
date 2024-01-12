"use client";

// External
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// Icons
import {
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

// Components
import VerticalText from "@/components/VerticalText";
import DividerWithText from "@/components/DividerWithText";
import { ReactNode } from "react";
import TagGroup from "@/components/TagGroup";
import Card from "@/components/Card";

// Images
import image1 from "/public/case-studies/bank-rec/spire.png";
import Legacy from "/public/case-studies/bank-rec/legacy.png";

// type CardProps = {
//   children: ReactNode;
//   className?: string;
// };

import { CaseStudy, CASE_STUDIES } from "@/lib/data";

// const Card = ({ className, children }: CardProps) => {
//   return (
//     <div
//       className={cn(
//         "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

const OVERVIEW_STATS = [
  {
    title: "roles",
    data: "Figma",
    icon: UserIcon,
  },
  {
    title: "timeline",
    data: "1 week",
    icon: CalendarDaysIcon,
  },
  {
    title: "tools & methods",
    data: "Figma",
    icon: WrenchScrewdriverIcon,
  },
];

const CaseStudySection = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section
      id="case-studies"
      className="mt-24 max-w-7xl mx-auto flex relative gap-12 py-12"
      // className="h-[90vh] mt-24 flex relative gap-8 py-12 snap-center snap-always"
    >
      <VerticalText
        caption={number}
        text={title}
      />
      {/* mx-4 md:mx-16 lg:mx-24 xl:mx-32 */}

      {children}
    </section>
  );
};

// const caseStudy = CASE_STUDIES.find(
//   (caseStudy) => caseStudy.slug === "/work/bank-rec"
// );

export default function Page() {
  return (
    <>
      <section className="flex flex-col mt-16 min-h-[80vh]">
        {/* Back Button */}
        <div className="flex gap-6 items-center">
          <Link href="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 hover:-translate-x-2 transition-transform duration-300 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <div className="font-mono text-sm uppercase">
            <span className="font-semibold">DSGN 01 {" \\\\"}</span>
            <span className="ml-4">Bank Reconcillation</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-12 max-w-5xl">
          <h1 className="text-5xl capitalize font-bold font-sans leading-relaxed text-teal-400">
            Redesigning an accountant&apos;s critical monthly task.
          </h1>
          {/* <p className="text-xl my-12">The Bank Reconciliation feature </p> */}
        </div>

        {/* Hero Image */}
        <div className="mt-12 relative w-full h-full flex justify-center">
          <Image
            src={image1}
            alt="xx"
            style={{ objectFit: "cover", objectPosition: "top" }}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* .01 */}
      <CaseStudySection
        number={1}
        title="overview"
      >
        {/* Container */}
        <div className="h-full w-full flex flex-col gap-12">
          <div className="flex gap-12">
            {OVERVIEW_STATS.map(({ title, data, icon: Icon }, index) => (
              <Card
                key={index}
                className="text-teal-300 tracking-widest text-sm"
              >
                <div className="flex gap-6 w-full items-center ">
                  <Icon className="w-6 h-6" />
                  <span className="font-mono font-semibold uppercase">
                    {title} {" \\\\"}
                  </span>
                </div>

                <p className="mt-6 text-slate-100">{data}</p>
              </Card>
            ))}
          </div>

          <div className="flex gap-12">
            <Card className="text-teal-300">
              <div className="flex gap-6 w-full items-center ">
                <ClipboardDocumentCheckIcon className="w-6 h-6" />
                <span className="font-mono font-semibold uppercase tracking-widest text-sm">
                  objectives {" \\\\"}
                </span>
              </div>

              <p className="mt-6 text-lg font-sans font-normal text-slate-100">
                The Bank Reconciliation feature is a key part of a trustworthy
                accounting system.
              </p>
              <ul>
                <li>page header</li>
                <li>summary</li>
                <li>bank statement</li>
              </ul>
            </Card>
          </div>
        </div>
      </CaseStudySection>

      {/* .02 */}
      <CaseStudySection
        number={2}
        title="design process"
      >
        {/* Container */}
        <div className="flex flex-col gap-24 w-full">
          <Card>
            with the main objective being to achieve parity, port the feature to
            the new system, and the tight timeframe, Given the extremely tight 2
            week deadline, and being the lone designer on the project, I was
            unable to take the time to conduct any user research to uncover pain
            points or develop personas. This particular feature has been in use
            for decades, and over time has evolved quite a bit in accordance
            with user feedback. As such, my main focus during discovery was
            auditing the UI components at play and finding equivalents in use in
            the web-app, in addition to crafting new components as needed.
          </Card>
          <Card>audit - functionality, ui components</Card>
          <Card>
            highlight tabular numbers
            https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#numbers
          </Card>
          <Card>restructure the layout - hierarchy</Card>
          <Card>
            use a two column layout here - image plus text so reader can see
            what im talking about
          </Card>
          <div className="w-full flex gap-8">
            <Card className="w-1/3">
              The first order of business is to take an audit the existing
              functionality
            </Card>
            <Card className="w-2/3 p-0">
              {" "}
              <Image
                src={Legacy}
                alt="xx"
                quality={100}
                // style={{ objectFit: "cover", objectPosition: "top" }}
                className="rounded-lg"
              />
            </Card>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
}
