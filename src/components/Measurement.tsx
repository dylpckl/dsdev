// vertical = w-px, h-full
// horizontal = h-px, w-full

type MeasurementProps = {
  orientation: "horizontal" | "vertical";
  position: "left" | "top" | "right" | "bottom";
  length?: number;
};

export default function Measurement({
  orientation,
  position,
  length,
}: MeasurementProps) {
  return (
    <span
      id="measurement"
      className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300"
    >
      <hr className="grow h-px border-0 bg-red-300" />
      <span>{length}px</span>
      <hr className="grow h-px border-0 bg-red-300" />
    </span>
  );
}

{
  /* <span className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300">
<hr className="grow h-px border-0 bg-red-300" />
<span>{length}px</span>
<hr className="grow h-px border-0 bg-red-300" />
</span> */
}

// {orientation === "horizontal" ? (
//     <span className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300">
//       <hr className="grow h-px border-0 bg-red-300" />
//       <span>{length}px</span>
//       <hr className="grow h-px border-0 bg-red-300" />
//     </span>
//   ) : (
//     <span className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-t-2 border-t-red-300 border-b-2 border-b-red-300">
//       <hr className="grow w-px border-0 bg-red-300" />
//       <span>{length}px</span>
//       <hr className="grow w-px border-0 bg-red-300" />
//     </span>
//   )}
