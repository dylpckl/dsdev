export default function PostIndex() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        UI designer, storyteller, dad, dungeon master.
      </h1>
      <p className="mt-6 text-base text-zinc-200 dark:text-white">
        <div>
          <p className="mt-6 text-base text-zinc-200 dark:text-white">
            I’m Dylan, a ui designer based in Long Island, NY. I do x because y.
          </p>
          <p className="mt-6 text-base text-zinc-200 dark:text-white">
            my main focus is
          </p>
          <p className="mt-6 text-base text-zinc-200 dark:text-white">
            other stuff im interested in includes
          </p>
        </div>
      </p>
      <div className="mt-6 flex gap-6">
        {/* <SocialLink
      href="https://twitter.com"
      aria-label="Follow on Dribbble"
      icon={dribbbleIcon}
    />
    <SocialLink
      href="https://github.com"
      aria-label="Follow on GitHub"
      icon={githubIcon}
    />
    <SocialLink
      href="https://linkedin.com"
      aria-label="Follow on LinkedIn"
      icon={linkedInIcon}
    /> */}
      </div>
    </div>
  );
}
