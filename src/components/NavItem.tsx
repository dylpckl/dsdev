"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostMetadata } from "./PostMetadata";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavItem = (props: PostMetadata) => {
  const pathname = decodeURI(usePathname());
  // console.log(pathname);
  const isActive = pathname.replace("/posts/", "") === props.slug;
  // console.log(pathname.replace("/posts/", ""), props.slug, isActive);

  return (
    <Link
      className={classNames(
        isActive ? "bg-zinc-600 text-teal-100" : "text-black hover:bg-zinc-300",
        "px-2 py-1 rounded-md"
      )}
      href={`/posts/${props.slug}`}
    >
      {props.slug}
    </Link>
  );
};

export default NavItem;
