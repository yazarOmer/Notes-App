import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    "inline-flex items-center justify-center w-full transition-colors font-medium tracking-3 rounded-lg cursor-pointer disabled:pointer-events-none focus-visible:shadow-border",
    {
        variants: {
            variant: {
                primary:
                    "bg-blue-500 text-white hover:bg-blue-700 disabled:bg-neutral-100 disabled:text-neutral-300 disabled:dark:text-[#7A828E] disabled:cursor-not-allowed disabled:opacity-60 disabled:dark:bg-[#2A2E35]focus-visible:outline-none",
                secondary:
                    "text-neutral-600 bg-neutral-100 hover:outline hover:outline-neutral-300 hover:text-neutral-950 hover:bg-white hover:outline-offset-[-1px] disabled:bg-neutral-50 disabled:text-neutral-300",
                border: "text-neutral-950 bg-transparent outline outline-neutral-300 outline-offset-[-1px] hover:bg-neutral-100 hover:text-neutral-600 hover:outline-none focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 disabled:bg-neutral-50 disabled:text-neutral-300",
            },
            size: {
                default: "px-4 py-3",
                sm: "px-4 py-2 text-sm w-fit",
                lg: "px-3 py-4 rounded-xl",
                icon: "size-12 md:size-16 rounded-full p-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
};
