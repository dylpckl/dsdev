"use client";

// External
import { useRef } from "react";

// Utils
import { useDimensions } from "@/lib/useDimensions";
import { cn } from "@/lib/utils";

// Components
import { Guideline, GuidlineProps } from "@/components/guideline/Guideline";
import Measurement from "@/components/Measurement";

// measurement accepts top, bottom, left, right
// guideline accepts top, bottom, left, right

// This component utilizies the useDimensions hook
// to dynamically measure the width and height of the div
// and pass the values to the guideline and measurement components

// PROPS ------------------------------------------------------
// -----------------------------------------------------------

// a generic div that measures its width and height and can render
// a guideline and measurement component

// -----------------------------------------------------------
// Only supports 1x guideline and 1x measurement
// -----------------------------------------------------------

type MeasuredDivProps = {
  className?: string;
  guideline: boolean;
  children: React.ReactNode;
  guidelineProps: GuidlineProps;
};

// type ConditionalProps = {
//   guideline: {
//     enabled: boolean;
//     orientation: "horizontal" | "vertical";
//     position: "left" | "top" | "right" | "bottom";
//   };
//   measurement: {
//     enabled: boolean;
//     orientation: "horizontal" | "vertical";
//     position: "left" | "top" | "right" | "bottom";
//   };
//   // length?: string;
// };

// type MeasuredDivProps = CommonProps & ConditionalProps;

export default function MeasuredDiv({
  className,
  children,
  guideline,
  guidelineProps,
}: MeasuredDivProps) {
  const divRef = useRef(null);
  const { width, height } = useDimensions(divRef);
  console.log(width, width * 4, "width");
  return (
    <div
      id="measured-div"
      ref={divRef}
      className={cn("relative", className)}
    >
      {guideline && (
        <Guideline
          orientation={guidelineProps.orientation}
          edge={guidelineProps.edge}

          // pass width or height depending on orientation
        />
      )}
      {/* {measurement.enabled && (
        <Measurement
          orientation={measurement.orientation}
          position={measurement.position}
          length={width}
        />
      )} */}
      {/* <p>Width: {width}px</p>
      <p>Height: {height}px</p> */}
      {children}
    </div>
  );
}