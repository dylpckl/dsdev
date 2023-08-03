import Image from "next/image";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
const posts = markdownPosts.map((fileName)=>{
  const fileContents = fs.readFileSync(`/posts/${fileName}`, "utf-8")
  const matterResult = matter(fileContents)
  return {
    title: matterResult.data.title,
    dateCreated: matterResult.data.dateCreated,
    subtitle: matterResult.data.subtitle,
    slug: fileName.replace(".md","")
  }
}

  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
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
