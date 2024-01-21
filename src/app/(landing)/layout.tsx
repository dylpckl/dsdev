// External
import type { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";

// Fonts
import { Inter, JetBrains_Mono } from "next/font/google";

// Internal
import "../../app/globals.css";

// Components
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Mountains from "/public/images/mountain.jpg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains_mono",
});

export const metadata: Metadata = {
  title: "Dylan Smith - Designer & Developer",
  description:
    "Dylan Smith is a UI Designer and Developer who crafts best in class storytelling experiences for the web.",
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
        className={`${inter.variable} ${jetbrains_mono.variable} relative  font-sans selection:bg-teal-300 selection:text-teal-900 `}
      >
        <Image
          src={Mountains}
          alt="mountains"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: -5,
          }}
          className="fixed"
        />
        <Header />
        <main className="w-full flex flex-col md:px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
