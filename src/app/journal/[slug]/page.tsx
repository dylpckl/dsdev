// 'use client'
// import {useRef}

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/getPostMetadata";
import BackButton from "@/components/BackButton";
import TagGroup from "@/components/TagGroup";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  // console.log(matterResult.content);
  return matterResult;
};

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const tag = (tag: string) => {
  return (
    <div
      key={tag}
      className="bg-zinc-300 rounded-sm p-2"
    >
      {tag}
    </div>
  );
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(decodeURI(slug)); // decodeURI handles spaces and other problematic characters
  // console.log(post);
  const tags = post.data.tags;
  console.log(tags);
  return (
    // <div className="flex flex-col">
    <>
      <div className="flex flex-col md:flex-row md:gap-6 ">
        <BackButton />

        <div className="w-full text-slate-800">
          <h1 className="text-4xl font-bold tracking-tight">
            {decodeURI(slug)}
          </h1>
          <p>{post.data.dateCreated}</p>

          {tags && <TagGroup tags={tags} />}

          {/* {tags.map((tag: string) => (
              <div
                key={tag}
                className="text-xs font-mono bg-zinc-300 rounded-md py-1 px-2"
              >
                {tag}
              </div>
            ))} */}
        </div>
      </div>

      <article className="mt-6 prose prose-slate dark:prose-invert prose-sm max-w-none">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
    // </div>
  );
};

export default PostPage;
