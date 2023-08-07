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
        height={64}
        width={64}
        className="rounded-full"
      />
    </Link>
  );
};

const Navigation = (props) => {
  return (
    <nav {...props}>
      <ul>
        <NavItem href="/about">about</NavItem>
        <NavItem href="/posts">posts</NavItem>
      </ul>
    </nav>
  );
};

const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <Link
      className="group -m-1 p-1"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

export function Header() {
  return (
    <>
      <header className="">
        <Avatar />
        <Navigation />
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
      </header>
    </>
  );
}
