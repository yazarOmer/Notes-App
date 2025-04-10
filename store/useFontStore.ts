import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FontKey = "sansSerif" | "serif" | "monospace";

interface FontStore {
    font: FontKey;
    setFont: (font: FontKey) => void;
}

export const useFontStore = create<FontStore>()(
    persist(
        (set) => ({
            font: "sansSerif",
            setFont: (font) => set({ font }),
        }),
        {
            name: "user-font", // localStorage key
        }
    )
);
