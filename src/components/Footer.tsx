import ExternalLink from "./ExternalLink";
import SocialLink from "@/components/SocialLink";
import {
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  return (
    <div className="flex justify-between items-center text-zinc-200 text-xs font-mono h-fit py-4">
      <div className="">
        {"STACK // "}
        <ExternalLink
          href="https://www.figma.com/"
          text="Figma"
        />{" "}
        {" + "}
        <ExternalLink
          href="https://code.visualstudio.com/"
          text="VS Code"
        />{" "}
        {" + "}
        <ExternalLink
          href="https://nextjs.org/"
          text="Next.js"
        />{" "}
        {" + "}
        <ExternalLink
          href="https://tailwindcss.com/"
          text="Tailwind CSS"
        />{" "}
        {" + "}
        <ExternalLink
          href="https://vercel.com/"
          text="Vercel"
        />{" "}
        {" + "}
        <ExternalLink
          href="https://icons8.com"
          text="Icons8"
        />
        {" ["}
        <ExternalLink
          href="https://icons8.com/icon/16154/dribbble"
          text="1"
        />
        {", "}
        <ExternalLink
          href="https://icons8.com/icon/16318/github"
          text="2"
        />
        {", "}
        <ExternalLink
          href="https://icons8.com/icon/16166/linkedin"
          text="3"
        />
        {"]"}
      </div>

      <div className="flex items-end gap-4">
        <SocialLink
          href="https://github.com/dylpckl"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://dribbble.com/dylpckl"
          aria-label="Follow on Dribbble"
          icon={DribbbleIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/dylanjbsmith/"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </div>

    // https://www.jetbrains.com/lp/mono/

    // <div className="text-zinc-200 text-xs font-mono h-fit py-4 pb-8 flex justify-center">
    //   <div className="mx-auto">
    //     Designed in{" "}
    //     <ExternalLink
    //       href="https://www.figma.com/"
    //       text="Figma"
    //     />{" "}
    //     and written in{" "}
    //     <ExternalLink
    //       href="https://code.visualstudio.com/"
    //       text="VS Code"
    //     />{" "}
    //     {"//"} Built with{" "}
    //     <ExternalLink
    //       href="https://nextjs.org/"
    //       text="Next.js"
    //     />{" "}
    //     {" + "}
    //     <ExternalLink
    //       href="https://tailwindcss.com/"
    //       text="Tailwind CSS"
    //     />{" "}
    //     {"//"} Deployed to{" "}
    //     <ExternalLink
    //       href="https://vercel.com/"
    //       text="Vercel"
    //     />{" "}
    //     {"//"} Icons from{" "}
    //     <ExternalLink
    //       href="https://icons8.com"
    //       text="Icons8"
    //     />
    //     {" ["}
    //     <ExternalLink
    //       href="https://icons8.com/icon/16154/dribbble"
    //       text="1"
    //     />
    //     {", "}
    //     <ExternalLink
    //       href="https://icons8.com/icon/16318/github"
    //       text="2"
    //     />
    //     {", "}
    //     <ExternalLink
    //       href="https://icons8.com/icon/16166/linkedin"
    //       text="3"
    //     />
    //     {"]"}
    //   </div>
    // </div>
  );
}
