import { cn } from "@/lib/utils";
// vertical = w-px, h-full
// horizontal = h-px, w-full

// configs:
// 1. vertical: left edge, right edge
// 2. horizontal: top edge, bottom edge

// type MeasurementProps = {
//   orientation: "horizontal" | "vertical";
//   position: "left" | "top" | "right" | "bottom";
//   length?: number;
// };

type MeasurementProps =
  // if I choose vertical, then edge needs to be either "left" or "right"
  | {
      orientation: "vertical";
      edge: "left" | "right";
      length?: number;
      // height: number;
      // width: never;
    }
  // if I choose horizontal, then edge needs to be either "top" or "bottom"
  | {
      orientation: "horizontal";
      edge: "top" | "bottom";
      length?: number;
      // height: never;
      // width: number;
    };

export const Measurement = (props: MeasurementProps) => {
  const { orientation, edge, length } = props;
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
};

export type { MeasurementProps };

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
