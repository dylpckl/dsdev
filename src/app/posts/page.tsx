import getPostMetadata from "@/lib/getPostMetadata";
import { PostMetadata } from "@/components/PostMetadata";
import Link from "next/link";

const Post = ({ post }: { post: PostMetadata }) => {
  return (
    <article className="flex justify-between">
      <p>{post.dateCreated}</p>

      <Link
        href={`/posts/${post.slug}`}
        className="flex flex-col"
      >
        <h1>{post.slug}</h1>
        <p>{post.subtitle}</p>
      </Link>
    </article>
  );
};

export default function PostIndex() {
  const postMetadata = getPostMetadata();
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <div className="flex max-w-3xl flex-col space-y-16">
        {postMetadata.map((post) => (
          <Post
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </>
  );
}
