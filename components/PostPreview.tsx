import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="bg-red-300">
      <Link
        className="bg-red-300 font-mono w-full hover:bg-zinc-700 hover:text-stone-300 rounded-sm p-2 flex "
        href={`/posts/${props.slug}`}
      >
        <h2>{props.slug}</h2>
        {/* <p>{props.dateCreated}</p> */}
      </Link>
    </div>
  );
};

export default PostPreview;
