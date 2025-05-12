"use client";
import { useToastStore } from "@/store/useToastStore";
import { Toast } from "./ui/toast";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const toasts = useToastStore((state) => state.toasts);

    return (
        <div>
            {children}
            <div className="flex flex-col-reverse z-20 gap-5 fixed bottom-15 right-15">
                {toasts &&
                    toasts.map((toast) => (
                        <Toast
                            id={toast.id}
                            key={toast.id}
                            message={toast.message}
                            status={toast.status}
                        />
                    ))}
            </div>
        </div>
    );
};
