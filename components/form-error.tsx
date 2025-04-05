interface FormErrorProps {
    message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    return (
        <div className="w-full p-4 px-5 bg-red-200 text-red-500 rounded-lg">
            {message}
        </div>
    );
};
