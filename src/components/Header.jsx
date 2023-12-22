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
          "relative block p-1 md:px-3 md:py-2 transition [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]",
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

export function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  return (
    <header className="sticky top-0 z-20 py-5 px-10 w-full backdrop-blur-md flex justify-between">
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
  );
}
