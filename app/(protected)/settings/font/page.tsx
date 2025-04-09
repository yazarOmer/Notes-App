"use client";
import { Radio, RadioGroup } from "@/components/ui/radio-input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const FontPage = () => {
    const [font, setFont] = useState("sans");
    return (
        <div className="p-8 w-[528px]">
            <h2 className="text-neutral-950 font-medium">Font Theme: {font}</h2>
            <p className="text-sm text-neutral-700">Choose your font theme:</p>

            <RadioGroup
                value={font}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFont(e.target.value)
                }
            >
                <div className="mt-6 flex flex-col gap-4">
                    <Radio
                        icon="a"
                        value="sans"
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
            </RadioGroup>
        </div>
    );
};

export default FontPage;
