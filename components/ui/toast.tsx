"use client";
import { useToastStore } from "@/store/useToastStore";
import { Ban, Check, X } from "lucide-react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type ToastProps = {
    message: string;
    id: string;
    status: "success" | "error";
};

export const Toast = ({ message, id, status }: ToastProps) => {
    const toast = useToastStore();
    const Icon = status === "success" ? Check : Ban;

    useEffect(() => {
        setTimeout(() => {
            toast.close(id);
        }, 30000);
    }, []);
    return (
        <div className="w-[390px] p-2 flex items-center justify-between rounded-lg bg-white border border-neutral-200 text-black z-50 animate-slide-in">
            <div className="flex items-center gap-2">
                <div
                    className={twMerge(
                        "size-4 rounded-full flex items-center justify-center",
                        status === "success" ? "bg-green-500" : "bg-rose-500"
                    )}
                >
                    <Icon className="text-white size-3" />
                </div>
                {message}
            </div>
            <button
                className="p-1 rounded-full hover:bg-neutral-100 cursor-pointer transition"
                onClick={() => toast.close(id)}
            >
                <X className="text-neutral-400 size-4" />
            </button>
        </div>
    );
};
