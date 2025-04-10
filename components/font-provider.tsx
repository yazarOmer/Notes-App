"use client";

import { useFont } from "@/hooks/use-font";

const classes = {
    sansSerif: "font-inter",
    serif: "font-noto",
    monospace: "font-source-code",
};

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
    const { font } = useFont();

    return <div className={`${classes[font]}`}>{children}</div>;
};
