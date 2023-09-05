import fs from "fs";
import matter from "gray-matter";
import { JournalEntry } from "./JournalEntry";

const getPostMetadata = (): JournalEntry[] => {
  const folder = "src/app/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/app/posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      dateCreated: matterResult.data.dateCreated,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });
  return posts;

  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  // return slugs;
};

export default getPostMetadata;
