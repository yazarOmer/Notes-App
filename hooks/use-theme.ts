import { useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

export const useTheme = () => {
    const mode = useThemeStore((state) => state.mode);
    const setMode = useThemeStore((state) => state.setMode);

    useEffect(() => {
        const root = window.document.documentElement;

        const applyTheme = () => {
            if (mode === "system") {
                const isDark = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                root.classList.toggle("dark", isDark);
            } else {
                root.classList.toggle("dark", mode === "dark");
            }
        };

        applyTheme();

        // Eğer system moddaysa, kullanıcı sistem temasını değiştirirse yeniden uygula
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemChange = () => {
            if (useThemeStore.getState().mode === "system") {
                applyTheme();
            }
        };

        media.addEventListener("change", handleSystemChange);

        return () => {
            media.removeEventListener("change", handleSystemChange);
        };
    }, [mode]);

    return {
        mode,
        setMode,
    };
};
