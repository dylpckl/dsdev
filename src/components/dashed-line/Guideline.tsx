"use client";
import { cn } from "@/lib/utils";
import "./style.css";
import { forwardRef } from "react";

type DashedLinedProps = {
  orientation: "horizontal" | "vertical";
  position: "left" | "top" | "right" | "bottom";
  length?: string;
};

export default function DashedLine({
  orientation,
  position,
  length,
}: DashedLinedProps) {
  return (
    <div
      className={cn(
        orientation,
        {
          "w-full": orientation === "horizontal",
          "h-full": orientation === "vertical",
        },
        {
          "left-0": position === "left",
          "top-0": position === "top",
          "right-0": position === "right",
          "bottom-0": position === "bottom",
        },
        length
      )}
    />
  );
  // return <div className={`${orientation} ${position} ${length}`} />;
}

// {
//   "bg-sky-500/30 text-sky-200":
//     project.status === "proof of concept",
//   "bg-teal-400/10 text-teal-300": project.status === "deployed",
//   "bg-slate-600 text-slate-200":
//     project.status === "coming soon",
//   "bg-purple-500/30 text-purple-200":
//     project.status === "in development",
// }
