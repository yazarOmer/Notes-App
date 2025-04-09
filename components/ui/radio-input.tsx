import { ChangeEvent, ComponentProps, useContext } from "react";
import { createContext } from "react";
import { twMerge } from "tailwind-merge";

type RadioContextType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioContext = createContext<RadioContextType>({} as RadioContextType);

interface RadioProps extends ComponentProps<"input"> {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const Radio = ({
    children,
    icon,
    title,
    description,
    ...props
}: RadioProps) => {
    const { onChange, value } = useContext(RadioContext);

    return (
        <label
            className={twMerge(
                "w-full h-18 flex items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200 bg-white cursor-pointer",
                value === props.value && "bg-neutral-100"
            )}
        >
            <input
                type="radio"
                className="hidden"
                checked={value === props.value}
                onChange={onChange}
                {...props}
            />
            <div className="flex gap-4 items-center">
                <div className="size-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="text-sm text-neutral-950 font-medium">
                        {title}
                    </h3>
                    <span className="text-xs text-neutral-700">
                        {description}
                    </span>
                </div>
            </div>
            <div
                className={twMerge(
                    "size-4 bg-neutral-200 rounded-full flex items-center justify-center",
                    value === props.value && "bg-blue-500"
                )}
            >
                <div
                    className={twMerge(
                        "bg-white rounded-full size-3.5",
                        value === props.value && "size-2"
                    )}
                ></div>
            </div>
        </label>
    );
};

interface RadioGroupProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}

export const RadioGroup = ({ children, onChange, value }: RadioGroupProps) => {
    return (
        <RadioContext.Provider value={{ onChange, value }}>
            {children}
        </RadioContext.Provider>
    );
};
