import Link from "next/link";

function Nav({ links, activeSection }) {
  return (
    <div className="flex flex-col">
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/#${link}`}
          className={`cursor-pointer ${
            activeSection == link && "text-orange-500"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
