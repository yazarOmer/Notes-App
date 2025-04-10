import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SeperatorProps extends HTMLAttributes<HTMLDivElement> {}

export const Seperator = ({ className, ...props }: SeperatorProps) => {
    return (
        <div
            className={twMerge(
                "w-full h-px bg-neutral-200 dark:bg-neutral-800",
                className
            )}
            {...props}
        />
    );
};
