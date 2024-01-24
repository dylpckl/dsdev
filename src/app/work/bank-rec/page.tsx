"use client";

// External
import Image from "next/image";
import Link from "next/link";

// Icons
import {
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  QuestionMarkCircleIcon,
  ViewfinderCircleIcon,
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

import { CaseStudy, CASE_STUDIES } from "@/lib/data";

const OVERVIEW_STATS = [
  {
    title: "roles",
    icon: UserIcon,
    content: (
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-orange-200">
          As a solo designer, I was responsible for:
          <ul className="list-disc list-inside text-slate-100 font-normal">
            <li>UX Research</li>
            <li>UI Design</li>
          </ul>
        </span>
        <span className="font-semibold text-orange-200">
          In collaboration with:
          <ul className="list-disc list-inside capitalize text-slate-100 font-normal">
            <li>end users</li>
            <li>front-end & back-end developers</li>
            <li>project managers</li>
          </ul>
        </span>
      </div>
    ),
  },
  {
    title: "scope & constraints",
    icon: ViewfinderCircleIcon,
    content: (
      <div>
        <ol className="list-decimal list-inside">
          <li>
            <span className="font-semibold text-orange-200 capitalize">
              timeline:
            </span>{" "}
            <span>One week</span>
          </li>
          <li>
            <span className="font-semibold text-orange-200 capitalize">
              data first:
            </span>{" "}
            <span>Both data tables must be visible at all times</span>
          </li>
          <li>
            <span className="font-semibold text-orange-200 capitalize">
              Desktop & tablet:
            </span>{" "}
            <span>This feature is not available on mobile.</span>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "tools & methods",
    icon: WrenchScrewdriverIcon,
    content: (
      <ul className="list-disc list-inside">
        <li>Figma</li>
        <li>Competitive Analysis</li>
        <li>Jira</li>
        <li>Confluence</li>
      </ul>
    ),
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
      className="mt-24 max-w-7xl mx-auto flex relative gap-12 py-12 snap-start"
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

export default function Page() {
  return (
    <>
      <section className="max-w-7xl mx-auto flex flex-col mt-16 min-h-[80vh]">
        {/* Back Button */}
        <div className="flex gap-6 items-center text-teal-300">
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
        <div className="mt-12 max-w-5xl text-slate-100">
          <h1 className="text-6xl capitalize font-bold font-sans leading-relaxed">
            Redesigning an accountant&apos;s critical monthly task
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
          <div className="flex gap-6">
            {OVERVIEW_STATS.map(({ title, content, icon: Icon }, index) => (
              <Card
                key={index}
                className="flex flex-col gap-4"
              >
                <div className="flex gap-4 w-full items-center text-teal-300 tracking-wide">
                  <Icon className="w-5 h-5" />
                  <span className="font-mono font-semibold uppercase">
                    {title}
                  </span>
                  {/* <hr className="grow h-px border-0 bg-teal-300" /> */}
                </div>

                {content}
              </Card>
            ))}
          </div>

          <Card className="">
            <div className="flex gap-4 w-full items-center text-teal-300">
              <QuestionMarkCircleIcon className="w-6 h-6" />
              <span className="font-mono font-semibold uppercase tracking-widest text-md">
                a bank what?
              </span>
              <hr className="grow h-px border-0 bg-teal-300" />
            </div>

            <div className="mt-6 text-lg">
              <h2 className="text-xl">
                The Bank Reconciliation feature is a key part of a trustworthy
                accounting system.
              </h2>{" "}
              <p className="mt-4">
                A company prepares a bank reconciliation statement to compare
                the balance in its accounting records with its bank account
                balance. The statement shows reasons for any discrepancies
                between the two.{" "}
                <b className="text-orange-200">
                  A bank reconciliation statement is a valuable internal tool
                  that can affect tax and financial reporting and detect errors
                  and intentional fraud.
                </b>
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex gap-4 w-full items-center text-teal-300">
              <ClipboardDocumentCheckIcon className="w-6 h-6" />
              <span className="font-mono font-semibold uppercase tracking-widest text-md">
                objectives
              </span>
              <hr className="grow h-px border-0 bg-teal-300" />
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

      {/* Final */}
      <CaseStudySection
        number={3}
        title="final prototype"
      >
        xx
      </CaseStudySection>
    </>
  );
}
