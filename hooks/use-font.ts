// hooks/useFont.ts
import { useFontStore } from "@/store/useFontStore";

export const useFont = () => {
    const font = useFontStore((state) => state.font);
    const setFont = useFontStore((state) => state.setFont);

    return {
        font,
        setFont,
    };
};
