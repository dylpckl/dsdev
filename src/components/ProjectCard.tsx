import Image from "next/image";
import { Project } from "@/lib/data";
import TagGroup from "./TagGroup";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Card from "./Card";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="hover:-translate-y-3 hover:ring-2 ring-teal-300 transition-all ease-out">
      <a
        href={project.slug}
        target="_blank"
        className="w-full grid grid-cols-2 sm:gap-12 md:gap-8 min-h-[120px] text-slate-200 rounded-lg"
      >
        {project.image && (
          <Image
            src={project.image}
            alt="Picture of www.steamparty.io user interface"
            className="rounded-lg mr-4 col-span-1"
          />
        )}

        <div
          // className={clsx("flex flex-col", {
          //   "col-span-1": project.image !== null,
          //   "col-span-2": project.image === null,
          // })}
          className={project.image ? "col-span-1" : "col-span-2"}
        >
          <span className="flex items-center font-medium justify-between">
            <div className="flex items-center gap-2">
              {project.title}
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
            </div>
            <span
              className={clsx(
                "ml-4 rounded-full px-3 py-1 text-xs font-medium leading-5 uppercase",
                {
                  "bg-sky-500/30 text-sky-200":
                    project.status === "proof of concept",
                  "bg-teal-400/10 text-teal-300": project.status === "deployed",
                  "bg-slate-600 text-slate-200":
                    project.status === "coming soon",
                  "bg-purple-500/30 text-purple-200":
                    project.status === "in development",
                }
              )}
            >
              {project.status}
            </span>
          </span>

          <p className="mt-8">{project.subtitle}</p>
          {/* <div className={project.image !== null ? "mt-auto" : "mt-6"}> */}
          <div className="mt-8">
            <TagGroup tags={project.tags} />
          </div>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
