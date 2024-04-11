"use client";

// TODO
// if guidelines are used, parentHeight and parentWidth are required

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
// This component supports
//    - 2x guideline s
//    - 1x measurement -----------------------------------------------------------

// needs to accept width of the parent <section> element

type MeasuredDivProps = {
  className?: string;
  children: React.ReactNode;
  parentHeight?: number;
  parentWidth?: number;
  guideline1: boolean;
  guideline1Props: GuidlineProps;
  guideline2: boolean;
  guideline2Props: GuidlineProps;
  measurement: boolean;
  measurementProps: MeasurementProps;
};

export default function MeasuredDiv({
  className,
  children,
  parentHeight,
  parentWidth,
  guideline1,
  guideline1Props,
  guideline2,
  guideline2Props,
  measurement,
  measurementProps,
}: MeasuredDivProps) {
  const divRef = useRef(null);
  const { width, height } = useDimensions(divRef);
  console.log("measuredDiv:", width, height, "measuredDiv");
  // This component uses the useDimensions hook to measure it's own width and height

  // console.log(width, width * 4, "width");

  return (
    <div
      id="measured-div"
      ref={divRef}
      className={cn("relative", className)}
    >
      {guideline1 && (
        <Guideline
          edge={guideline1Props.edge}
          height={parentHeight}
          width={parentWidth}
        />
      )}
      {guideline2 && (
        <Guideline
          edge={guideline2Props.edge}
          height={parentHeight}
          width={parentWidth}
        />
      )}
      {measurement && (
        <Measurement
          edge={measurementProps.edge}
          // length={width}
        />
      )}

      {children}
    </div>
  );
}

// 4 possible guidelines,
// {guidelineLeft && <Guideline edge={"left"} />}
// {guidelineRight && <Guideline edge={"right"} />}
// guideline={{left: true, right: true, top: true, bottom: true}}
