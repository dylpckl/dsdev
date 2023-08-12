const ExternalLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <a
        className="hover:text-teal-300 font-semi bold underline"
        href={href}
        target="_blank"
      >
        {text}
      </a>
    );
  };

  export default ExternalLink