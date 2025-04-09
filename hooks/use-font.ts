import { useEffect, useState } from "react";

export type Font = "sansSerif" | "serif" | "monospace";

const classes = {
    sansSerif: "font-inter",
    serif: "font-noto",
    monospace: "font-source-code",
};

export const useFont = () => {
    const [font, setFont] = useState<Font>("sansSerif");

    useEffect(() => {
        const savedFont = localStorage.getItem("font") as Font;
        if (savedFont) {
            setFont(savedFont);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("font", font);
    }, [font]);

    return {
        font,
        setFont,
        classes,
    };
};
