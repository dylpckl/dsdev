const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <a
      className="group -m-1 p-1"
      target="_blank"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
};

export default SocialLink;
