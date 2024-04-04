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
import { Card, CardProps } from "./Card";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

type LandingPageCardProps = {
  project: Project;
  index: number;
  badge: boolean;
};

export default function LandingPageCard(props: LandingPageCardProps) {
  const { title, subtitle, status, description, slug, image1, image2, tags } =
    props.project;
  const { index, badge } = props;

  let badgeColor = "gray";
  switch (status) {
    case "deployed":
      badgeColor = "green";
      break;
    case "proof of concept":
      badgeColor = "blue";
      break;
    case "coming soon":
      badgeColor = "yellow";
      break;
    case "in development":
      badgeColor = "purple";
      break;
    default:
      badgeColor = "gray";
      break;
  }

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
            href={slug as string}
            className="h-16 p-4 rounded-lg flex items-center justify-center bg-teal-300 text-teal-900 font-medium group/cta hover:bg-teal-400 transition-all ease-in-out duration-500 "
          >
            {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups */}
            <p className="font-mono text-xl transition-colors ease-out group-hover/cta:text-teal-700 uppercase">
              view project
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

  const Title = () => {
    return (
      <>
        {status === "deployed" ? (
          <a
            href={slug}
            className="relative flex items-center w-fit text-4xl font-bold group text-slate-200 transition duration-300"
          >
            {title}
            <span className="absolute w-full top-full max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-slate-200"></span>
            <ArrowUpRight className="ml-4 w-8 h-8 text-slate-200 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" />
          </a>
        ) : (
          <span className="font-bold text-4xl">{title}</span>
        )}
      </>
    );
  };

  return (
    <Card
      divider={true}
      badge={true}
      badgeColor={badgeColor}
      badgeText={status}
      uppercase={true}
      className="hover:ring-2 ring-teal-300 transition-all ease-out"
      title={`dev_project_0${index + 1}`}
    >
      <article className="flex flex-col gap-6 mx-auto group/card w-full group transition-all rounded-md text-slate-200 ease-out duration-300 overflow-clip">
        {/* Headline */}
        <div className="flex gap-12 justify-between items-center">
          <div className="flex flex-col">
            {/* <span className="font-bold text-lg lg:text-4xl">{title}</span> */}
            <Title />
            <span className="text-sm lg:text-lg mt-4">{subtitle}</span>
          </div>

          {/* <CTA /> */}
        </div>

        {/* Image (or compare) */}
        {/* use straight image on mobile */}
        {/* <ImageComparison /> */}
        <Image
          src={image1 as any}
          alt={title}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </article>
    </Card>
  );
}
