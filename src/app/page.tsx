import Image from "next/image";
import fs, { readFile, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";
import getPostMetadata from "../lib/getPostMetadata";
import SocialLink from "@/components/SocialLink";
import {
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from "@/components/SocialIcons";

const topicTags = ["cooking", "dnd", "ui-design", "productivity", "journaling"];
const projectTags = ["React", "Next.js", "Tailwind", "SQL"];

const LandingPageCard = ({
  tags,
  headline,
  cta,
  href,
}: {
  tags: string[];
  headline: string;
  cta: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col h-full w-1/2 gap-2 group hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700"
    >
      <>
        <div className="flex gap-2 items-baseline">
          <h2>{headline}</h2>
          <span className="text-slate-400 text-xs">{"//"}</span>
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2">
          {tags &&
            tags.map((tag) => (
              <li
                key={tag}
                className=""
              >
                <span className="bg-pink-300 rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                  {tag}
                </span>
              </li>
            ))}
        </ul>

        {/* Call to Action */}
        <div className="flex items-center mt-4 mr-2 self-end border-b border-transparent transition group-hover:border-teal-300  motion-reduce:transition-none">
          <span className="font-mono font-light">{cta}</span>
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
      </>
    </Link>
  );
};

export default function Home() {
  const postMetadata = getPostMetadata();

  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Designer, developer, dad, and dungeon master.
        </h1>

        <div className="flex flex-col gap-6 mt-6 text-slate-300">
          <p className="">
            I&apos;m Dylan, a UI designer & developer from Long Island, New
            York. After being introduced to graphic design by way of forum
            signatures in 2005.
          </p>
          <p>
            My focus is designing stuff that&apos;s are easy to use, nice to
            look at, and get&apos;s out of the user&apos;s way.
          </p>
          <p>
            When I&apos;m not at my computer, I can be found hanging out with my
            wife & daughter, or telling stories around a table with friends.
          </p>
        </div>

        <div className="flex gap-6 mt-6">
          <SocialLink
            href="https://github.com/dylpckl"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://dribbble.com/dylpckl"
            aria-label="Follow on Dribbble"
            icon={DribbbleIcon}
          />
          <SocialLink
            href="https://www.linkedin.com/in/dylanjbsmith/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 mt-12">
        <LandingPageCard
          headline="I write about"
          tags={topicTags}
          cta="check out my posts"
          href="/posts"
        />
        <LandingPageCard
          headline="my current tech stack"
          tags={projectTags}
          cta="view projects"
          href="/projects"
        />
      </div>
    </>
  );
}
