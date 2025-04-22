import { Button } from "./button";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import { HTMLAttributes } from "react";

const ModalOverlay = () => {
    return <div className="fixed inset-0 z-30 bg-black/80" />;
};

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const ModalHeader = ({ children, className, ...props }: ModalHeaderProps) => {
    return (
        <div
            className={twMerge(
                "p-5 flex gap-4 border-b border-neutral-200",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = ({ children, className, ...props }: ModalTitleProps) => {
    return (
        <h3
            className={twMerge("text-neutral-950 font-semibold", className)}
            {...props}
        >
            {children}
        </h3>
    );
};

interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const ModalDescription = ({
    children,
    className,
    ...props
}: ModalDescriptionProps) => {
    return (
        <p
            className={twMerge("text-neutral-700 text-sm", className)}
            {...props}
        >
            {children}
        </p>
    );
};

const ModalIcon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-14 h-10 bg-neutral-100 flex items-center justify-center rounded-lg">
            {children}
        </div>
    );
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
    return <div className="px-5 py-4 flex">{children}</div>;
};

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
    return (
        <div className={twMerge(!isOpen && "hidden")}>
            <ModalOverlay />
            <div className="fixed left-[50%] top-[50%] z-30 max-w-lg w-full translate-x-[-50%] translate-y-[-50%] flex flex-col bg-white rounded-2xl">
                {children}
            </div>
        </div>
    );
};

export {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalIcon,
    ModalFooter,
};
