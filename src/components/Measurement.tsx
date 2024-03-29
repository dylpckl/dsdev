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

// type MeasurementProps =
//   // if I choose vertical, then edge needs to be either "left" or "right"
//   | {
//       orientation: "vertical";
//       edge: "left" | "right";
//       length?: number;
//       // height: number;
//       // width: never;
//     }
//   // if I choose horizontal, then edge needs to be either "top" or "bottom"
//   | {
//       orientation: "horizontal";
//       edge: "top" | "bottom";
//       length?: number;
//       // height: never;
//       // width: number;
//     };

type MeasurementProps = {
  edge: "left" | "top" | "right" | "bottom";
  length?: number;
};

export const Measurement = (props: MeasurementProps) => {
  const { edge, length } = props;
  const isHorizontal = (edge === "top" || edge === "bottom") as boolean;
  const isVertical = (edge === "left" || edge === "right") as boolean;
  return (
    <>
      {isHorizontal ? (
        <span
          id="measurement"
          className={cn(
            "absolute flex items-center left-0 top-full text-xs font-mono font-normal w-full text-center border-l-2 text-red-300 border-l-red-300 border-r-2 border-r-red-300",
            {
              "top-full": edge === "bottom",
              "-top-4": edge === "top",
            }
          )}
          // className="absolute flex items-center left-0 top-full text-xs font-mono w-full text-center border-l-2 border-l-red-300 border-r-2 border-r-red-300"
        >
          <hr className="grow h-px border-0 bg-red-300" />
          <span>{length}px</span>
          <hr className="grow h-px border-0 bg-red-300" />
        </span>
      ) : (
        // vertical
        <span
          id="measurement"
          className={cn(
            "absolute w-4 flex flex-col h-full items-center t-1/2 text-xs font-mono font-normal text-center border-b-2 border-b-red-300 border-t-2 border-t-red-300",
            {
              "-left-4": edge === "left",
              "-right-4": edge === "right",
            }
          )}
        >
          {/* Relative Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <hr className="w-px h-full border-0 bg-red-300" />
            <span
              className={cn("absolute text-red-300", {
                "-left-10": edge === "left",
                "-right-10": edge === "right",
              })}
            >
              {length}px
            </span>
          </div>
        </span>
      )}
    </>
    // ----------------------------------------------
    // vertical - left edge
    // left must match width (of measurement)
    // <span
    //   id="measurement"
    //   className="absolute w-2 flex flex-col h-full items-center -left-2 t-1/2 text-xs font-mono text-center border-b-2 border-b-red-300 border-t-2 border-t-red-300"
    // >
    //   {/* Relative Container */}
    //   <div className="relative w-full h-full flex items-center justify-center ">
    //     <hr className="w-px h-full border-0 bg-red-300" />
    //     <span className="absolute -left-10">{length}px</span>
    //     {/* <hr className="w-px h-12 border-0 bg-red-300" /> */}
    //   </div>
    // </span>
    // ----------------------------------------------

    // ----------------------------------------------
    // vertical - right edge
    // right must match width (of measurement)
    // <span
    //   id="measurement"
    //   className="absolute w-2 flex flex-col h-full items-center -right-2 t-1/2 text-xs font-mono text-center border-b-2 border-b-red-300 border-t-2 border-t-red-300"
    // >
    //   {/* Relative Container */}
    //   <div className="relative w-full h-full flex items-center justify-center ">
    //     <hr className="w-px h-full border-0 bg-red-300" />
    //     <span className="absolute -right-10 text-red-300">{length}px</span>
    //     {/* <hr className="w-px h-12 border-0 bg-red-300" /> */}
    //   </div>
    // </span>
    // ----------------------------------------------

    // ----------------------------------------------
    // horizontal

    // <span
    //   id="measurement"
    //   className={cn(
    //     orientation,
    //     "absolute w-2 flex flex-col h-full items-center t-1/2 text-xs font-mono text-center border-b-2 border-b-red-300 border-t-2 border-t-red-300",
    //     {
    //       "h-full": isHorizontal,
    //       "w-full": isVertical,
    //       "-left-2": edge === "left",
    //       "-right-2": edge === "right",
    //     }
    //   )}
    // >
    //   {/* Relative Container */}
    //   <div className="relative w-full h-full flex items-center justify-center">
    //     <hr className="w-px h-full border-0 bg-red-300" />
    //     <span
    //       className={cn("absolute text-red-300", {
    //         "-left-10": edge === "left",
    //         "-right-10": edge === "right",
    //       })}
    //     >
    //       {length}px
    //     </span>
    //   </div>
    // </span>
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
