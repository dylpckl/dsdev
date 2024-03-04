import { useRef } from "react";
import { useDimensions } from "@/lib/useDimensions";

import { Guideline } from "@/components/guideline/Guideline";
import Measurement from "@/components/Measurement";

// measurement accepts top, bottom, left, right
// guideline accepts top, bottom, left, right

// PROPS ------------------------------------------------------

// -----------------------------------------------------------

// a generic div that measures its width and height and can render
// a guideline and measurement component

// -----------------------------------------------------------
// Only supports 1x guideline and 1x measurement
// -----------------------------------------------------------

type MeasuredDivProps = {
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
  children: React.ReactNode;
};

export default function MeasuredDiv({
  guideline,
  measurement,
  children,
}: MeasuredDivProps) {
  const divRef = useRef(null);
  const { width, height } = useDimensions(divRef);
  return (
    <div
      id="measured-div"
      ref={divRef}
      className="bg-gray-100 p-4 relative"
    >
      {guideline.enabled && (
        <Guideline
          orientation={guideline.orientation}
          edge={guideline.position}
          length={100} // pass width or height depending on orientation
        />
      )}
      {measurement.enabled && (
        <Measurement
          orientation={measurement.orientation}
          position={measurement.position}
          length={100}
        />
      )}
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
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
