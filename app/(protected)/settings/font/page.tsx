"use client";
import { Button } from "@/components/ui/button";
import { Radio, RadioGroup } from "@/components/ui/radio-input";
import { Font, useFont } from "@/hooks/use-font";
import { ChangeEvent, useState } from "react";

const FontPage = () => {
    const { font, setFont } = useFont();
    const [selectedFont, setSelectedFont] = useState(font);

    return (
        <div className="p-8 w-[528px]">
            <h2 className="text-neutral-950 font-medium">Font Theme</h2>
            <p className="text-sm text-neutral-700">Choose your font theme:</p>

            <RadioGroup
                value={selectedFont}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSelectedFont(e.target.value as Font)
                }
            >
                <div className="mt-6 flex flex-col gap-4">
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
