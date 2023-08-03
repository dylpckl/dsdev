import fs from "fs";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(decodeURI(slug)); // decodeURI handles spaces and other problematic characters
  return (
    <>
      <h1>this is a post: {slug}</h1>
      <p>{content}</p>
    </>
  );
};

export default PostPage;
