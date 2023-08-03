import Image from "next/image";
import fs, { readFile, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  // console.log(files)
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  console.log(markdownPosts);
  // console.log(process.cwd());

  const posts = markdownPosts.map((fileName) => {
    // const actualPath = readFile(__dirname + path, fileName);
    // const directory = path.resolve(process.cwd(), "posts");
    // const file = readFileSync(path.join(directory, fileName), "utf8");
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      dateCreated: matterResult.data.dateCreated,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;

  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  // return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.slug}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.dateCreated}</p>
    </div>
  ));
  return (
    <main className="flex flex-col px-48 py-10">
      {/* Body */}
      <div className="flex gap-8">
        {/* Content */}
        <div className="bg-yellow-300 text-black w-full h-fit">
          <div className="">content header</div>
          <div>{postPreviews}</div>
        </div>

        {/* Connect */}
        <div className="bg-teal-300 flex flex-col h-fit">
          <span>👀</span>
          <span>dribbble</span>
          <span>github</span>
          <span>linkedin</span>
        </div>
      </div>
    </main>
  );
}
