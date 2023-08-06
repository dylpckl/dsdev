import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import dribbbleIcon from "../../public/icons8-dribbble.svg";
import githubIcon from "../../public/icons8-github.svg";
import linkedInIcon from "../../public/icons8-linkedin.svg";
import ScrollToTop from "../components/ScrollToTop";
import DSLogo from "../../public/Logo Icon.png";
import Nav from "../components/NavItem";
import NavItem from "../components/NavItem";

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
    <nav className="col-span-1 flex flex-col gap-2 min-w-[25%] ">
      {postPreviews}
    </nav>
  );

  const header = (
    <header className="col-span-3 font-mono mb-6 flex flex-col h-fit">
      <Link
        className="flex"
        href="/"
      >
        {/* <Image
          src={DSLogo}
          alt="Dylan Smith Logo"
        /> */}
        <div className="flex text-lg">
          <span>dylansmith</span>
          <span className="text-gray-400">.dev</span>
        </div>
      </Link>

      <span className="text-sm text-zinc-500 font-mono">
        building stuff for the web since 2002
      </span>
    </header>
  );

  const ExternalLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <a
        className="hover:text-sky-600 font-bold"
        href={href}
        target="_blank"
      >
        {text}
      </a>
    );
  };

  const footer = (
    <div className="text-black text-xs font-mono col-span-1 h-fit ">
      Designed in{" "}
      <ExternalLink
        href="https://www.figma.com/"
        text="Figma"
      />{" "}
      and written in{" "}
      <ExternalLink
        href="https://code.visualstudio.com/"
        text="VS Code"
      />
      . Built with{" "}
      <ExternalLink
        href="https://nextjs.org/"
        text="Next.js"
      />{" "}
      and styled with{" "}
      <ExternalLink
        href="https://tailwindcss.com/"
        text="Tailwind CSS"
      />
      . Deployed to{" "}
      <ExternalLink
        href="https://vercel.com/"
        text="Vercel"
      />
      . Icons from{" "}
      <a
        target="_blank"
        href="https://icons8.com"
      >
        Icons8
      </a>{" "}
      <a
        target="_blank"
        href="https://icons8.com/icon/16154/dribbble"
      >
        {"["}1,
      </a>{" "}
      <a
        target="_blank"
        href="https://icons8.com/icon/16318/github"
      >
        {" "}
        2,
      </a>{" "}
      <a
        target="_blank"
        href="https://icons8.com/icon/16166/linkedin"
      >
        {" "}
        3{"]"}
      </a>{" "}
    </div>
  );

  const social = (
    <div className="flex flex-col justify-between">
      {/* Social */}
      <div className="ml-4 bg-zinc-300 rounded-md flex text-black flex-col gap-2 p-2 items-center">
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

      {/* Jump to top */}
      {/* <div className=" self-end">
        <ScrollToTop />
      </div> */}
    </div>
  );

  return (
    <html
      lang="en"
      className={`${inter.className} h-screen sm:mx-8 mx-16 xl:mx-48 py-6 overflow-hidden`}
    >
      <body className="grid grid-cols-[1fr,4fr] auto-rows-min auto-cols-max h-full">
        {header}
        {nav}
        {children}
        {social}
        {footer}
      </body>
    </html>
  );
}
