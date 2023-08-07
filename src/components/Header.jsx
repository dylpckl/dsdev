"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import avatarImage from "@/images/avatar.jpg";
import {
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from "@/components/SocialIcons";

const NavItem = ({ href, children }) => {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const Avatar = () => {
  return (
    <Link href="/">
      <Image
        src={avatarImage}
        alt=""
        height={36}
        width={36}
        className="rounded-full"
      />
    </Link>
  );
};

const Navigation = (props) => {
  return (
    <nav {...props}>
      <ul className="flex">
        <NavItem href="/about">about</NavItem>
        <NavItem href="/posts">posts</NavItem>
        <NavItem href="/projects">projects</NavItem>
      </ul>
    </nav>
  );
};

const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <a
      className="group -m-1 p-1"
      target="_blank"
      {...props}
    >
      <Icon className=" h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
};

export function Header() {
  return (
    <>
      <header className="mx-auto w-full max-w-7xl lg:max-w-5xl mb-6 flex justify-between font-mono">
        <div className="flex items-center">
          <Avatar />
          <div className="pl-6">
            <span className="text-zinc-700">dylansmith</span>
            <span className="text-zinc-700">.dev</span>
          </div>
        </div>

        <div>
          <Navigation />
        </div>

        <div className="flex items-center gap-4">
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
          <SocialLink
            href="https://github.com/dylpckl"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
        </div>
      </header>
    </>
  );
}
