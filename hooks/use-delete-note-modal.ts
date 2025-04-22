import { create } from "zustand";

type StoreType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export const useDeleteNoteModal = create<StoreType>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));
