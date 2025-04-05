"use client";
import {
    ComponentProps,
    createContext,
    HTMLAttributes,
    useContext,
    useId,
} from "react";
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Label } from "./label";

import { FiInfo } from "react-icons/fi";

const Form = FormProvider;

type FormFieldContextValue = {
    name: string;
};

const FormFieldContext = createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
);

type FormItemContextValue = {
    id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
    {} as FormItemContextValue
);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

const FormItem = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const id = useId();
    return (
        <FormItemContext.Provider value={{ id }}>
            <div
                className={twMerge("flex flex-col gap-1.5 mt-4", className)}
                {...props}
            />
        </FormItemContext.Provider>
    );
};

const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);

    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

const FormLabel = ({ className, ...props }: ComponentProps<"label">) => {
    const { error, formItemId } = useFormField();
    return (
        <Label
            htmlFor={formItemId}
            {...props}
            className={twMerge(error && "text-red-500", className)}
        />
    );
};

const FormDescription = ({ className, ...props }: ComponentProps<"p">) => {
    return (
        <div className="flex items-center gap-2">
            <FiInfo className="text-neutral-600" />
            <p
                className={twMerge("text-sm text-neutral-600", className)}
                {...props}
            />
        </div>
    );
};

const FormMessage = ({
    className,
    children,
    ...props
}: ComponentProps<"p">) => {
    const { error } = useFormField();

    const message = error ? error.message?.toString() : children;

    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center gap-1.5">
            <FiInfo className="text-red-500" />
            <p
                className={twMerge("text-sm text-red-500", className)}
                {...props}
            >
                {message}
            </p>
        </div>
    );
};

export { FormDescription, FormMessage, FormLabel, FormItem, FormField, Form };
