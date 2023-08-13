import Image from "next/image";
import fs, { readFile, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";
import getPostMetadata from "../lib/getPostMetadata";

import dribbbleIcon from "../../public/icons8-dribbble.svg";
import githubIcon from "../../public/icons8-github.svg";
import linkedInIcon from "../../public/icons8-linkedin.svg";

const topicTags = [
  "cooking",
  "dnd",
  "ui-design",
  "productivity",
  "note-taking",
  "note-taking",
  "note-taking",
  "note-taking",
];

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
  console.log(typeof tags);
  return (
    <Link
      href={href}
      className="flex flex-col h-full w-1/2 gap-2 group hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700"
    >
      <>
        <h2>{headline}</h2>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2">
          {tags &&
            tags.map((tag) => (
              <li className="">
                <span className="bg-pink-300 rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                  {tag}
                </span>
              </li>
            ))}
        </ul>

        <div className="flex items-center mt-4 self-end">
          <span className="font-mono border-b border-transparent transition group-hover:border-teal-300 motion-reduce:transition-none">
            {cta}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 motion-reduce:transition-none"
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
  // const postPreviews = postMetadata.map((post) => (
  //   <div>
  //     <Link href={`/posts/${post.slug}`}>
  //       <h2>{post.slug}</h2>
  //     </Link>
  //     <p>{post.subtitle}</p>
  //     <p>{post.dateCreated}</p>
  //   </div>
  // ));

  return (
    <main className="">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          ui designer // storyteller // dad // dungeon master // 123345
        </h1>

        <div>
          <p>
            I&apos;m Dylan, a ui designer based in Long Island, NY. I do x
            because y.
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
      </div>

      <div className="flex flex-col md:flex-row md:space-x-3">
        <LandingPageCard
          headline="I'm currently writing about..."
          tags={topicTags}
          cta="check out my posts"
          href="/posts"
        />
        <LandingPageCard
          headline="Tech I'm working with includes..."
          tags={projectTags}
          cta="view projects"
          href="/projects"
        />
        {/* <LandingPageCard tags={projectTags} /> */}
      </div>
    </main>
  );
}
