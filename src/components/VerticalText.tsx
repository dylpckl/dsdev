type VerticalTextProps = {
  caption?: string | number;
  text: string;
};

export default function VerticalText({ caption, text }: VerticalTextProps) {
  const Caption = () => {
    const captionIsNumber = typeof caption === "number";
    console.log(captionIsNumber, caption);
    return (
      <span
        className={`text-teal-300/80 text-xl mb-6 ${
          captionIsNumber ? "ml-2" : "ml-2"
        }`}
      >
        {captionIsNumber && "0"}
        {caption}
      </span>
    );
  };

  return (
    <div
      id="sticky-container"
      className="sticky flex flex-col top-20 items-center font-mono"
    >
      <span
        id="sticky-element"
        className="sticky flex flex-col items-center top-12 font-mono w-12 tracking-widest text-xl md:text-5xl -z-10 text-slate-200/60 uppercase"
      >
        {caption ? <Caption /> : null}
        <span
          className=""
          style={{ writingMode: "vertical-lr" }}
        >
          {text}
          {" \\\\"}
        </span>
      </span>
    </div>
  );
}

{
  /* <div className="sticky top-0 w-full z-20 mb-4 bg-slate-800/60 backdrop-blur-lg px-6 py-5">
            <span className="font-mono tracking-widest text-xl md:text-5xl -z-10  text-slate-300 uppercase">
              case studies
              {" \\\\"}
            </span>
          </div> */
}
