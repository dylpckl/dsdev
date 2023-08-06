"use client";
import { useRef } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {
  return <button onClick={scrollToTop}>scroll</button>;
};

export default ScrollToTop;
