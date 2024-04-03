"use client";
import { Fragment, useRef } from "react";

import { cn } from "@/lib/utils";
import { useDimensions } from "@/lib/useDimensions";
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

// -----------------------------------------------------------
// utilizies useDimensions hook to measure it's own width and height

type MeasurementProps = {
  edge: "left" | "top" | "right" | "bottom";
  // length: number;
};

export const Measurement = (props: MeasurementProps) => {
  const divRef = useRef(null);
  const { width, height } = useDimensions(divRef);
  console.log(width, height, "measurement");

  const { edge } = props;

  const isHorizontal = (edge === "top" || edge === "bottom") as boolean;
  const isVertical = (edge === "left" || edge === "right") as boolean;

  return (
    <div ref={divRef}>
      {isHorizontal ? (
        <span
          id="horizontal-measurement"
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
          <span className="mx-2 leading-3">{width}px</span>
          {/* <span className="mx-2 leading-3">{length}px</span> */}
          <hr className="grow h-px border-0 bg-red-300" />
        </span>
      ) : (
        // vertical
        <span
          id="vertical-measurement"
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
              {height}px
            </span>
          </div>
        </span>
      )}
    </div>
  );
};

export type { MeasurementProps };
