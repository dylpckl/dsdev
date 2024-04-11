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
          <div className="flex h-16 items-center justify-center gap-4 rounded-lg bg-slate-300 p-4 font-medium text-teal-900 transition-all duration-500 ease-in-out">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="font-mono text-xl uppercase transition-colors ease-out">
              coming soon
            </p>
          </div>
        ) : (
          <Link
            href={slug as string}
            className="group/cta flex h-16 items-center justify-center rounded-lg bg-teal-300 p-4 font-medium text-teal-900 transition-all duration-500 ease-in-out hover:bg-teal-400 "
          >
            {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups */}
            <p className="font-mono text-xl uppercase transition-colors ease-out group-hover/cta:text-teal-700">
              view project
            </p>

            <span className="relative ml-4 inline-block h-6 w-6">
              {/* Fade To Right */}
              <span
                className="opacity-1 absolute left-0 top-0 translate-x-1/2 transition-all
         delay-150 duration-300 group-hover/cta:translate-x-[230%]
          group-hover/cta:text-teal-700 group-hover/cta:opacity-0 motion-reduce:transform-none"
              >
                -&gt;
              </span>

              {/* Fade From Left */}
              <span
                className="absolute left-0 top-0 -translate-x-8 opacity-0 transition-all
         delay-150 duration-300 group-hover/cta:translate-x-1/2
          group-hover:text-teal-700  group-hover/cta:opacity-100 motion-reduce:transform-none"
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
            className="group relative flex w-fit items-center text-4xl font-bold text-slate-200 transition duration-300"
          >
            {title}
            <span className="absolute top-full h-1 w-full max-w-0 bg-slate-200 transition-all duration-300 group-hover:max-w-full"></span>
            <ArrowUpRight className="ml-4 h-8 w-8 text-slate-200 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
          </a>
        ) : (
          <span className="text-4xl font-bold">{title}</span>
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
      className="ring-teal-300 transition-all ease-out hover:ring-2"
      title={`dev_project_0${index + 1}`}
    >
      <article className="group/card group mx-auto flex w-full flex-col gap-6 overflow-clip rounded-md text-slate-200 transition-all duration-300 ease-out">
        {/* Headline */}
        <div className="flex items-center justify-between gap-12">
          <div className="flex flex-col">
            {/* <span className="font-bold text-lg lg:text-4xl">{title}</span> */}
            <Title />
            <span className="mt-4 text-sm lg:text-lg">{subtitle}</span>
          </div>

          {/* <CTA /> */}
        </div>

        {/* Image (or compare) */}
        {/* use straight image on mobile */}
        {/* <ImageComparison /> */}
        {image1 ? (
          <Image
            src={image1 as any}
            alt={title}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        ) : null}
      </article>
    </Card>
  );
}
