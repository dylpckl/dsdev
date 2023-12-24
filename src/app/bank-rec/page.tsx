"use client";

// Components
import VerticalText from "@/components/VerticalText";
import DividerWithText from "@/components/DividerWithText";

// Images

export default function Page() {
  return (
    <div>
      <section className="bg-pink-800 flex flex-col gap-12 py-24 px-48 min-h-[30vh]">
        <h1 className="text-6xl font-bold font-sans leading-relaxed text-teal-400">
          Bank Reconciliation
        </h1>
        <p className="font-sans text-xl text-slate-300 leading-relaxed tracking-tight ">
          <span className="mt-4">
            I specialize in creating design systems and advocating for the best
            possible user experience.{" "}
          </span>
          I&apos;m currently leading the design effort at{" "}
          <a
            className="font-medium text-slate-100 hover:text-teal-300 hover:underline"
            href="https://multidataservices.com/"
            target="_blank"
          >
            MDS Property Management Software
          </a>
          .
        </p>
        <div className="flex gap-5">
          <button
            type="button"
            className="rounded-md bg-white w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Design Case Studies
          </button>

          <button
            type="button"
            className="rounded-md bg-white  w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Dev Projects
          </button>

          <button
            type="button"
            className="rounded-md bg-white w-full px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Read more about me
          </button>
        </div>

        <div className="flex justify-between items-center text-slate-300">
          <p className="font-mono text-sm">
            Made with (lots) of coffee on Long Island, NY.
          </p>
          <div className="flex gap-5">
         
          </div>
        </div>
      </section>
      {/* Overview */}
      <section
        id="case-studies"
        className="flex relative mt-12 px-4"
      >
        <VerticalText text="overview" />
        <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 flex flex-col gap-20 auto-rows-min w-full"></div>
      </section>
    </div>
  );
}
