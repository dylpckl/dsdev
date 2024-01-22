// External
import type { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";

// Fonts
import { Inter, JetBrains_Mono } from "next/font/google";

// Internal
import "./globals.css";

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
      // className="scroll-smooth snap snap-y snap-mandatory"
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

      {/* <body
        className={`${inter.variable} ${jetbrains_mono.variable} relative bg-slate-900 font-sans selection:bg-teal-300 selection:text-teal-900 h-screen overflow-y-auto scroll-smooth `} */}
      <body
        className={`${inter.variable} ${jetbrains_mono.variable} relative  font-sans selection:bg-teal-300 selection:text-teal-900 `}
      >
        {/* <div className="flex flex-col mx-auto min-h-screen h-screen px-4 overflow-y-auto"> */}
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
        {/* <div className="flex flex-col mx-auto w-full grow rounded-lg h-full"> */}
        {/* <main className="bg-gradient-to-b from-[#6c6573]/80 backdrop-blur-sm text-[#031739] flex-auto w-full rounded-lg h-screen"> */}
        <main className="w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// {/* Photo Credit */}
// <div
//   id="touchpoint"
//   className="hidden md:block absolute group h-4 w-4 rounded-full right-12 md:right-12 bg-slate-100/60 outline outline-2 outline-offset-4 outline-slate-100/60 bottom-[40%] hover:bg-slate-100 transition-colors ease-out duration-500 hover:outline-slate-100"
// >
//   {/* This tooltip container exists so that the tooltip has a relative parent */}
//   <div
//     id="tooltipContainer"
//     className="relative flex"
//   >
//     {/* Tooltip body */}
//     <div className="absolute z-50 drop-shadow-lg flex flex-col min-w-[150px] p-2 -top-[64px] -right-2 text-sm font-mono rounded-lg bg-slate-100 text-slate-800 opacity-0 transition-opacity group-hover:opacity-100">
//       <span className="font-bold">Photo Cred</span>

//       <div className="flex items-center underline">
//         <a
//           href="https://www.pexels.com/photo/white-and-black-mountain-wallpaper-933054/"
//           target="_blank"
//         >
//           Joyston Judah
//         </a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="w-4 h-4 ml-2"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
//           />
//         </svg>
//       </div>
//     </div>
//   </div>
// </div>
