"use client";
// External
import { useState, useRef, TouchEvent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { ClockIcon } from "@heroicons/react/24/outline";

// Components
import TagGroup from "./TagGroup";
import Card from "./Card";

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
    <Card className="p-0 shadow-xl">
      <article className="flex flex-col mx-auto group/card w-full group transition-all rounded-lg text-slate-200  ease-out duration-300 overflow-clip">
        <div
          ref={imageContainer}
          className="relative m-4 overflow-hidden bg-pink-300 h-[420px]  select-none rounded-md"
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
          <h2 className="font-bold tracking-tight text-3xl">
            {caseStudy.title}
          </h2>
          <p className="text-lg mt-6 z-10">{caseStudy.subtitle}</p>
          {/* <div className="mt-6 flex justify-between">
          {caseStudy.tags && <TagGroup tags={caseStudy.tags} />}
        </div> */}
        </div>

        {/* Footer */}

        {caseStudy.status === "coming soon" ? (
          <div className="w-full h-16 flex gap-4 items-center justify-center bg-gray-300 text-teal-900 font-medium transition-all ease-in-out duration-500">
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
        )}
      </article>
    </Card>
  );
}

export default CaseStudyCard;
