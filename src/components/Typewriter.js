'use client'
import { useState, useEffect } from "react";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ weight: ['400'], subsets: ['latin'] })

const Typewriter = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }

    }, [currentIndex, delay, text]);

    return <div className={`${dancing_script.className} text-4xl`}>{displayText}</div>;
}

export default Typewriter