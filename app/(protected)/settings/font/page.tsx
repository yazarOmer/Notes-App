"use client";
import { Button } from "@/components/ui/button";
import { Radio, RadioGroup } from "@/components/ui/radio-input";
import { useFont } from "@/hooks/use-font";
import { FontKey } from "@/store/useFontStore";
import { ChangeEvent, useState } from "react";

const FontPage = () => {
    const { font, setFont } = useFont();
    const [selectedFont, setSelectedFont] = useState(font);

    return (
        <div className="lg:p-8 lg:w-[528px] w-full">
            <div className="flex flex-col gap-2 mt-3">
                <h2 className="text-neutral-950 font-bold text-2xl lg:font-medium lg:text-base">
                    Font Theme
                </h2>
                <p className="text-sm text-neutral-700">
                    Choose your font theme:
                </p>
            </div>

            <RadioGroup
                value={selectedFont}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSelectedFont(e.target.value as FontKey)
                }
            >
                <div className="lg:mt-6 mt-5 flex flex-col gap-4">
                    <Radio
                        icon="a"
                        value="sansSerif"
                        title="Sans-serif"
                        description="Clean and modern, easy to read."
                    />
                    <Radio
                        icon="a"
                        value="serif"
                        title="Serif"
                        description="Classic and elegant for a timeless feel."
                    />
                    <Radio
                        icon="a"
                        value="monospace"
                        title="Monospace"
                        description="Code-like, great for a technical vibe."
                    />
                </div>
                <div className="flex justify-end mt-6">
                    <Button
                        disabled={font === selectedFont}
                        size="sm"
                        onClick={() => {
                            setFont(selectedFont);
                        }}
                    >
                        Apply Changes
                    </Button>
                </div>
            </RadioGroup>
        </div>
    );
};

export default FontPage;
