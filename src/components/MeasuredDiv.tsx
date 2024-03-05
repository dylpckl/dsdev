"use client";

// External
import { useRef } from "react";

// Utils
import { useDimensions } from "@/lib/useDimensions";
import { cn } from "@/lib/utils";

// Components
import { Guideline } from "@/components/guideline/Guideline";
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

type CommonProps = {
  className?: string;
  children: React.ReactNode;
};

type ConditionalProps = {
  guideline: {
    enabled: boolean;
    orientation: "horizontal" | "vertical";
    position: "left" | "top" | "right" | "bottom";
  };
  measurement: {
    enabled: boolean;
    orientation: "horizontal" | "vertical";
    position: "left" | "top" | "right" | "bottom";
  };
  // length?: string;
};

type MeasuredDivProps = CommonProps & ConditionalProps;

export default function MeasuredDiv({
  className,
  guideline,
  measurement,
  children,
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
      {guideline.enabled && (
        <Guideline
          enabled={guideline.enabled}
          orientation={guideline.orientation}
          edge={guideline.position}
          
           // pass width or height depending on orientation
        />
      )}
      {measurement.enabled && (
        <Measurement
          orientation={measurement.orientation}
          position={measurement.position}
          length={width}
        />
      )}
      {/* <p>Width: {width}px</p>
      <p>Height: {height}px</p> */}
      {children}
    </div>
  );
}

// <span
//   ref={testRef}
//   className="relative text-7xl font-sans font-bold ml-20 w-fit"
// >
//   <DashedLine
//     orientation="horizontal"
//     position="top"
//   />
//   <DashedLine
//     orientation="vertical"
//     position="left"
//   />
//   <p>width: {width}px</p>
//   <p>height: {height}px</p>
//   Smith

//   <Measurement length={width} />
// </span>;
