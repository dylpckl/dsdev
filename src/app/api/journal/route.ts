import { NextResponse } from "next/server";
import fs from "fs";
import matter from "gray-matter";

export async function GET(request: Request) {
  const folder = "src/app/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/app/posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    if (matterResult.data.draft === true) {
      return;
    } else {
      return {
        dateCreated: matterResult.data.dateCreated,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
        tags: matterResult.data.tags,
      };
    }
  });

  return NextResponse.json({ posts });
}
