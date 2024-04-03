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

// needs to accept the width of the parent <section> element

type GuidlineProps = {
  edge: "left" | "right" | "top" | "bottom";
  width?: number;
  height?: number;
};

const Guideline = (props: GuidlineProps) => {
  const { edge, width, height } = props;
  // if horizontal, we need width
  // if vertical, we need height

  const halfWidth = width && width / 2;
  const halfHeight = height && height / 2;
  console.log(
    "GUIDELINE:",
    "width",
    width,
    "height",
    height,
    "edge",
    edge,
    "halfWidth",
    halfWidth,
    "halfHeight",
    halfHeight
  );

  // set the edge
  const isHorizontal = edge === "top" || edge === "bottom";
  const isVertical = edge === "left" || edge === "right";

  //

  const styles = {
    isHorizontal: {
      width: isHorizontal ? `${width}px` : undefined,
      height: isHorizontal ? "1px" : undefined,
      left: `-${halfWidth}px`,
    },
    isVertical: {
      width: isVertical ? "1px" : undefined,
      height: isVertical ? `${height}px` : undefined,
      top: `-${halfHeight}px`,
    },
  };

  return (
    <div
      id="guideline"
      style={isHorizontal ? styles.isHorizontal : styles.isVertical}
      className={cn(
        "absolute -z-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]",
        {
          vertical: isVertical,
          horizontal: isHorizontal,
          // [`w-[var(--)] h-px -left-[${halfWidth}px]`]: isHorizontal,
          // [`h-[${height}px] w-px -top-[${halfHeight}px]"`]: isVertical,
        },
        {
          // horizontal
          "top-0": edge === "top",
          "bottom-0": edge === "bottom",
          // vertical
          "left-0": edge === "left",
          "right-0": edge === "right",
        }
      )}
    />
  );
};

export default Guideline;
export type { GuidlineProps };

{
  /* <div className="fixed inset-0 h-full w-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div> */
}
