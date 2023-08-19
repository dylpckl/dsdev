"use client";

// problem: cannot use fs on client. getPostMetadata won't work - how do I get the posts for this page?
// 0. ingest all journal entries so that I have all of their topics
// 1. display array of topics from entries
// 2. click a topic add its to a new array, filteredTopics (badges need x icon)
// 3. list of entries needs to map over filteredTopics
// - must be client component for onClick, useState
// -
// Solved with RouteHandlers https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { JournalEntry } from "@/components/PostMetadata";
import { useState } from "react";
import Link from "next/link";
import TagGroup from "@/components/TagGroup";

const PostCard = ({ post }: { post: JournalEntry }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const dateCreatedObj = new Date(post.dateCreated).toLocaleDateString(
    "en-us",
    options
  );
  return (
    <article className="flex text-zinc-100 group ">
      <p className="w-1/6 py-4 font-mono text-sm">{dateCreatedObj}</p>

      <div className="w-4/5 relative flex flex-col hover:bg-slate-700/75 hover:ring-2 rounded-lg ring-teal-300 px-4 py-2 scale-95 hover:scale-100 transition-all">
        <Link
          href={`/journal/${post.slug}`}
          className=""
        >
          <h2 className="font-semibold text-lg tracking-tight">
            {/* <h1 className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"> */}
            {post.slug}
            {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div> */}
          </h2>
          <p className="text-slate-300 mt-2">{post.subtitle}</p>
          <div className="mt-2">
            <TagGroup tags={post.tags} />
          </div>

          <div className="flex items-center text-sm font-medium mt-4 group-hover:text-teal-300">
            Read Entry
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 5.75 9.25 8l-2.5 2.25"
              />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
};

function filterEntries(entries: any, tags: string[]): JournalEntry[] {
  console.log(entries, tags);
  // 1. use filter() method on the videos array to return a new array videos
  // 2. use some() on video.items[0].snippet.tags to see if at least one element in the array
  //      passes the test in the provided function
  // 3. the provided function being:
  //      use some() on the tags state array to find tags where
  //      tag.value === t from video.items[0].snippet.tags
  //      and where tag.active === true (checked)
  // console.log(tags);
  const result = entries.filter(
    (entry: JournalEntry) =>
      // video.items[0].snippet.tags.some((t) =>
      entry.tags && entry.tags.some((t) => tags.some((i) => i === t))
  );
  return result;
}

export default function JournalEntries({ entries }: JournalEntry[]) {
  console.log(entries);
  const [filteredTags, setFilteredTags] = useState([]);
  // const postMetadata = getPostMetadata();

  // const postMetadata = await getPosts();
  // console.log(postMetadata);

  const handleClick = (tag: string) => {
    if (!filteredTags.includes(tag)) {
      setFilteredTags((prev) => [...prev, tag]);
    }
  };

  const removeTagFromFilter = (tag: string) => {
    setFilteredTags(filteredTags.filter((item) => item !== tag));
  };

  const sortedPosts = entries.slice().sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);
    return dateB.getTime() - dateA.getTime();
  });

  const topicsArr: string[] = [];
  function getTopics() {
    entries.map((post: JournalEntry) => {
      post.tags.map((tag) => {
        if (!topicsArr.includes(tag)) {
          topicsArr.push(tag);
        }
      });
    });
    // console.log(topicsArr);
    return topicsArr;
  }

  getTopics();

  const filteredEntries = filterEntries(entries, filteredTags);

  return (
    <>
      {/* <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        Writing on software design, company building, and the aerospace
        industry.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        All of my long-form thoughts on programming, leadership, product design,
        and more, collected in chronological order.
      </p> */}

      {/* Filter Tags */}
      <div>
        <h1 className="text-lg">Topics</h1>
        <div className="flex gap-4">
          {topicsArr.map((topic) => (
            <div
              key={topic}
              className=""
            >
              <button
                onClick={() => handleClick(topic)}
                className="rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300"
              >
                {topic}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="my-3 flex gap-2">
        {filteredTags.map((tag) => (
          <button
            onClick={() => removeTagFromFilter(tag)}
            className="flex gap-2 rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300"
          >
            <span>{tag}</span>
            <span>x</span>
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="flex max-w-4xl flex-col space-y-4 mt-8">
        {filteredEntries.map((post: JournalEntry) => (
          <PostCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </>
  );
}
