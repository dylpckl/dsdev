const ExternalLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <a
        className="hover:text-sky-600 font-bold underline"
        href={href}
        target="_blank"
      >
        {text}
      </a>
    );
  };

  export default ExternalLink