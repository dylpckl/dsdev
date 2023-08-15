const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <a
      className="group -m-1 p-1"
      target="_blank"
      {...props}
    >
      <Icon className="h-8 w-8 fill-slate-300 transition group-hover:fill-teal-300" />
    </a>
  );
};

export default SocialLink;
