"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import TagGroup from "./TagGroup";

import { Project } from "@/lib/constants/projects";

function ProjectCard({ project }: { project: Project }) {
  // console.log(project)
  return (
    // Image Comparison
    // Title, desc, tags, CTA

    <Link
      href="/#"
      className="flex flex-col group/card w-full sm:gap-12 md:gap-8 height-[520px] group transition-all hover:scale-105 scale rounded-lg text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-500"
    >
      <article>
        {/* <article className="group w-full flex flex-col sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100 hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-700"> */}

        <div className="w-full">
          {/* Image */}
          <div className="bg-pink-300 h-96 w-full"></div>
          <h2 className="font-bold tracking-tight text-3xl text-zinc-800 dark:text-zinc-100">
            {project.title}
          </h2>
          <p className="text-lg mt-6">{project.subtitle}</p>
          <div className="mt-6 flex justify-between">
            {project.tags && <TagGroup tags={project.tags} />}
            {/* <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              view case study
            </button> */}
          </div>
        </div>

        {/* Chin */}
        {/* scale-y-0 group-hover:scale-y-100 */}
        <div className="w-full bg-pink-300 group/cta overflow-hidden h-0 group-hover:h-16  transition-all ease-in duration-200">
          {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups */}
          <div className=" flex w-full h-full items-center justify-center">
            <p className="font-mono text-xl font-light transition-colors ease-out group-hover/cta:text-teal-300 uppercase">
              view case study
            </p>

            <span className="ml-4 relative w-6 h-6 inline-block">
              {/* Fade To Right */}
              <span
                className="absolute top-0 left-0 transition-all delay-150 duration-300
               opacity-1 translate-x-1/2 group-hover/cta:translate-x-[230%]
                group-hover/cta:opacity-0 motion-reduce:transform-none"
              >
                -&gt;
              </span>

              {/* Fade From Left */}
              <span
                className="absolute top-0 left-0 transition-all delay-150 duration-300
               opacity-0 -translate-x-8 group-hover/cta:translate-x-1/2
                group-hover/cta:opacity-100 motion-reduce:transform-none"
              >
                -&gt;
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;

// {/* <Link
//     href="/#"
//     className="flex flex-col group w-full sm:gap-12 md:gap-8 min-h-[400px] group transition-all scale-95 hover:scale-100  hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg ease-out duration-200"
//   > */}

// {/* {caseStudy.image && (
//       <Image
//         src={caseStudy.image}
//         alt="test"
//         quality={100}
//         // style={{
//         //   objectFit: "contain",
//         // }}
//         // height={600}
//         // width={1000}
//         // sizes="100vw"
//         // objectFit="cover"
//         className="rounded object-center -z-10"
//       />
//     )} */}

// {/* Image Comparison */}
// <div>
//   <div className="w-96 h-96">
//     <img
//       src="/images/RapidPay - Exceptionv5.png"
//       alt="test"
//       id="input"
//     />
//   </div>

//   <div className="w-96 h-96">
//     <img
//       src="/images/Batch Creation Form.png"
//       alt="test"
//       id="output"
//       className="absolute z-10 top-0 left-0"
//     />
//   </div>
// </div>

// <div className="flex flex-col w-1/3">
//   <div className="z-10 flex gap-2 text-3xl">
//     <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
//       {project.title}
//     </h2>
//   </div>
//   <p className="text-lg mt-6">{project.subtitle}</p>
//   <div className="mt-6">
//     {project.tags && <TagGroup tags={project.tags} />}
//   </div>

//   <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300 motion-reduce:transition-none">
//     <span className="font-mono text-xl font-light group-hover:text-teal-300 uppercase">
//       coming soon
//     </span>
//     {/* <span
//           className={clsx(
//             "ml-4 rounded-full px-3 py-1 text-xs font-medium leading-5 uppercase",
//             {
//               "bg-sky-500/30 text-sky-200":
//                 caseStudy.status === "proof of concept",
//               "bg-teal-400/10 text-teal-300":
//                 caseStudy.status === "deployed",
//               "bg-slate-600 text-slate-200":
//                 caseStudy.status === "coming soon",
//               "bg-purple-500/30 text-purple-200":
//                 caseStudy.status === "in development",
//             }
//           )}
//         >
//           {caseStudy.status}
//         </span> */}
//     {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//           />
//         </svg> */}
//   </div>
// </div>

// <div className="relative w-2/3 overflow-hidden">
//   {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}

//   {/* <Image
//         src={project.image}
//         alt="test"
//         quality={100}
//         // height={600}
//         width={1000}
//         // sizes="100vw"
//         // objectFit="cover"
//         className="rounded object-center -z-10"
//       /> */}
// </div>
