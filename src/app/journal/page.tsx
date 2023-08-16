import getPostMetadata from "@/lib/getPostMetadata";
import { PostMetadata } from "@/components/PostMetadata";
import Link from "next/link";
import TagGroup from "@/components/Tags";

const PostCard = ({ post }: { post: PostMetadata }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const dateCreatedObj = new Date(post.dateCreated).toLocaleDateString(
    "en-us",
    options
  );
  return (
    <article className="flex text-zinc-100 group ">
      <p className="w-1/6 py-4 font-mono text-sm">{dateCreatedObj}</p>

      <div className="w-4/5 relative flex flex-col hover:bg-slate-700/75 hover:ring-2 rounded-lg ring-teal-300 px-4 py-2 scale-95 hover:scale-100 transition-all">
        <Link
          href={`/journal/${post.slug}`}
          className=""
        >
          <h2 className="font-semibold text-lg tracking-tight">
            {/* <h1 className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"> */}
            {post.slug}
            {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div> */}
          </h2>
          <p className="text-slate-300 mt-2">{post.subtitle}</p>
          <TagGroup tags={post.tags} />
          <div className="flex items-center text-sm font-medium mt-4 group-hover:text-teal-300">
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

// const LatestPost = ({ post }: { post: PostMetadata }) => {
//   return (
//     <article>
//       <h2 className="font-semibold text-2xl tracking-tight text-zinc-200">
//         {post.slug}
//       </h2>
//       <p>
//         {post.dateCreated
//           ? post.dateCreated.toLocaleDateString("en-us", {
//               weekday: "short",
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })
//           : "post"}
//       </p>
//       <p className="truncate">{post.subtitle}</p>
//       <div className="flex items-center text-sm font-medium mt-4">
//         Read Post
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 16 16"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="w-4 h-4"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M6.75 5.75 9.25 8l-2.5 2.25"
//           />
//         </svg>
//       </div>
//     </article>
//   );
// };

export default function PostIndex() {
  const postMetadata = getPostMetadata();

  // const convertDateStringsToDateObjects = (
  //   postArr: PostMetadata[]
  // ): PostMetadata[] => {
  //   const updatedPosts: PostMetadata[] = postArr.map((post) => ({
  //     ...post,
  //     dateCreated: new Date(post.dateCreated).toLocaleString(),
  //   }));

  //   return updatedPosts;
  // };
  // const sortedPosts = convertDateStringsToDateObjects(postMetadata);
  // console.log(sortedPosts);

  const sortedPosts = postMetadata.slice().sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      {/* <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        Writing on software design, company building, and the aerospace
        industry.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        All of my long-form thoughts on programming, leadership, product design,
        and more, collected in chronological order.
      </p> */}

      {/* <LatestPost post={postMetadata[0]} /> */}

      {/* Post List */}
      <div className="flex max-w-4xl flex-col space-y-4 mt-8">
        {sortedPosts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
          />
        ))}
        {/* {sortedPosts
          .slice(1)
          // .sort((a, b) => b.dateCreated - a.dateCreated)
          .map((post) => (
            <PostCard
              key={post.slug}
              post={post}
            />
          ))} */}
      </div>
    </>
  );
}
