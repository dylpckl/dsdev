import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="font-mono w-full hover:bg-zinc-700 hover:text-stone-300 rounded-sm p-2">
      <Link
        className="flex justify-between"
        href={`/posts/${props.slug}`}
      >
        <h2>{props.slug}</h2>
        {/* <p>{props.dateCreated}</p> */}
      </Link>
      {/* <p>{props.subtitle}</p> */}
    </div>
  );
};

export default PostPreview;
