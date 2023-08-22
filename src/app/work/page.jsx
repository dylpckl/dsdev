// steamparty
// huberman-db
// dsdev
// obsidian-sticky-header
import steamparty from "../../../public/images/steamparty.png";
import Image from "next/image";
import Link from "next/link";
import TagGroup from "@/components/TagGroup";

export default function PostIndex() {
  return (
    <>
      <div className="flex flex-col">
        {/* UI/UX Case Studies */}
        <div>
          <h1 className="font-mono text-2xl">UI/UX Case Studies</h1>
          <div className="bg-pink-300 w-full flex flex-col gap-4">
            <div className="bg-sky-300 w-full">spire </div>
            <div className="bg-sky-300 w-full">ds dev</div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-12">
          <h1 className="font-mono text-2xl">Projects</h1>

          {/* Project Grid */}
          <div className="grid grid-cols-2 gap-5 w-full">
            {/* Project Card */}
            <a
              href="https://www.steamparty.io"
              target="_blank"
              className="col-span-1 grid grid-cols-8 sm:gap-8 md:gap-4 text-slate-200 bg-slate-700/40 hover:bg-slate-700 p-4 rounded-lg transition-all hover:ring-2 ring-teal-300"
              // flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75
            >
              <Image
                src={steamparty}
                alt="Picture of www.steamparty.io user interface"
                className="rounded-lg mr-4 col-span-2"
              />

              <div className="col-span-6 flex flex-col">
                <span className="flex items-center font-medium">
                  www.steamparty.io
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-3 h-3 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </span>

                <p className="text-sm mt-2">
                  Web app for finding Steam games that both you and your friends
                  own. After connecting your Steam account, the app populates
                  your friend list so that you can build a party. Then execute
                  the query to find any games that everyone in the party owns.
                  Also includes a "pick for us" feature if you can't decide.
                </p>
                <TagGroup tags={["React", "React Query", "Tailwind CSS"]} />
              </div>
            </a>
          </div>
        
        
        
        
        </div>
      </div>
    </>
  );
}
