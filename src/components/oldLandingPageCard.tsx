import Link from "next/link";
import TagGroup from "./TagGroup";

type LandingPageCardProps = {
  tags: string[];
  headline: string;
  cta: string;
  href: string;
  descVisible: boolean;
};

const LandingPageCard: React.FC<LandingPageCardProps> = ({
  tags,
  headline,
  cta,
  href,
  descVisible,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col relative group h-full w-full md:w-1/2 gap-2 group transition-all hover:ring-2 ring-teal-300 col-span-1 md:col-span-2 rounded-lg p-4 text-slate-200 bg-slate-700/75"
    >
      {/* <div className="absolute -inset-x-1 -inset-y-1 z-0 hidden group-hover:block rounded-md transition motion-reduce:transition-none bg-slate-800/50 blur-sm"></div> */}
      <>
        <div className="z-10 flex gap-2 items-baseline">
          <h2 className="">{headline}</h2>
          <span className="text-slate-400 text-xs">{"//"}</span>
        </div>

        {descVisible && (
          <p className="text-sm mt-2">
            Web app for finding Steam games that both you and your friends own.
            After connecting your Steam account, the app populates your friend
            list so that you can build a party. Then execute the query to find
            any games that everyone in the party owns. Also includes a
            &ldquo;pick for us&ldquo; feature if you can&apos;t decide.
          </p>
        )}

        {tags && <TagGroup tags={tags} />}

        {/* Call to Action */}
        <div className="z-10 flex items-center mt-4 mr-2 self-end border-b border-transparent transition group-hover:border-teal-300  motion-reduce:transition-none">
          <span className="font-mono font-light">{cta}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 w-4 h-4 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:text-teal-300 motion-reduce:transition-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </>
    </Link>
  );
};

export default LandingPageCard;
