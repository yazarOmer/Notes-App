import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Logo } from "../logo";

interface CardProps extends PropsWithChildren {
    className?: string;
    title: string;
    description: string;
}

export const Card = ({
    children,
    className,
    description,
    title,
}: CardProps) => {
    return (
        <div
            className={twMerge(
                "w-full md:max-w-[522px] lg:max-w-[540px] px-4 py-10 md:px-8 md:py-12 lg:px-12 flex flex-col items-center gap-4 rounded-xl bg-white border border-neutral-200 drop-shadow-lg",
                className
            )}
        >
            <Logo />

            <div className="py-4 flex flex-col items-center gap-2">
                <h2 className="text-neutral-950 font-inter font-bold text-2xl tracking-1">
                    {title}
                </h2>
                <span className="text-neutral-600 font-inter text-sm tracking-3 text-center">
                    {description}
                </span>
            </div>
            {children}
        </div>
    );
};
