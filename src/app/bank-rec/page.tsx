"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

// Components
import VerticalText from "@/components/VerticalText";
import DividerWithText from "@/components/DividerWithText";
import { ReactNode } from "react";

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
      className="bg-pink-900/30 h-[90vh] mt-24 flex relative px-4 pr-8 py-12 snap-center snap-always"
    >
      <VerticalText
        number={number}
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
      <section className="bg-pink-800 flex flex-col gap-12 h-[80vh] snap-start">
        <h1 className="text-7xl font-bold font-sans leading-relaxed text-teal-400">
          Bank Reconciliation
        </h1>
        <p className="text-2xl">A brief description of the feature</p>
        <div className="relative bg-pink-300 w-full h-full">
          <Image
            src={image1}
            alt="xx"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            className=""
          />
        </div>
      </section>

      {/* .01 */}
      <CaseStudySection
        number={1}
        title="overview"
      >
        {/* Container */}
        <div className="h-full w-full flex gap-12">
          <div className=" flex flex-col gap-12 w-2/3 h-full">
            <Card className="h-full">xxx</Card>
            <Card className="h-full">xxx</Card>
          </div>
          <div className=" flex flex-col gap-12 w-1/3 h-full">
            <Card>
              <div className="flex gap-6 w-full items-center text-teal-300 tracking-widest text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-8"
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
            <Card className="bg-transparent">
              <span className="font-mono font-semibold uppercase text-teal-300 tracking-widest text-xl">
                scope{" \\\\"}
              </span>
              <p className="mt-6 text-slate-100">blah blah blah</p>
            </Card>
            <Card>
              <span className="font-mono font-semibold uppercase text-teal-300 tracking-widest text-xl">
                scope{" \\\\"}
              </span>
              <p className="mt-6 text-slate-100">blah blah blah</p>
            </Card>
            <Card>
              <span className="font-mono font-semibold uppercase text-teal-300 tracking-widest text-xl">
                scope{" \\\\"}
              </span>
              <p className="mt-6 text-slate-100">blah blah blah</p>
            </Card>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
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
