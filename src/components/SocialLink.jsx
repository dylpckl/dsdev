import {
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from "@/components/SocialIcons";

// type SocialLinkProps ={
//   icon: "GithubIcon" | "LinkedInIcon",
// }

export function SocialLink({ icon: Icon, ...props }) {
  return (
    <a
      className="group -m-1 p-1"
      target="_blank"
      {...props}
    >
      <Icon className="h-8 w-8 fill-slate-300 transition group-hover:fill-teal-300" />
    </a>
  );
}

export function Socials() {
  return (
    <div className="flex items-end gap-4">
      <SocialLink
        href="https://github.com/dylpckl"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      {/* <SocialLink
    href="https://dribbble.com/dylpckl"
    aria-label="Follow on Dribbble"
    icon={DribbbleIcon}
  /> */}
      <SocialLink
        href="https://www.linkedin.com/in/dylanjbsmith/"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
    </div>
  );
}