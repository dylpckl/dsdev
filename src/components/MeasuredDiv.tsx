"use client";

// External
import { useRef } from "react";

// Utils
import { useDimensions } from "@/lib/useDimensions";
import { cn } from "@/lib/utils";

// Components
import Guideline from "@/components/guideline/Guideline";
import { GuidlineProps } from "@/components/guideline/Guideline";
import { Measurement, MeasurementProps } from "@/components/Measurement";

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
  measurement: boolean;
  measurementProps: MeasurementProps;
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
  measurement,
  measurementProps,
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
      {guideline && <Guideline edge={guidelineProps.edge} />}
      {measurement && (
        <Measurement
          edge={measurementProps.edge}
          length={width}
        />
      )}
      {children}
    </div>
  );
}
