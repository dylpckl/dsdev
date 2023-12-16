import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

import dribbbleIcon from "../../public/icons8-dribbble.svg";
import githubIcon from "../../public/icons8-github.svg";
import linkedInIcon from "../../public/icons8-linkedin.svg";
import ScrollToTop from "../components/ScrollToTop";
import DSLogo from "../../public/Logo Icon.png";
import Nav from "../components/NavItem";
import NavItem from "@/components/NavItem";
import ExternalLink from "@/components/ExternalLink";
import Head from "next/head";

import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoCredit from "@/components/Footer";
import mountains from "@/images/mountain.jpg";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains_mono",
});

export const metadata: Metadata = {
  title: "Dylan Smith - Designer & Developer",
  description: "Dylan Smith is a UI Designer and Developer who crafts best in class storytelling experiences for the web.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <body
        className={`${inter.variable} ${jetbrains_mono.variable} relative bg-slate-900 font-sans selection:bg-teal-300 selection:text-teal-900 h-screen overflow-y-auto scroll-smooth `}
      >
        {/* Photo Credit */}
        <div
          id="touchpoint"
          className="hidden md:block absolute group h-4 w-4 rounded-full right-12 md:right-12 bg-slate-100/60 outline outline-2 outline-offset-4 outline-slate-100/60 bottom-[40%] hover:bg-slate-100 transition-colors ease-out duration-500 hover:outline-slate-100"
        >
          {/* This tooltip container exists so that the tooltip has a relative parent */}
          <div
            id="tooltipContainer"
            className="relative flex"
          >
            {/* Tooltip body */}
            <div className="absolute z-50 drop-shadow-lg flex flex-col min-w-[150px] p-2 -top-[64px] -right-2 text-sm font-mono rounded-lg bg-slate-100 text-slate-800 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="font-bold">Photo Cred</span>

              <div className="flex items-center underline">
                <a
                  href="https://www.pexels.com/photo/white-and-black-mountain-wallpaper-933054/"
                  target="_blank"
                >
                  Joyston Judah
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto min-h-screen h-screen px-4 overflow-y-auto">
          <Image
            src={mountains}
            alt="mountains"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            fill
            className="-z-10"
          />

          {/* <div className="overflow-hidden"> */}
          {/* <div className="flex flex-col w-full h-screen"> */}
          <Header />

          <div className="flex flex-col mx-auto w-full grow rounded-lg h-full">
            <main
              className={`${inter.variable} ${jetbrains_mono.variable} font-sans grow  bg-gradient-to-b from-[#6c6573]/80 backdrop-blur-sm text-[#031739] flex-auto w-full rounded-lg`}
            >
              {/* <main className="h-full bg-[#6c6573]/80 text-[#031739] p-4 flex-auto overflow-y-auto w-full rounded-lg"> */}
              {/* <div className="h-full grow bg-[#6c6573]/80 text-[#031739] p-4 flex-auto overflow-y-auto w-full rounded-lg"> */}
              <Providers>{children}</Providers>
              {/* </div> */}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
