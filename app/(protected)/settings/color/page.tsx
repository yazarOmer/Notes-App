"use client";
import { Button } from "@/components/ui/button";
import { Radio, RadioGroup } from "@/components/ui/radio-input";
import { useTheme } from "@/hooks/use-theme";
import { ThemeMode } from "@/store/useThemeStore";
import { ChangeEvent, useState } from "react";

const FontPage = () => {
    const { mode, setMode } = useTheme();
    const [selectedColor, setSelectedColor] = useState(mode);

    return (
        <div className="lg:p-8 lg:w-[528px] w-full">
            <div className="flex flex-col gap-2 mt-3">
                <h2 className="text-neutral-950 dark:text-white font-bold text-2xl lg:font-medium lg:text-base">
                    Color Theme
                </h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Choose your color theme:
                </p>
            </div>

            <RadioGroup
                value={selectedColor}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSelectedColor(e.target.value as ThemeMode)
                }
            >
                <div className="lg:mt-6 mt-5 flex flex-col gap-4">
                    <Radio
                        icon="a"
                        value="light"
                        title="Light Mode"
                        description="Pick a clean and classic light theme"
                    />
                    <Radio
                        icon="a"
                        value="dark"
                        title="Dark Mode"
                        description="Select a sleek and modern dark theme"
                    />
                    <Radio
                        icon="a"
                        value="system"
                        title="System"
                        description="Adapts to your device's theme"
                    />
                </div>
                <div className="flex justify-end mt-6">
                    <Button
                        disabled={mode === selectedColor}
                        size="sm"
                        onClick={() => {
                            setMode(selectedColor);
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
