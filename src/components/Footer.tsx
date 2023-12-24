import { Socials } from "@/components/SocialLink";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-10 text-zinc-200 text-xs font-mono py-24 mt-12">
      <div className="">
        <span>&copy; 2023 Dylan Smith</span>
      </div>

      <Socials />
    </footer>
  );
}
