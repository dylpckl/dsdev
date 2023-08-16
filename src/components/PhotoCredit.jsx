import React from "react";

function PhotoCredit() {
  return (
    <div
      id="touchpoint"
      className="hidden md:block absolute group h-4 w-4 rounded-full right-10 md:right-4 bg-slate-100/60 outline outline-2 outline-offset-4 outline-slate-100/60 bottom-[40%] hover:bg-slate-100 transition-colors ease-out hover:outline-slate-100"
    >
      {/* This tooltip container exists so that the tooltip has a relative parent */}
      <div
        id="tooltipContainer"
        className="relative flex"
      >
        {/* Tooltip body */}
        <div className="absolute flex flex-col min-w-[150px] p-2 -top-[74px] -right-2 text-sm font-mono rounded-lg bg-slate-100 text-slate-800 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="font-bold">Photo Cred</span>

          <div className="flex items-center underline">
            <a
              href="https://www.pexels.com/photo/white-and-black-mountain-wallpaper-933054/"
              target="_blank"
            >
              Joyston Judah
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCredit;
