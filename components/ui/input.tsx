import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: FieldError;
}

export const Input = ({ isError, className, ...props }: InputProps) => {
    return (
        <input
            {...props}
            className={twMerge(
                "px-4 py-3 border outline-0 outline-offset-[-1px] border-neutral-300 dark:border-neutral-600 rounded-lg w-full font-inter text-sm tracking-3 placeholder:text-neutral-500 text-neutral-950 dark:text-white focus-visible:shadow-border focus-visible:outline-1 focus-visible:outline-neutral-950 focus-visible:border-transparent disabled:pointer-events-none disabled:bg-neutral-50 disabled:text-neutral-300 disabled:outline-neutral-300 disabled:outline-1",
                className,
                isError &&
                    "border-red-500 outline-red-500 shadow-none focus-visible:outline-red-500 "
            )}
        />
    );
};
