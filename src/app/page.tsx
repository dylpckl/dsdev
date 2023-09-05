import Image from "next/image";
import fs, { readFile, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import getPostMetadata from "../lib/getPostMetadata";
import SocialLink from "@/components/SocialLink";
import {
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from "@/components/SocialIcons";
import TagGroup from "@/components/TagGroup";
import Socials from "@/components/SocialLink";
import LandingPageCard from "@/components/LandingPageCard";
import spireLogo from "../../public/images/Batch Creation Form.png";
import RapidPay from "../../public/images/RapidPay - Exceptionv5.png";
import steamparty from "../../public/images/steamparty.png";

const topicTags = ["ui-design", "cooking", "dnd", "productivity", "journaling"];
const projectTags = [
  "Figma",
  "React",
  "Next.js",
  "Tailwind",
  "SQL",
  "PostgreSQL",
];

export default function Home() {
  return (
    <>
      <div className="p-6 md:p-12 ">
        <h1 className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Designer, developer, dad, and dungeon master.
        </h1>

        <section className="flex flex-col gap-6 mt-6 text-slate-300 text-lg">
          <p className="">
            I&apos;m Dylan, a UI designer & developer from Long Island, New
            York. In the summer of 2005 I snagged myself a copy of Photoshop CS
            and became obsessed with creating forum signatures. Designing for
            the web has been a big part of my life ever since.
          </p>
          <p>
            I&apos;m currently the lead UI/UX Designer for{" "}
            <a
              className="font-medium text-slate-100 hover:text-teal-300 hover:underline"
              href="https://multidataservices.com/"
              target="_blank"
            >
              New York&apos;s premier property management software solution
            </a>
            , where my focus is designing an enterprise application that&apos;s
            easy to use, nice to look at, and that gets out of the user&apos;s
            way.
          </p>
          <p>
            When I&apos;m not at my computer, I can usually be found hanging out
            with my wife & daughter, hiking in the mountains, or telling stories
            around a table with friends.
          </p>
        </section>
        <div className="mt-6">
          <Socials />
        </div>
      </div>

      <section
        id="projects"
        className="flex relative mt-12"
      >
        <div
          id="sticky-container"
          className="sticky top-20 w-full"
        >
          <span
            id="sticky-element"
            className="sticky top-12 font-mono tracking-widest text-[100px] -z-10 text-slate-300/10"
            style={{ writingMode: "vertical-lr" }}
          >
            PROJECTS\\
          </span>
        </div>
        {/* <span className="font-mono tracking-widest absolute origin-bottom-left -rotate-90 text-[100px] left-24 top-[525px] -z-10 text-slate-300/20 mt-12">
          PROJECTS\\
        </span> */}

        <div className="grid grid-cols-6 gap-y-24 gap-x-12 mr-20 -ml-20">
          <article className="col-span-6">
            <Link
              href="/tenant-payment-form"
              className=" flex group w-full gap-2 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/50 drop-shadow-lg"
            >
              <div className="flex flex-col w-1/3">
                <div className="z-10 flex gap-2 text-3xl">
                  <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Tenant Payment Form
                  </h2>
                  {/* <span className="text-slate-400 text-2xl transition-transform group-hover:translate-x-2">
                  {`//`}
                </span> */}
                  {/* <div className="z-10 flex items-center mr-2 motion-reduce:transition-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-1 w-6 h-6 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div> */}
                </div>
                <p className="text-lg mt-6">A complex form to accept and apply a tenants bill payment.</p>
                <div className="mt-6">
                  {projectTags && <TagGroup tags={projectTags} />}
                </div>

                {/* Call to Action */}
                <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300  motion-reduce:transition-none">
                  <span className="font-mono text-xl font-light group-hover:text-teal-300">
                    View Project
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Right */}
              <div className="relative w-2/3 overflow-hidden">
                {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
                <Image
                  src={spireLogo}
                  alt="test"
                  quality={100}
                  // height={600}
                  width={1000}
                  // sizes="100vw"
                  // objectFit="cover"
                  className="rounded object-center -z-10"
                />
              </div>
            </Link>
          </article>

          <article className="col-span-6">
            <Link
              href="/"
              className="flex group w-full gap-2 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-6 text-slate-200 bg-slate-700/10 drop-shadow-lg"
            >
              <div className="flex flex-col w-1/3">
                <div className="z-10 flex gap-2 text-3xl">
                  <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Invoice Validation Form
                  </h2>
                  {/* <span className="text-slate-400 text-2xl transition-transform group-hover:translate-x-2">
                  {`//`}
                </span> */}
                  {/* <div className="z-10 flex items-center mr-2 motion-reduce:transition-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-1 w-6 h-6 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div> */}
                </div>
                <p className="text-lg mt-2">A complex form</p>
                <div className="mt-6">
                  {projectTags && <TagGroup tags={projectTags} />}
                </div>

                {/* Call to Action */}
                <div className="z-10 flex items-center mt-auto mr-2 transition group-hover:border-teal-300  motion-reduce:transition-none">
                  <span className="font-mono font-light group-hover:text-teal-300">
                    View Project
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-2/3 overflow-hidden">
                {/* <div className="absolute w-full h-full bg-gradient-to-r from-white from-5%"></div> */}
                <Image
                  src={RapidPay}
                  alt="test"
                  quality={100}
                  sizes="(max-width: 500px) 100vw"
                  // height={1000}
                  // width={1000}
                  // sizes="100vw"
                  // objectFit="cover"
                  className="rounded object-right -z-10"
                />
              </div>
            </Link>
          </article>
          {/* Project Grid */}
          <section className="col-span-3">
            <div className="">
              {/* Project Grid */}
              <div className="w-full gap-5">
                {/* Project Card */}
                <a
                  href="https://www.steamparty.io"
                  target="_blank"
                  className="grid grid-cols-2 sm:gap-8 md:gap-4 text-slate-200 bg-slate-700/40 hover:bg-slate-700 p-4 rounded-lg transition-all hover:ring-2 ring-teal-300"
                  // flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75
                >
                  <Image
                    src={steamparty}
                    alt="Picture of www.steamparty.io user interface"
                    className="rounded-lg mr-4 col-span-1"
                  />

                  <div className="col-span-1 flex flex-col">
                    <span className="flex items-center font-medium">
                      www.steamparty.io
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-3 h-3 ml-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </span>
                    </span>

                    <p className="text-sm mt-2">
                      Web app for finding Steam games that both you and your
                      friends own. After connecting your Steam account, the app
                      populates your friend list so that you can build a party.
                      Then execute the query to find any games that everyone in
                      the party owns. Also includes a &ldquo;pick for us&ldquo;
                      feature if you can&apos;t decide.
                    </p>
                    <TagGroup tags={["React", "React Query", "Tailwind CSS"]} />
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
