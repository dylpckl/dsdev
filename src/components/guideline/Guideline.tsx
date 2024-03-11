import { cn } from "@/lib/utils";
import "./style.css";

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

// positioning:
// width of the parent (MeasuredDiv)
// vertically oriented: position in the middle of the parent
// horizontally oriented: position in the middle of the parent
// always positioned in the middle of the parent
// horizontal: top-0 | bottom-0 + left-1/2
// vertical: left-0 | right-0 + top-1/2

// length (width [horizontal]):
// left edge of parent to left edge of ancestor
// right edge of parent to right edge of ancestor

// I actually only need left, right, top, bottom
// left = vertical left edge
// right = vertical right edge
// top = horizontal top edge
// bottom = horizontal bottom edge

type GuidlineProps = {
  edge: "left" | "right" | "top" | "bottom";
};

const Guideline = (props: GuidlineProps) => {
  const { edge } = props;
  const isHorizontal = edge === "top" || edge === "bottom";
  const isVertical = edge === "left" || edge === "right";
  return (
    <div
      id="guideline"
      className={cn(
        "absolute",
        {
          [`w-[2000px] h-px -left-[500px]`]: isHorizontal,
          "h-[2000px] w-px -top-[500px]": isVertical,
          vertical: isVertical,
          horizontal: isHorizontal,
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
};

export default Guideline;

export type { GuidlineProps };
