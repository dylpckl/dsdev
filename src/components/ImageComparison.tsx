"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";

export default function ImageComparison({ caseStudy }) {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef < HTMLDivElement > null;

  const slide = (xPos: number) => {
    const container = imageContainer.current;

    if (container) {
      const containerBoundingRect = container.getBoundingClientRect();
      if (xPos < containerBoundingRect.left) {
        return 0;
      } else if (xPos > containerBoundingRect.right) {
        return 1;
      } else {
        setImageRevealFraq(() => {
          return (
            (xPos - containerBoundingRect.left) / containerBoundingRect.width
          );
        });
      }
    }
  };

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const handleMouseUp = (): void => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX);
  };

  return (
    <div
      ref={imageContainer}
      className="relative overflow-hidden w-full h-[60vh] bg-pink-300 select-none rounded-md"
    >
      {/* p */}
      <Image
        src={caseStudy.spireImage}
        alt={caseStudy.title}
        fill
        style={{ objectFit: "cover", objectPosition: "left top" }}
        className="pointer-events-none"
      />
      {/* Explorer Image */}
      <Image
        src={caseStudy.explorerImage}
        alt={caseStudy.title}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "left top",
          filter: "grayscale(100%)",
          clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
            imageRevealFraq * 100
          }% 100%, 0 100%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Drag Handle */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${imageRevealFraq * 100}%` }}
      >
        <div className="relative h-full">
          <div className="absolute inset-y-0 bg-teal-300 w-0.5 -ml-px">
            {/* <div className="absolute inset-y-0 bg-red-300 w-0.5 -ml-px"> */}
            <div
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="flex justify-center items-center h-12 w-12 -ml-6 -mt-6 rounded-full absolute top-1/2 bg-teal-300 text-teal-800 shadow-xl  cursor-e-resize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
