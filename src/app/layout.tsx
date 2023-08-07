import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import getPostMetadata from "../lib/getPostMetadata";
import PostPreview from "../components/PostPreview";
import dribbbleIcon from "../../public/icons8-dribbble.svg";
import githubIcon from "../../public/icons8-github.svg";
import linkedInIcon from "../../public/icons8-linkedin.svg";
import ScrollToTop from "../components/ScrollToTop";
import DSLogo from "../../public/Logo Icon.png";
import Nav from "../components/NavItem";
import NavItem from "@/components/NavItem";
import ExternalLink from "@/components/ExternalLink";

import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Smith",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((post) => (
    // <PostPreview
    //   key={post.slug}
    //   {...post}
    // />

    <NavItem
      key={post.slug}
      {...post}
    />
  ));

  const nav = (
    <div className="flex flex-col font-mono">
      <span className="">Index</span>
      <nav className="col-span-1 flex flex-col gap-1 min-w-[25%] ">
        {postPreviews}
      </nav>
    </div>
  );

  const footer = (
    <div className="text-black text-xs font-mono col-span-3 h-fit mt-8 py-8  border-t p-4 flex justify-center">
      <div>
        Designed in{" "}
        <ExternalLink
          href="https://www.figma.com/"
          text="Figma"
        />{" "}
        and written in{" "}
        <ExternalLink
          href="https://code.visualstudio.com/"
          text="VS Code"
        />{" "}
        // Built with{" "}
        <ExternalLink
          href="https://nextjs.org/"
          text="Next.js"
        />{" "}
        and styled with{" "}
        <ExternalLink
          href="https://tailwindcss.com/"
          text="Tailwind CSS"
        />{" "}
        // Deployed to{" "}
        <ExternalLink
          href="https://vercel.com/"
          text="Vercel"
        />{" "}
        // Icons from{" "}
        <ExternalLink
          href="https://icons8.com"
          text="Icons8"
        />
        {" ["}
        <ExternalLink
          href="https://icons8.com/icon/16154/dribbble"
          text="1"
        />
        {", "}
        <ExternalLink
          href="https://icons8.com/icon/16318/github"
          text="2"
        />
        {", "}
        <ExternalLink
          href="https://icons8.com/icon/16166/linkedin"
          text="3"
        />
        {"]"}
      </div>
    </div>
  );

  const sideBar = (
    <div className="flex flex-col font-mono sticky top-[72px] h-screen">
      <span className="">Posts</span>
      <nav className="col-span-1 flex flex-col gap-1 min-w-[25%] ">
        {postPreviews}
      </nav>
      {/* {credits} */}
    </div>
  );

  const header = (
    <header className=" bg-white col-span-3 font-mono mb-6 flex flex-col h-fit sticky top-0">
      <Link
        className="flex text-lg w-fit"
        href="/"
      >
        <span>dylansmith</span>
        <span className="text-gray-400">.dev</span>
      </Link>

      <span className="text-sm text-zinc-500 font-mono">
        building stuff for the web since 2002
      </span>
    </header>
  );

  const social = (
    <div className="sticky top-[72px] h-screen ml-4">
      <div className="flex flex-col bg-zinc-300 rounded-md text-black gap-2 p-2 items-center">
        <span>👀</span>
        <a
          href="https://dribbble.com/dylpckl"
          target="_blank"
        >
          <Image
            src={dribbbleIcon}
            alt="Dribbble Icon"
          />
        </a>
        <a
          href="https://github.com/dylpckl"
          target="_blank"
        >
          {" "}
          <Image
            src={githubIcon}
            alt="GitHub Icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dylanjbsmith/"
          target="_blank"
        >
          {" "}
          <Image
            src={linkedInIcon}
            alt="LinkedIn Icon"
          />
        </a>
      </div>
    </div>
  );

  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-300">
        {/* {header}
        {sideBar}
        {nav}
        {children}
        {social}
        {footer} */}
        {/* <div>
          <Layout>{children}</Layout>
        </div> */}
        <div className="flex flex-col w-full">
          <Header />

          <main className="flex-auto">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
