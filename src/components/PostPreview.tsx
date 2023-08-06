import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

// const PostPreview = (props: PostMetadata) => {
// const PostPreview = ({
//   params,
//   props,
// }: {
//   params: { slug: string };
//   props: PostMetadata;
// }) => {

const PostPreview = (props:PostMetadata, params: { slug: string }) => {
  console.log(props, params);
  // const isActive =()=>{
  //   if(props.slug=== props.params.slug)

  // const isActive = (slug) => {};

  return (
    <Link
      className=" "
      href={`/posts/${props.slug}`}
    >
      <p className="text-sm w-full hover:bg-zinc-700 hover:text-red-300 rounded-sm flex">
        {props.slug}
      </p>
      {/* //{" "} */}
    </Link>
  );
};

export default PostPreview;
