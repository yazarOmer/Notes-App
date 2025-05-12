import { create } from "zustand";

type StoreType = {
    isOpen: boolean;
    openModal: (fn: () => void) => void;
    closeModal: () => void;
    action?: () => void;
};

export const useArchiveNoteModal = create<StoreType>((set) => ({
    isOpen: false,
    action: undefined,
    openModal: (fn) => {
        set({ isOpen: true, action: fn });
    },
    closeModal: () => set({ isOpen: false, action: undefined }),
}));
