import Image from "next/image";
import fs, { readFile, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../../components/PostMetadata";
import getPostMetadata from "../../components/getPostMetadata";

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
    <main className="flex flex-col px-48 py-10">
      {/* Body */}
      <div className="flex gap-8">
        {/* Content */}
        <div className="bg-yellow-300 text-black w-full h-fit">
          <div className="">content header</div>
        </div>
      </div>
    </main>
  );
}
