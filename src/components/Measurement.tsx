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
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  return (
    // container
    //    hr > span > hr
    // vertical: w-px, h-full

    // vertical - left edge
    // left must match width
    <span
      id="measurement"
      className="absolute w-2 flex flex-col h-full items-center -left-2 t-1/2 text-xs font-mono text-center border-b-2 border-b-red-300 border-t-2 border-t-red-300"
    >
      {/* Relative Container */}
      <div className="relative w-full h-full flex items-center justify-center ">
        <hr className="w-px h-full border-0 bg-red-300" />
        <span className="absolute -left-10">{length}px</span>
        {/* <hr className="w-px h-12 border-0 bg-red-300" /> */}
      </div>
    </span>

    // horizontal
    // <span
    //     id="measurement"
    //   className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300"
    //     >
    //       <hr className="grow h-px border-0 bg-red-300" />
    //       <span>{length}px</span>
    //       <hr className="grow h-px border-0 bg-red-300" />
    //     </span>
  );
};

export type { MeasurementProps };

// <span
//         id="measurement"
//         className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300"
//       >
//         <hr className="grow h-px border-0 bg-red-300" />
//         <span>{length}px</span>
//         <hr className="grow h-px border-0 bg-red-300" />
//       </span>

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
