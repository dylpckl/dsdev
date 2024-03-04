"use client";
import { cn } from "@/lib/utils";
import "./style.css";
import { forwardRef } from "react";

// a guideline is a dashed line that can be positioned vertically along the left or right ridge
// vertical: h-full, w-px (full height, 1px wide)
// horizontal: w-full, h-px (full width, 1px tall)

// and horizontally along the top or bottom edge

// edge: top, bottom, left, right

// vertical,
// orientation: "horizontal" | "vertical";
// edge: "left" | "top" | "right" | "bottom"; // left & right for vertical, top & bottom for horizontal

// configurations:
// vertical, left, right
// horizontal, top, bottom

// if vertical, then need to know left edge or right edge

// -----------------------------------------------------------
// Conditional Props !!!

// props that always exist
interface CommonProps {
  enabled: boolean;
}

type ConditionalProps =
  // if I choose vertical, then edge needs to be either "left" or "right"
  | {
      orientation?: "vertical";
      edge?: "left" | "right";
      length?: number;
    }
  // if I choose horizontal, then edge needs to be either "top" or "bottom"
  | {
      orientation?: "horizontal";
      edge?: "top" | "bottom";
      length?: number;
    };

// type GuidelineProps = {
//   orientation: "horizontal" | "vertical";
//   edge: "left" | "top" | "right" | "bottom";
//   length?: number;
// };

type Props = CommonProps & ConditionalProps;

export const Guideline = (props: Props) => {
  const { enabled, orientation, edge, length } = props;
  return (
    <div
      id="guideline"
      className={cn(
        orientation,
        "absolute",
        {
          "w-full": orientation === "horizontal",
          "h-px": orientation === "horizontal",
          "h-full": orientation === "vertical",
          "w-px": orientation === "vertical",
        },
        {
          "left-0": edge === "left",
          "top-0": edge === "top",
          "right-0": edge === "right",
          "bottom-0": edge === "bottom",
        }
      )}
    />
  );
  // return <div className={`${orientation} ${position} ${length}`} />;
};

// function DashedLine({
//   orientation,
//   edge,
//   length,
// }: GuidelineProps) {
//   return (
//     <div
//       id="guideline"
//       className={cn(
//         orientation,
//         "absolute",
//         {
//           "w-full": orientation === "horizontal",
//           "h-px": orientation === "horizontal",
//           "h-full": orientation === "vertical",
//           "w-px": orientation === "vertical",
//         },
//         {
//           "left-0": edge === "left",
//           "top-0": edge === "top",
//           "right-0": edge === "right",
//           "bottom-0": edge === "bottom",
//         }
//       )}
//     />
//   );
// }

// {
//   "bg-sky-500/30 text-sky-200":
//     project.status === "proof of concept",
//   "bg-teal-400/10 text-teal-300": project.status === "deployed",
//   "bg-slate-600 text-slate-200":
//     project.status === "coming soon",
//   "bg-purple-500/30 text-purple-200":
//     project.status === "in development",
// }
