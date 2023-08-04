import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  console.log(matterResult);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(decodeURI(slug)); // decodeURI handles spaces and other problematic characters
  return (
    <div className="h-[80vh] overflow-y-auto">
      <h1>this is a post: {slug}</h1>
      <p>{post.data.dateCreated}</p>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
