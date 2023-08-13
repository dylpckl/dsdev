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

const LandingPageCard = () => {
  return <div className="bg-pink-300 col-span-1">post </div>;
};

const topics = ["cooking", "dnd", "ui-design", "productivity", "note-taking"];

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

  const topics2 = postMetadata.map((post) => {
    post.tags;
  });

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

      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3">
        {/* Posts */}
        <Link
          href="/posts"
          className="flex flex-col group border-2 border-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700"
        >
          <>
            <h2>i'm currently writing about</h2>

            <ul className="flex flex-wrap">
              {topics.map((topic) => (
                <li className="mr-1 mt-2">
                  <span className="bg-pink-300 rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center">
              <span className="font-mono border-b border-transparent transition group-hover:border-teal-300 motion-reduce:transition-none">
                {" "}
                check out my posts
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

        {/* Projects */}
      </div>
    </main>
  );
}
