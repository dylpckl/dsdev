"use client";

// TODO
//
//
//
//
//

// External
import { useState, useRef, TouchEvent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { ClockIcon } from "@heroicons/react/24/outline";

// Components
import TagGroup from "./TagGroup";
import Card from "./Card";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Project } from "@/lib/data";

type LandingPageCardProps = {
  project: Project;
  index: number;
};

export default function LandingPageCard(props: LandingPageCardProps) {
  const { title, subtitle, status, description, slug, image1, image2, tags } =
    props.project;
  const { index } = props;
  // console.log(props);

  const CTA = () => {
    return (
      <div className="w-1/3">
        {status === "coming soon" ? (
          <div className="h-16 flex gap-4 p-4 rounded-lg items-center justify-center bg-slate-300 text-teal-900 font-medium transition-all ease-in-out duration-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="font-mono text-xl transition-colors ease-out uppercase">
              coming soon
            </p>
          </div>
        ) : (
          <Link
            href={slug}
            className="h-16 p-4 rounded-lg flex items-center justify-center bg-teal-300 text-teal-900 font-medium group/cta hover:bg-teal-400 transition-all ease-in-out duration-500 "
          >
            {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups */}
            <p className="font-mono text-xl transition-colors ease-out group-hover/cta:text-teal-700 uppercase">
              view case study
            </p>

            <span className="ml-4 relative w-6 h-6 inline-block">
              {/* Fade To Right */}
              <span
                className="absolute top-0 left-0 transition-all delay-150 duration-300
         opacity-1 translate-x-1/2 group-hover/cta:translate-x-[230%]
          group-hover/cta:opacity-0 group-hover/cta:text-teal-700 motion-reduce:transform-none"
              >
                -&gt;
              </span>

              {/* Fade From Left */}
              <span
                className="absolute top-0 left-0 transition-all delay-150 duration-300
         opacity-0 -translate-x-8 group-hover/cta:translate-x-1/2
          group-hover/cta:opacity-100  group-hover:text-teal-700 motion-reduce:transform-none"
              >
                -&gt;
              </span>
            </span>
          </Link>
        )}
      </div>
    );
  };

  return (
    <Card
      divider={true}
      className="hover:ring-2 ring-teal-300 transition-all ease-out"
      title={`WIP.0${index + 1}`}
    >
      <article className="flex flex-col gap-6 mx-auto group/card w-full group transition-all rounded-md text-slate-200 ease-out duration-300 overflow-clip">
        {/* Headline */}
        <div className="flex gap-12 justify-between items-center">
          <div className="w-2/3 flex flex-col">
            <span className="font-bold text-4xl">{title}</span>
            <span className="text-lg mt-4">{subtitle}</span>
          </div>

          <CTA />
        </div>

        {/* Image (or compare) */}

        {/* <ImageComparison /> */}
      </article>
    </Card>
  );
}

// <div
// ref={imageContainer}
// className="relative overflow-hidden w-full h-[60vh] bg-pink-300 select-none rounded-md"
// >
// {/* p */}
// <Image
//   src={caseStudy.spireImage}
//   alt={caseStudy.title}
//   fill
//   style={{ objectFit: "cover", objectPosition: "left top" }}
//   className="pointer-events-none"
// />
// {/* Explorer Image */}
// <Image
//   src={caseStudy.explorerImage}
//   alt={caseStudy.title}
//   fill
//   style={{
//     objectFit: "cover",
//     objectPosition: "left top",
//     filter: "grayscale(100%)",
//     clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
//       imageRevealFraq * 100
//     }% 100%, 0 100%)`,
//   }}
//   className="absolute inset-0 pointer-events-none"
// />

// {/* Drag Handle */}
// <div
//   className="absolute inset-y-0"
//   style={{ left: `${imageRevealFraq * 100}%` }}
// >
//   <div className="relative h-full">
//     <div className="absolute inset-y-0 bg-teal-300 w-0.5 -ml-px">
//       {/* <div className="absolute inset-y-0 bg-red-300 w-0.5 -ml-px"> */}
//       <div
//         style={{ touchAction: "none" }}
//         onMouseDown={handleMouseDown}
//         onTouchMove={handleTouchMove}
//         className="flex justify-center items-center h-12 w-12 -ml-6 -mt-6 rounded-full absolute top-1/2 bg-teal-300 text-teal-800 shadow-xl  cursor-e-resize"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-8 h-8 rotate-90"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
//           />
//         </svg>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
