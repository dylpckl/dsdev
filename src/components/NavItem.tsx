"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostMetadata } from "./PostMetadata";

const NavItem = (props: PostMetadata) => {
  const pathname = decodeURI(usePathname());
  console.log(pathname);
  const isActive = pathname.replace("/posts/", "") === props.slug;
  console.log(pathname.replace("/posts/", ""), props.slug, isActive);

  return (
    <Link
      className={
        isActive
          ? "bg-zinc-600 p-1 rounded-md text-teal-100"
          : "p-1 text-black hover:bg-zinc-300 rounded-md"
      }
      href={`/posts/${props.slug}`}
    >
      {props.slug}
    </Link>
  );
};

export default NavItem;
