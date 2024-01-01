type VerticalTextProps = {
  caption?: string | number;
  text: string;
};

export default function VerticalText({ caption, text }: VerticalTextProps) {
  const Caption = () => {
    const captionIsNumber = typeof caption === "number";

    return (
      <span
        className={`text-teal-300/60 text-xl mb-6 ${captionIsNumber ? "" : "ml-2"}`}
      >
        {captionIsNumber && ".0"}
        {caption}
      </span>
    );

    // if (caption && typeof caption === "number") {
    //   return (
    //     <span className="text-teal-300/60 text-xl">
    //       {".0"}
    //       {caption}
    //     </span>
    //   );
    // } else {
    //   return <span className="text-teal-300/60 text-xl ml-2">{caption}</span>;
    // }
  };

  return (
    <div
      id="sticky-container"
      className="sticky flex flex-col top-20 items-center font-mono"
    >
      <span
        id="sticky-element"
        className="sticky flex flex-col items-center top-12 font-mono w-12 tracking-widest text-xl md:text-5xl -z-10 text-slate-300/30 uppercase"
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
  /* <div
id="sticky-container"
className="sticky flex flex-col top-20 text-center font-mono"
>
<span className="sticky top-0 mb-6 text-teal-300/60 text-xl">.01</span>
<span
    id="sticky-element"
    className="sticky top-12 font-mono tracking-widest text-xl -ml-2 md:ml-0 md:text-5xl -z-10 text-slate-300/30 uppercase"
    style={{ writingMode: "vertical-lr" }}
>
    <span style={{ writingMode: "vertical-lr" }}>
        {text}{"\\\\"}
    </span>
</span>
</div>
) */
}
