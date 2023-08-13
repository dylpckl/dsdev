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

const Card = () => {
  return <div className="bg-pink-300 col-span-1">post </div>;
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
          ui designer // storyteller // dad // dungeon master
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

      <div className="flex flex-col space-y-3">
        <div className="bg-pink-300 col-span-1 md:col-span-2 rounded-lg p-4">
          <Link href="/posts">check out my posts</Link>
        </div>
        <div className="bg-pink-300 col-span-1 md:col-span-2 rounded-lg p-4">
          <Link href="/projects">projects</Link>
        </div>
        <div className="bg-pink-300 col-span-1 rounded-lg p-4">
          <Link href="/resume">resume</Link>
        </div>
      </div>
    </main>
  );
}
