import { ComponentProps, HTMLAttributes } from "react";

interface LabelProps extends ComponentProps<"label"> {}

export const Label = ({ children }: LabelProps) => {
    return (
        <label className="text-neutral-950 font-inter text-sm tracking-3 font-medium">
            {children}
        </label>
    );
};
