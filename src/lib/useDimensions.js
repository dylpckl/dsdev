// "use client";
// import { useState, useEffect } from "react";

// export default function useDimensions(ref) {
//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     const updateSize = () => {

//       setWidth(ref.current.offsetWidth);
//       setHeight(ref.current.offsetHeight);
//     };

//     window.addEventListener("resize", updateSize);
//     updateSize();

//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return { width, height };
// }

// "use client";
// import { RefObject, useMemo, useSyncExternalStore } from "react";

// function subscribe(callback: (e: Event) => void) {
//   window.addEventListener("resize", callback);
//   return () => {
//     window.removeEventListener("resize", callback);
//   };
// }

// function useDimensions(ref: RefObject<HTMLElement>) {
//   const dimensions = useSyncExternalStore(subscribe, () =>
//     JSON.stringify({
//       width: ref.current?.offsetWidth ?? 0,
//       height: ref.current?.offsetHeight ?? 0,
//     })
//   );
//   return useMemo(() => JSON.parse(dimensions), [dimensions]);
// }

// export { useDimensions };

// "use client";
// import { useMemo, useSyncExternalStore } from "react";

// export function useDimensions(ref) {
//   const dimensions = useSyncExternalStore(subscribe, getSnapshot(ref), getServerSnapshot);
//   return useMemo(() => JSON.parse(dimensions), [dimensions]);
// }

// function getSnapshot(ref) {
//   const res = JSON.stringify({
//     width: ref.current?.offsetWidth ?? 0,
//     height: ref.current?.offsetHeight ?? 0,
//   });
//   console.log(res)
//   return res;
// }

// function getServerSnapshot() {
//   return JSON.stringify({ "width": 0, "height": 0 }); // always return 0 for server-generated HTML
// }

// function subscribe(callback) {
//   window.addEventListener("resize", callback);
//   return () => {
//     window.removeEventListener("resize", callback);
//   };
// }

'use client'
import { useState, useEffect } from "react"

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  // console.log(ref)
  // if (ref.current) {
  //   const cs = getComputedStyle(ref.current);

  //   const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
  //   const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

  //   const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
  //   const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
  // }

  // see: 
  //  https://stackoverflow.com/questions/25197184/get-the-height-of-an-element-minus-padding-margin-border-widths

  useEffect(() => {
    const cs = getComputedStyle(ref.current);

    const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

    const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

    // Element width and height minus padding and border
    let width = ref.current.offsetWidth - paddingX - borderX;
    let height = ref.current.offsetHeight - paddingY - borderY;

    const getDimensions = () => ({
      width: width,
      height: height,
      // width: ref.current.offsetWidth,
      // height: ref.current.offsetHeight,
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    ref.current && setDimensions(getDimensions())

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [ref])

  return dimensions
}
