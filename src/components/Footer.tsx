import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <div className="text-black text-xs font-mono col-span-3 h-fit mt-8 py-8  border-t p-4 flex justify-center">
      <div>
        Designed in{" "}
        <ExternalLink
          href="https://www.figma.com/"
          text="Figma"
        />{" "}
        and written in{" "}
        <ExternalLink
          href="https://code.visualstudio.com/"
          text="VS Code"
        />{" "}
        // Built with{" "}
        <ExternalLink
          href="https://nextjs.org/"
          text="Next.js"
        />{" "}
        and styled with{" "}
        <ExternalLink
          href="https://tailwindcss.com/"
          text="Tailwind CSS"
        />{" "}
        // Deployed to{" "}
        <ExternalLink
          href="https://vercel.com/"
          text="Vercel"
        />{" "}
        // Icons from{" "}
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
    </div>
  );
}
