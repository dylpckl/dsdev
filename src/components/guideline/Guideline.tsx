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

// props that always exist
type CommonProps = {
  // enabled: boolean;
};

type ConditionalProps =
  // if I choose vertical, then edge needs to be either "left" or "right"
  | {
      orientation: "vertical";
      edge: "left" | "right";
      // height: number;
      // width: never;
    }
  // if I choose horizontal, then edge needs to be either "top" or "bottom"
  | {
      orientation: "horizontal";
      edge: "top" | "bottom";
      // height: never;
      // width: number;
    };

type GuidlineProps = CommonProps & ConditionalProps;

export const Guideline = (props: GuidlineProps) => {
  const { orientation, edge } = props;
  // const { orientation, edge, height, width } = props;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  return (
    <div
      id="guideline"
      className={cn(
        orientation,
        "absolute",
        {
          [`w-[2000px] h-px -left-[500px]`]: isHorizontal,
          "h-full w-px top-1/2": isVertical,
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

export type { GuidlineProps };
