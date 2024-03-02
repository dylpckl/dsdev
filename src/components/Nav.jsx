import Link from "next/link";

function Nav({ links, activeSection }) {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/#${link}`}
          className={`text-slate-300 hover:text-teal-300 uppercase text-sm font-semibold cursor-pointer font-mono ${
            activeSection == link && "text-teal-300"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
