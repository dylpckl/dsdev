// "use client";

// problem: cannot use fs on client. getPostMetadata won't work - how do I get the posts for this page?
// 0. ingest all journal entries so that I have all of their topics
// 1. display array of topics from entries
// 2. click a topic add its to a new array, filteredTopics (badges need x icon)
// 3. list of entries needs to map over filteredTopics
// - must be client component for onClick, useState
// -
// Solved with RouteHandlers https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { JournalEntry } from "@/lib/JournalEntry";
import JournalEntries from "@/components/JournalEntries";
import Link from "next/link";
import TagGroup from "@/components/TagGroup";

async function getJournalEntries() {
  try {
    const res = await fetch("https://dylansmith.dev/api/journal", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const posts = await res.json();
    return posts.posts;
  } catch (e) {
    console.log("Error");
    console.error(e);
  }
  // console.log("POSTS", posts);
}

export default async function Page() {
  const journalEntries = await getJournalEntries();
  return <>{journalEntries && <JournalEntries entries={journalEntries} />}</>;
}
