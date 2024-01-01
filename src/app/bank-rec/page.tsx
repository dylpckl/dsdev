"use client";

// External
import Image from "next/image";
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// Icons
import {
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Components
import VerticalText from "@/components/VerticalText";
import DividerWithText from "@/components/DividerWithText";
import { ReactNode } from "react";
import TagGroup from "@/components/TagGroup";

// Images
import image1 from "/projects/dylansmithdev/public/case-studies/bank-rec/spire_bank rec.png";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-zinc-500/60 backdrop-blur-sm w-full p-6 rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

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
      className="h-[90vh] mt-24 flex relative gap-8 py-12 snap-center snap-always"
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

const OVERVIEW_STATS = [
  {
    title: "role",
    data: "Figma",
    icon: UserIcon,
  },
  {
    title: "timeline",
    data: "1 week",
    icon: CalendarDaysIcon,
  },
  {
    title: "tools",
    data: "Figma",
    icon: WrenchScrewdriverIcon,
  },
];

export default function Page() {
  return (
    <>
      <section className="flex flex-col gap-12 mt-24 mx-4 h-[80vh] snap-start">
        <div className="flex gap-6">
          <Link href="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:-translate-x-2 transition-transform duration-300 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </Link>
          <div>
            <span className="font-mono font-semibold uppercase">
              DSGN 01 {" \\\\"}
            </span>
            <span className="ml-4">Bank Reconcilation</span>
          </div>
        </div>

        <h1 className="text-7xl font-bold font-sans leading-relaxed text-teal-400">
          Redesigning a
        </h1>
        <p className="text-2xl">A brief description of the feature</p>
        <div className="relative w-full h-full ">
          <Image
            src={image1}
            alt="xx"
            fill
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
            {OVERVIEW_STATS.map(({ title, data, icon: Icon }) => (
              <Card className="text-teal-300 tracking-widest text-sm">
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
            <Card><div><h1 className="text-6xl">objectives</h1></div></Card>
            <Card></Card>
          </div>
        </div>
      </CaseStudySection>

      {/* .02 */}
      <CaseStudySection
        number={2}
        title="test"
      >
        {/* Container */}
        <div className="bg-gray-800 h-full w-full"></div>
      </CaseStudySection>
    </>
  );
}

{
  /* <div className="flex gap-12 w-1/3 h-full">
            {OVERVIEW_STATS.map(({ title, data, icon: Icon }) => (
              <Card className="bg-transparent backdrop-blur-none">
                <div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-sm">
                  <Icon className="w-8 h-8" />
                  <span className="font-mono font-semibold uppercase">
                    {title} {" \\\\"}
                  </span>
                </div>

                <p className="mt-6 text-slate-100">{data}</p>
              </Card>
            ))}
          </div> */
}

{
  /* <Card className="bg-transparent backdrop-blur-none">
<div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-xl">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
    />
  </svg>
  <span className="font-mono font-semibold uppercase ">
    tools{" \\\\"}
  </span>
</div>

<p className="mt-6 text-slate-100">blah blah blah</p>
</Card>

<Card className="bg-transparent backdrop-blur-none">
<div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-xl">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    />
  </svg>

  <span className="font-mono font-semibold uppercase ">
    tools{" \\\\"}
  </span>
</div>

<p className="mt-6 text-slate-100">blah blah blah</p>
</Card>

<Card className="bg-transparent backdrop-blur-none">
<div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-xl">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
    />
  </svg>

  <span className="font-mono font-semibold uppercase ">
    role{" \\\\"}
  </span>
</div>

<p className="mt-6 text-slate-100">blah blah blah</p>
</Card>

<Card className="bg-transparent backdrop-blur-none">
<div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-xl">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>

  <span className="font-mono font-semibold uppercase ">
    team{" \\\\"}
  </span>
</div>

<p className="mt-6 text-slate-100">blah blah blah</p>
</Card> */
}

{
  /* <section
        id="case-studies"
        className="bg-blue-900 h-[90vh] flex relative mt-12 px-4 snap-center snap-always"
      >
        <VerticalText text="overview" />
        <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-20 auto-rows-min w-full"></div>
      </section> */
}
