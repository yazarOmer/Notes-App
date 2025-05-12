import { create } from "zustand";

type Toast = {
    id: string;
    status: "success" | "error";
    message: string;
};

type ToastStore = {
    toasts: Toast[];
    success: (message: string) => void;
    error: (message: string) => void;
    close: (id: string) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    success: (message: string) => {
        set((state) => ({
            toasts: [
                ...state.toasts,
                { id: Math.random().toString(), status: "success", message },
            ],
        }));
    },
    error: (message: string) => {
        set((state) => ({
            toasts: [
                ...state.toasts,
                { id: Math.random().toString(), status: "error", message },
            ],
        }));
    },
    close: (id: string) => {
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
        }));
    },
}));
