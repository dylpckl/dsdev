"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import avatarImage from "@/images/avatar.jpg";
import logo from "@/images/ds-logo.png";

const NavItem = ({ href, children }) => {
  let isActive = usePathname().includes(href);

  return (
    <li className="font-mono text-sm">
      <Link
        href={href}
        className={clsx(
          "relative block p-1 md:px-3 md:py-2 transition",
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
    <Image
      src={avatarImage}
      alt=""
      height={36}
      width={36}
      className="rounded-full"
    />
  );
};

const MobileNavigation = (props) => {
  return (
    <div
      className=""
      {...props}
    >
      <div className="w-screen absolute top-0 bg-slate-300 h-12">
        <nav>
          <ul>
            <NavItem href="/journal">journal</NavItem>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const DesktopNavigation = (props) => {
  return (
    <nav {...props}>
      <ul className="flex gap-2 items-center md:gap-3">
        <NavItem href="/#case-studies">work</NavItem>
        <span className="text-slate-400 text-xs">{"//"}</span>
        {/* <NavItem href="/journal">journal</NavItem>
        <span className="text-slate-400 text-xs">{"//"}</span> */}
        <NavItem href="/about">about</NavItem>
        <span className="text-slate-400 text-xs">{"//"}</span>
        <a
          href="/dylan-smith-resume.pdf"
          target="_blank"
          className="hover:text-teal-500 dark:hover:text-teal-400 p-1 md:px-3 md:py-2 font-mono text-sm"
        >
          resume
        </a>
      </ul>
    </nav>
  );
};

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
}

export function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  return (
    <>
      <header className="relative mx-auto w-full my-4 flex justify-between">
        <Link
          href="/"
          className="relative flex items-center"
        >
          {/* <Avatar /> */}
          <Image
            src={logo}
            alt="logo"
            height={48}
          />
          <span className="ml-4 font-mono text-slate-400">Dylan Smith</span>
          {/* <span className="text-slate-200 text-lg md:text-2xl font-semibold">
            dylan smith
          </span>
          <span className="text-zinc-400 text-lg md:text-2xl font-mono">
            .dev
          </span> */}
        </Link>

        {/* Mobile Nav */}
        <div className="md:hidden rounded-lg flex gap-6 justify-between z-20">
          {mobileNavIsOpen && (
            <nav className="w-full">
              <ul className="flex flex-col gap-2 divide-y">
                <NavItem href="/work">work</NavItem>
                <NavItem href="/about">about</NavItem>
                <NavItem href="/resume">resume</NavItem>
              </ul>
            </nav>
          )}

          <button
            className="self-start z-30"
            onClick={handleMobileNav}
          >
            {mobileNavIsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </header>
    </>
  );
}
