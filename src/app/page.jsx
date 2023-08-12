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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          UI designer, storyteller, dad, dungeon master.
        </h1>

        <div>
          <p className="flex flex-col mt-6 text-base text-zinc-200 dark:text-white">
            I’m Dylan, a ui designer based in Long Island, NY. I do x because y.
            {"\n"}
            my main focus is{"\n"}
            other stuff im interested in includes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 space-y-3 md:space-x-3 md:space-y-0">
        <div className="bg-pink-300 col-span-1 md:col-span-2 rounded-lg p-4">
          check out my posts
        </div>
        <div className="bg-pink-300 col-span-1 md:col-span-2 rounded-lg p-4">
          projects
        </div>
        <div className="bg-pink-300 col-span-1 rounded-lg p-4">resume</div>
      </div>
    </main>
  );
}
