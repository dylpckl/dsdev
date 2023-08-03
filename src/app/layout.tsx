import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
  const header = (
    <header>
      <div className="w-full font-mono mb-6 flex flex-col">
        <Link href="/">
          <div className="flex">
            <span>dylansmith</span>
            <span className="text-gray-400">.dev</span>
          </div>
        </Link>

        <span className=" text-sm font-mono">
          building stuff for the web since 2002
        </span>
      </div>
    </header>
  );

  const footer = (
    <div className="bg-gray-300 text-black">
      Designed in Figma and written in VS Code. Built with Next.js and styled
      with TailwindCSS, and deployed to Vercel.
    </div>
  );

  const nav = <nav className="bg-yellow-300 text black">nav</nav>;

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between h-screen`}
      >
        <div className="">
          {header}
          {children}
        </div>

        {footer}
      </body>
    </html>
  );
}
