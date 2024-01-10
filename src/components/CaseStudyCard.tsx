"use client";
// External
import { useState, useRef, TouchEvent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import TagGroup from "./TagGroup";

// Lib
import { CaseStudy } from "@/lib/data";

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.25);
  const imageContainer = useRef<HTMLDivElement>(null);

  const slide = (xPos: number) => {
    const container = imageContainer.current;

    if (container) {
      const containerBoundingRect = container.getBoundingClientRect();
      if (xPos < containerBoundingRect.left) {
        return 0;
      } else if (xPos > containerBoundingRect.right) {
        return 1;
      } else {
        setImageRevealFraq(() => {
          return (
            (xPos - containerBoundingRect.left) / containerBoundingRect.width
          );
        });
      }
    }
  };

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const handleMouseUp = (): void => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX);
  };

  return (
    <article className="flex flex-col mx-auto group/card w-full group  transition-all rounded-lg text-slate-200 bg-slate-700/50 backdrop-blur-sm shadow-xl ease-out duration-300 overflow-clip">
      <div
        ref={imageContainer}
        className="relative bg-pink-300 h-[420px] w-full select-none"
      >
        {/* p */}
        <Image
          src={caseStudy.spireImage}
          alt={caseStudy.title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="pointer-events-none"
        />
        {/* Explorer Image */}
        <Image
          src={caseStudy.explorerImage}
          alt={caseStudy.title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%)",
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Drag Handle */}
        <div
          className="absolute inset-y-0"
          style={{ left: `${imageRevealFraq * 100}%` }}
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 bg-teal-300 w-0.5 -ml-px">
              {/* <div className="absolute inset-y-0 bg-red-300 w-0.5 -ml-px"> */}
              <div
                style={{ touchAction: "none" }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="flex justify-center items-center h-12 w-12 -ml-6 -mt-6 rounded-full absolute top-1/2 bg-teal-300 text-teal-800 shadow-xl  cursor-e-resize"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 rotate-90"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-6 py-12">
        <h2 className="font-bold tracking-tight text-3xl">{caseStudy.title}</h2>
        <p className="text-lg mt-6 z-10">{caseStudy.subtitle}</p>
        {/* <div className="mt-6 flex justify-between">
          {caseStudy.tags && <TagGroup tags={caseStudy.tags} />}
        </div> */}
      </div>

      {/* Footer */}
      <Link
        href={caseStudy.slug}
        className="w-full h-16 flex items-center justify-center bg-teal-300 text-teal-900 font-medium group/cta hover:bg-teal-400 transition-all ease-in-out duration-500 "
      >
        {/* <div className="w-full bg-teal-300 text-teal-900 font-medium group/cta overflow-hidden h-0 group-hover:h-16 transition-all ease-in-out duration-500"> */}

        {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups */}
        {/* <div className=" flex w-full h-full items-center justify-center"> */}
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
    </article>
  );
}

export default CaseStudyCard;
