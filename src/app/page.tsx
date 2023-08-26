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
      <div className="">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Designer, developer, dad, and dungeon master.
        </h1>

        <div className="flex flex-col gap-6 mt-6 text-slate-300">
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
        </div>

        {/* <div className="flex gap-6 mt-6">
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
        </div> */}
        <div className="mt-6">
          <Socials />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-12">
        <LandingPageCard
          headline="Currently writing about"
          tags={topicTags}
          cta="read my journal"
          href="/journal"
        />
        <LandingPageCard
          headline="Building stuff with"
          tags={projectTags}
          cta="view my work"
          href="/work"
        />
      </div>
    </>
  );
}
