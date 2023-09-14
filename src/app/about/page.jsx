import portraitImage from "../../../public/images/me.jpg";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import clsx from "clsx";
import Link from "next/link";
import ExternalLink from "@/components/ExternalLink";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <a
        href={href}
        className="group flex items-center text-sm font-medium transition hover:text-teal-300 text-slate-200"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-300 transition group-hover:fill-teal-300" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
}

const Page = () => {
  //
  return (
    <>
      <div className="flex p-12 gap-12">
        <div className="w-2/3">
          <h1 className="text-4xl font-mono text-teal-400">call me dyl 👋</h1>

          <div className="flex flex-col space-y-7 mt-6 text-xl text-slate-200">
            <p className="">
              I&apos;m Dylan &mdash; UI designer & font-end developer from Long
              Island, New York.
            </p>
            <p>
              In the summer of 2005, I snagged myself a copy of Photoshop CS and
              became obsessed with creating forum signatures. Designing for the
              web has been a big part of my life ever since.
            </p>
            <p>
              I&apos;m currently the lead UI/UX Designer for{" "}
              <a
                className="font-medium text-slate-100 hover:text-teal-300 hover:underline"
                href="https://multidataservices.com/"
                target="_blank"
              >
                New York&apos;s premier property management software solution
              </a>
              , where my focus is designing an enterprise application
              that&apos;s easy to use, nice to look at, and that gets out of the
              user&apos;s way.
            </p>
            <p>
              Though my burning passion lives in the design space, I&apos;m also
              a lifelong tinkerer, and being able to actualize my ideas using
              the web as my creative medium is truly fulfilling to me &mdash;{" "}
              <Link
                href="/#projects"
                className="text-slate-100 font-medium underline hover:text-teal-300 transition-all hover:underline"
              >
                be sure check out some stuff I've built!
              </Link>
            </p>
            <p>
              When I&apos;m not at my computer, I can usually be found hanging
              out with my wife & daughter, hiking in the mountains, or telling
              stories around a table with friends.
            </p>

            <div className="font-mono text-slate-300">
              <span>This site is designed with</span>{" "}
              <ExternalLink
                href="https://www.figma.com/"
                text="Figma"
              />
              {", "}
              written with TypeScript in{" "}
              <ExternalLink
                href="https://code.visualstudio.com/"
                text="VS Code"
              />
              {", "}built with{" "}
              <ExternalLink
                href="https://nextjs.org/"
                text="Next.js"
              />{" "}
              {" + "}
              <ExternalLink
                href="https://tailwindcss.com/"
                text="Tailwind CSS"
              />{" "}
              and deployed to{" "}
              <ExternalLink
                href="https://vercel.com/"
                text="Vercel"
              />{"."}
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <Image
            src={portraitImage}
            alt="portrait"
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />

          <ul
            role="list"
            className="space-y-4 mt-6"
          >
            {/* <li className="group flex items-center">
              <SocialLink icon={GitHubIcon} />
              <span className="group-hover:text-teal-300 font-medium transition ease-out ml-4">
                Follow on GitHub
              </span>
            </li>
            <li className="group flex items-center">
              <SocialLink icon={LinkedInIcon} />
              <span className="group-hover:text-teal-300 font-medium transition ease-out ml-4">
                Follow on LinkedIn
              </span>
            </li>
            <li className="group flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
                stroke-width="2"
                stroke="currentColor"
                width="32px"
                height="32px"
                className="h-8 w-8 text-slate-300 transition group-hover:text-teal-300 text-center justify-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span>download resume</span>
            </li>
            <li className="group flex items-center">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>email me</span>
            </li> */}
            <SocialLink
              href="https://github.com/dylpckl"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dylanjbsmith/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:dylanjbsmith@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              dylanjbsmith@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
