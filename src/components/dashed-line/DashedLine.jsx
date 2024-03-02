"use client";
import "./style.css";

import { forwardRef } from "react";

export default function DashLine({ width }) {
  console.log(width);
  return (
    <>
      <div className={`dashed-line`}></div>

      {/* <div
        className={`absolute -left-1/2 w-[906.17185px] border-t-2 border-orange-300 border-dashed h-10 -top-1`}
      >
        
      </div> */}

      {/* <div className="absolute -left-1/2 w-[400px] border-t-2 border-orange-300 border-dashed h-10 -top-1"></div> */}
    </>
  );
}

{
  /* <div className="box-border absolute 300 -left-1/2 w-[400px] h-2 top-0 border-t-2 border-orange-300 bg-gradient-to-r border-dashed" /> */
}

{
  /* <div className="absolute -left-1/2 w-[400px] border-t-2 border-orange-300 border-dashed h-10 -top-1">
      <div className="relative">
        <div className="h-10 w-10 absolute bg-white
        
        " />
      </div>
    </div> */
}
