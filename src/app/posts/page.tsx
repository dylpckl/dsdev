import getPostMetadata from "@/lib/getPostMetadata";
import { PostMetadata } from "@/components/PostMetadata";
import Link from "next/link";

const PostCard = ({ post }: { post: PostMetadata }) => {
  return (
    <article className="flex text-zinc-100">
      <p className="w-1/5">{post.dateCreated.toLocaleDateString()}</p>

      <div className="w-4/5 group relative flex flex-col ">
        <Link
          href={`/posts/${post.slug}`}
          className=""
        >
          <h2 className="font-semibold tracking-tight">
            {/* <h1 className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"> */}
            {post.slug}
            {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div> */}
          </h2>
          <p>{post.subtitle}</p>
          <div className="flex items-center text-sm font-medium mt-4">
            Read Post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 5.75 9.25 8l-2.5 2.25"
              />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
};

const LatestPost = ({ post }: { post: PostMetadata }) => {
  return (
    <article>
      <h2>{post.slug}</h2>
      <p>{post.dateCreated.toLocaleDateString()}</p>
      <p>post preview here</p>
    </article>
  );
};

export default function PostIndex() {
  const postMetadata = getPostMetadata();

  function convertStringToDate(arr: PostMetadata[], property: string) {
    const newArr = arr.map((item) => {
      const newItem = { ...item };
      if (item[property] && typeof item[property] === "string") {
        item[property] = new Date(item[property]);
      }
      return newItem;
    });
    return newArr;
  }
  convertStringToDate(postMetadata, "dateCreated");
  console.log("sorted posts: ", postMetadata);

  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        Writing on software design, company building, and the aerospace
        industry.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        All of my long-form thoughts on programming, leadership, product design,
        and more, collected in chronological order.
      </p>

      <p>Latest</p>

      <LatestPost post={postMetadata[0]} />

      {/* List */}
      <div className="border-l pl-4 flex max-w-3xl flex-col space-y-10 mt-8">
        {postMetadata
          .slice(1)
          .sort((a, b) => b.dateCreated - a.dateCreated)
          .map((post) => (
            <PostCard
              key={post.slug}
              post={post}
            />
          ))}
        {/* {postMetadata
          .slice(1)
          .sort((a, b) => b.dateCreated - a.dateCreated)
          .map((post) => (
            <>
              <p>{post.slug}</p>
              <p>{post.dateCreated.toLocaleDateString()}</p>
            </>
          ))} */}
      </div>
    </>
  );
}
