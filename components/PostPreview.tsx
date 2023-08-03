import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
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
