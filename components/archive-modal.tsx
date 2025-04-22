"use client";
import {
    Modal,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalIcon,
    ModalTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useArchiveNoteModal } from "@/hooks/use-archive-note-modal";
import { MdOutlineArchive } from "react-icons/md";

export const ArchiveModal = () => {
    const { isOpen, closeModal, action } = useArchiveNoteModal();

    const onArchive = () => {
        action?.();
        closeModal();
    };

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <ModalIcon>
                    <MdOutlineArchive size={20} />
                </ModalIcon>
                <div className="flex flex-col gap-1.5">
                    <ModalTitle>Archive Note</ModalTitle>
                    <ModalDescription>
                        Are you sure you want to archive this note? You can find
                        it in the Archived Notes section and restore it anytime.
                    </ModalDescription>
                </div>
            </ModalHeader>
            <ModalFooter>
                <Button
                    variant="secondary"
                    onClick={closeModal}
                    className="w-fit ml-auto mr-4"
                >
                    Cancel
                </Button>
                <Button className="w-fit" onClick={onArchive}>
                    Archive Note
                </Button>
            </ModalFooter>
        </Modal>
    );
};
